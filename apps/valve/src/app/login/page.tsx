import { GitHubSignInButton } from "@/components/auth/GitHubSignInButton";

type SearchParams = Record<string, string | string[] | undefined>;

// param typed as "unknown" for user-controlled input since we
// can't guarantee this will be a string. Function body demands
// proof of string type. 
function safeNext(nextParam: unknown) {
	if (typeof nextParam !== 'string') return '/';
	if (!nextParam.startsWith('/')) return '/';
	// prevents "//evil.com" style hacks
	if (nextParam.startsWith('//')) return '/';
	return nextParam;
}

export default async function LoginPage({
	searchParams,
}: {
	searchParams?: Promise<SearchParams>;
}) {
	const sp = (await searchParams) ?? {};
	const next = safeNext(sp.next);

	return (
		<main className="min-h-screen flex items-center justify-center p-6">
			<div className="w-full max-w-md rounded-lg border p-6">
				<h1 className="text-2xl font-semibold">Sign in</h1>
				<p className="mt-2 text-sm text-muted-foreground">
					After signing in, you'll be returned to <span className="font-medium">{next}</span>.
				</p>

				<GitHubSignInButton callbackUrl={next} />

				<p className="mt-4 text-sx text-muted-foreground">
					Tip: You can test redirects by visiting{" "}
					<code className="rounded bg-muted px-1 py-0.5">/login?next=/flags</code>.
				</p>
			</div>
		</main>
	);
}