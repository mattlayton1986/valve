'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';

export function AuthControl() {
	const pathname = usePathname();
	const { data: session, status } = useSession();

	const next = pathname?.startsWith('/') ? pathname : '/';

	if (status === 'loading') {
		return (
			<div className="text-sm text-muted-foreground">
				Checking session...
			</div>
		);
	}

	if (!session) {
		return (
			<Link
				href={`/login?next=${encodeURIComponent(next)}`}
				className="text-sm font-medium underline underline-offset-4"
			>
				Sign in
			</Link>
		);
	}

	return (
		<div className="flex items-center gap-3">
			<span className="text-sm text-muted-background">
				{session.user?.email ?? "Signed in"}
			</span>

			<button
				type="button"
				onClick={() => signOut({ callbackUrl: '/' })}
				className="text-sm font-medium underline underline-offset-4"
			>
				Sign out
			</button>
		</div>
	);
}