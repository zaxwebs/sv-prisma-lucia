import { auth } from "$lib/server/lucia";
import { redirect } from "@sveltejs/kit";

export const load = async ({ locals }) => {
	const { user } = await locals.auth.validateUser();
	if (user) throw redirect(302, '/');

	const username = "user" + Math.floor(Math.random() * 1000);
	const password = "xxx";

	const newUser = await auth.createUser({
		primaryKey: {
			providerId: "username",
			providerUserId: username,
			password
		},
		attributes: {
			username
		}
	});

	const session = await auth.createSession(newUser.userId);
	locals.auth.setSession(session);
}