import { migrate } from "drizzle-orm/postgres-js/migrator";
import { drizzle } from "drizzle-orm/postgres-js";
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

void main()
  .then(() => console.info("Done!"))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(() => {
    process.exit(0);
  });
