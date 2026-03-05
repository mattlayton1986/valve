import { redirect } from 'next/navigation';
import { getServerAuthSession } from '@/auth';
import { toAuthenticatedUser, type AuthenticatedUser } from '@valve/auth';
import type { UserRole } from '@valve/db';

export async function requireSignedIn(
	next: string = '/'
): Promise<AuthenticatedUser> {
	const session = await getServerAuthSession();

	if (!session?.user) {
		redirect(`/login?next=${encodeURIComponent(next)}`);
	}
	return toAuthenticatedUser({
		id: session.user.id,
		email: session.user.email,
		role: session.user.role,
	});
}

export async function requireRole(
	role: UserRole, 
	next: string = '/'
): Promise<AuthenticatedUser> {
	const user = await requireSignedIn(next);

	if (user.role !== role) {
		redirect('/');
	}

	return user;
}

export async function requireAdmin(
	next: string = '/'
): Promise<AuthenticatedUser> {
	return requireRole('ADMIN', next);
}