import type { DefaultSession } from 'next-auth';
import type { UserRole } from '@valve/db';

declare module 'next-auth' {
	interface Session {
		user: {
			id: string;
			role: UserRole;
		} & DefaultSession['user'];
	}
}

declare module 'next-auth/adapters' {
	interface AdapterUser {
		role?: UserRole;
	}
}