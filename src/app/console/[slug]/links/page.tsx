import { currentUser } from "@clerk/nextjs";
import { link, organization } from "~/db/schema";
import { eq } from "drizzle-orm";
import { db } from "~/db";
import { isPersonal } from "~/utils/isPersonalOrg";

interface PageProps {
  params: {
    slug: string;
  };
}

export const metadata = {
  title: "Links - Quanta Console",
};

async function getLinks(orgSlug: string) {
  const user = await currentUser();

  if (isPersonal(orgSlug))
    return await db.select().from(link).where(eq(link.authorId, user!.id));

  return await db
    .select()
    .from(link)
    .innerJoin(organization, eq(organization.id, link.organizationId))
    .where(eq(organization.slug, orgSlug));
}

export default async function LinksPage({ params }: PageProps) {
  const { slug } = params;
  const links = await getLinks(slug);

  return <pre>{JSON.stringify(links, null, 2)}</pre>;
}
