import { auth } from "$lib/server/lucia";

export const load = async ({ locals }) => {
	const username = "user" + Math.floor(Math.random() * 1000);
	const password = "xxx";
	const user = await auth.createUser({
		primaryKey: {
			providerId: "username",
			providerUserId: username,
			password
		},
		attributes: {
			username
		}
	});
	const session = await auth.createSession(user.userId);
	locals.auth.setSession(session);
}