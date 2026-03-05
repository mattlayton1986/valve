import { requireAdmin } from '@/lib/rbac';

export default async function AdminPage() {
	const user = await requireAdmin('/admin');

	return (
		<main>
			<h1 className="text-2xl font-semibold">Admin</h1>
			<p className="mt-2 text-sm text-muted-foreground">
				You are signed in as <span className="font-medium">{user.email}</span> with role{" "}
				<span className="font-medium">{user.role}</span>
			</p>

			<div className="mt-6 rounded-lg border p-4">
				<p className="text-sm">
					Placeholder admin surface. This route exists to prove RBAC enforcement works.
				</p>
			</div>
		</main>
	);
}