/**
 * Routes that are accessible without authentication
 * @type {string[]}
 */
export const publicRoutes: string[] = ["/"];

/**
 * Routes that are used for authentication
 * Routes that are accessible with authentication
 * @type {string[]}
 */
export const authRoutes: string[] = ["/sign-up", "/login"];

/**
 * Authenticated routes
 * Routes that are accessible with authentication
 * @type {string}
 */
export const apiAuthPrefix: string = "/api/auth";
