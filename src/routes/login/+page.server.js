import { redirect } from '@sveltejs/kit';
import { auth } from '$lib/server/lucia';

export const load = async ({ locals }) => {
	const username = 'user957';
	const password = 'xxx'
	const key = await auth.useKey('username', username, password);
	const session = await auth.createSession(key.userId);
	locals.auth.setSession(session);
}