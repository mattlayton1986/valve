import { redirect } from 'next/navigation';
import { getServerAuthSession } from '@/auth';

export default async function FlagsPage() {
	const session = await getServerAuthSession();

	if (!session) {
		redirect('/login?next=/flags');
	}

	return (
		<main className="p-6">
			<h1 className="text-2xl font-semibold">Flags</h1>
			<p className="mt-2 text-sm text-muted-foreground">
				You are signed in as <span className="font-medium">{session.user?.email ?? "unknown"}</span>.
			</p>
			<div className="mt-6 rounded-lg border p-4">
				<p className="text-sm">Placeholder: flags UI will be built later.</p>
			</div>
		</main>
	);
}