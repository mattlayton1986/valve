import NextAuth, { type NextAuthOptions } from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import GitHubProvider from 'next-auth/providers/github';
import { getServerSession } from 'next-auth/next';

import { db } from '@valve/db';

export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(db),
	providers: [
		GitHubProvider({
			clientId: process.env.GH_CLIENT_ID!,
			clientSecret: process.env.GH_CLIENT_SECRET!,
		})
	],
	session: {
		strategy: 'database',
	},
	callbacks: {
		async session({ session, user }) {
			// Expose databse user id and role on the session
			if (session.user) {
				session.user.id = user.id;
				session.user.role = user.role ?? 'USER';
			}
			return session;
		},
	},
};

export const authHandler = NextAuth(authOptions);

// Convenience helper for server-side session access
export function getServerAuthSession() {
	return getServerSession(authOptions);
}