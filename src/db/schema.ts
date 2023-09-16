import {
  date,
  pgTable,
  primaryKey,
  text,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const organization = pgTable("organization", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name"),
  slug: varchar("slug").notNull().unique(),
  ownerId: varchar("owner_id").notNull(),
  createdAt: date("created_at").notNull().defaultNow(),
});

export const userToOrganization = pgTable(
  "user_to_organization",
  {
    userId: varchar("user_id").notNull(),
    orgId: uuid("org_id").references(() => organization.id),
  },
  (table) => ({
    pk: primaryKey(table.orgId, table.userId),
  })
);

export const domain = pgTable("domain", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name"),
  domain: text("domain").notNull().unique(),
  orgId: uuid("org_id").references(() => organization.id),
  createdAt: date("created_at").notNull().defaultNow(),
});

export const link = pgTable("link", {
  id: uuid("id").primaryKey().defaultRandom(),
  slug: varchar("slug").notNull(),
  target: text("target").notNull(),
  authorId: varchar("author_id").notNull(),
  domainId: uuid("domain_id").references(() => domain.id),
  organizationId: uuid("organization_id").references(() => organization.id),
  createdAt: date("created_at").notNull().defaultNow(),
  updatedAt: date("updated_at").notNull().defaultNow(),
});
