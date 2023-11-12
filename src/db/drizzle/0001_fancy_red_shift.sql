CREATE TABLE IF NOT EXISTS "domain_to_owner" (
	"domain_id" uuid,
	"organization_id" uuid,
	"owner_id" varchar,
	CONSTRAINT domain_to_owner_domain_id PRIMARY KEY("domain_id")
);
--> statement-breakpoint
ALTER TABLE "domain" DROP CONSTRAINT "domain_org_id_organization_id_fk";
--> statement-breakpoint
ALTER TABLE "link" ALTER COLUMN "updated_at" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "domain" DROP COLUMN IF EXISTS "name";--> statement-breakpoint
ALTER TABLE "domain" DROP COLUMN IF EXISTS "org_id";--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "domain_to_owner" ADD CONSTRAINT "domain_to_owner_domain_id_domain_id_fk" FOREIGN KEY ("domain_id") REFERENCES "domain"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "domain_to_owner" ADD CONSTRAINT "domain_to_owner_organization_id_organization_id_fk" FOREIGN KEY ("organization_id") REFERENCES "organization"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
