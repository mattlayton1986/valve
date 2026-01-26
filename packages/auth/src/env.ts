export type OAuthProvider = "github";

/**
 * These are the environment variables we will require once we 
 * wire auth into a Next.js app.
 * For now this is a shared “contract” package.
 */
export type AuthEnv = {
	AUTH_PROVIDER: OAuthProvider;

	/**
	* Used to sign/encrypt session cookies or tokens.
	* Must be long and random in real environments.
	*/
	AUTH_SECRET: string;

	  /**
   * GitHub OAuth app credentials (dev only initially).
   */
	GITHUB_CLIENT_ID: string;
	GITHUB_CLIENT_SECRET: string;

	/**
   * Base URL where the auth callbacks will run (console app later).
   * Example: http://localhost:3000
   */
	AUTH_BASE_URL: string;
}