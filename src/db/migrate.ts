import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import "dotenv/config";

// This environment variable has already been checked during build time
const connectionString = process.env.DB_URL!;
const migrationClient = postgres(connectionString, { max: 1 });

async function main() {
  console.info("Migrating database...");
  const db = drizzle(migrationClient);
  await migrate(db, { migrationsFolder: "./src/db/drizzle" });
}

main()
  .then(() => console.info("Done!"))
  .catch((err) => console.error(err))
  .finally(() => {
    process.exit(0);
  });
