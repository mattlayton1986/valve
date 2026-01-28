import Link from 'next/link';

type AuthControlProps =
	| { state: "signedOut" }
	| { state: "signedIn"; displayName: string };

export function AuthControl(props: AuthControlProps) {
	if (props.state === "signedOut") {
		return (
			<Link href="/login" className="rounded-md border px-3 py-1.5 hover:bg-muted">
				Sign In
			</Link>
		);
	}

	return (
		<button
			type="button"
			disabled
			className="rounded-md border px-3 py-1.5 opacity-70"
			title="Auth runtime not wired yet"
		>
			{props.displayName} ▾
		</button>
	)
}