import { redirect } from '@sveltejs/kit';
import { auth } from '$lib/server/lucia';

export const load = async ({ locals }) => {

	const session = await locals.auth.validate();
	if (session) {
		throw redirect(303, '/');
	}


	const username = 'user957';
	const password = 'xxx'
	const key = await auth.useKey('username', username, password);
	const newSession = await auth.createSession(key.userId);
	locals.auth.setSession(newSession);
}