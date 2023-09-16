import { migrate } from "drizzle-orm/node-postgres/migrator";
import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";
import "dotenv/config";

// This environment variable has already been checked during build time
const connectionString = process.env.DB_URL!;
const client = new Client({ connectionString });

async function main() {
  console.info("Migrating database...");

  await client.connect();

  const db = drizzle(client);
  await migrate(db, { migrationsFolder: "./src/db/drizzle" });
}

main()
  .then(() => console.info("Done!"))
  .catch((err) => console.error(err))
  .finally(() => {
    client.end();
    process.exit(0);
  });
