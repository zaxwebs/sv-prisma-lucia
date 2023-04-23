// src/app.d.ts
/// <reference types="lucia-auth" />
declare global {
	namespace Lucia {
		type Auth = import('$lib/lucia').Auth
		type UserAttributes = {
			username: string
		}
	}
}
