import { redirect } from 'next/navigation';
import { getServerAuthSession } from '@/auth';

export async function requireSignedIn(next: string = '/') {
	const session = await getServerAuthSession();

	if (!session?.user) {
		redirect(`/login?next=${encodeURIComponent(next)}`);
	}
	return session;
}

export async function requireRole(role: 'ADMIN' | 'USER', next: string = '/') {
	const session = await requireSignedIn(next);
	if (session.user.role !== role) {
		redirect('/');
	}

	return session;
}

export async function requireAdmin(next: string = '/') {
	return requireRole('ADMIN', next);
}