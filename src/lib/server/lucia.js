import lucia from "lucia-auth";
import { sveltekit } from "lucia-auth/middleware";
import prisma from "@lucia-auth/adapter-prisma";
import PrismaClient from "$lib/server/prisma";
import { dev } from "$app/environment";

export const auth = lucia({
	adapter: prisma(PrismaClient),
	env: dev ? "DEV" : "PROD",
	middleware: sveltekit()
});