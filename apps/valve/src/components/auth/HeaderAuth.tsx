'use client';

import { SessionProvider } from 'next-auth/react';
import { AuthControl } from '@/components/auth/AuthControl';

export function HeaderAuth() {
	return (
		<SessionProvider>
			<AuthControl />
		</SessionProvider>
	);
}