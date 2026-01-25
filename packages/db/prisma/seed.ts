import { db } from '../src/client';

async function main() {
	// Upsert means "insert if missing, otherwise update"
	// This makes the seed script safe to run repeatedly.
	await db.user.upsert({
		where: { email: "admin@valve.local " },
		update: {},
		create: { email: "admin@valve.local" },
	});

	await db.user.upsert({
		where: { email: "dev@valve.local" },
		update: {},
		create: { email: "dev@valve.local" },
	});
}

main()
	.then(async () => {
		await db.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await db.$disconnect();
		process.exit(1);
	});