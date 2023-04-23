import { auth } from "$lib/server/lucia";
import { redirect } from "@sveltejs/kit";

export const load = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (session) {
		throw redirect(303, '/');
	}

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

	const newSession = await auth.createSession(user.userId);
	locals.auth.setSession(newSession);
}