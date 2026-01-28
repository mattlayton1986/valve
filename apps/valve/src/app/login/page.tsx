import Link from 'next/link';

type SearchParams = Record<string, string | string[] | undefined>;

export default async function LoginPage({
	searchParams,
}: {
	searchParams?: Promise<SearchParams>;
}) {
	const sp = (await searchParams) ?? {};

	const next = typeof sp?.next === 'string' && sp.next.startsWith('/')
		? sp.next
		: '/';
	return (
		<div className="space-y-6">
			<header className="space-y-2">
				<h1 className="text-2xl font-semibold">Sign in</h1>
				<p className="txt-sm text-muted-foreground">
					Authentication isn't wired yet. This is UI scaffolding only.
				</p>
			</header>

			<div className="rounded-lg border p-4">
				<p className="text-sm">
					This page will eventually offer OAuth sign-in (GitHub) and session-based access.
				</p>

				<div className="mt-4 flex gap-3">
					<button
						type="button"
						disabled
						className="rounded-md border px-3 py-2 text-sm opacity-60"
						title="Auth runtime not wired yet"
					>
						Continue with GitHub (disabled)
					</button>

					<Link href={next} className="rounded-md border px-3 py-2 text-sm hover:underline">
					Back</Link>
				</div>

				<p className="mt-3 text-xs text-muted-foreground">
					After sign-in, you'll be redirected to: <span className="font-mono">{next}</span>
				</p>
			</div>
		</div>
	);
}