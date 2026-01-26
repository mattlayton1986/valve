import type { UserRole } from "@valve/db";

export type AuthenticatedUser = {
	id: string;
	email: string;
	role: UserRole;
}

/**
 * Asserts that a user exists.
 * Useful at app boundaries (routes, actions, handlers).
 */
export function requireUser(user: AuthenticatedUser | null): AuthenticatedUser {
	if (!user) {
		throw new Error("Unauthenticated");
	}
	return user;
}

/**
 * Asserts that a user is an admin.
 */
export function requireAdmin(user: AuthenticatedUser | null): AuthenticatedUser {
	const u = requireUser(user);
	if (u.role !== "ADMIN") {
		throw new Error("Unauthorized");
	}
	return u;
}