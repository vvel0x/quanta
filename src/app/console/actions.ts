"use server";

import { isAlphanumeric } from "~/utils/alphanumeric";
import { z } from "zod";
import { db } from "~/db";
import { link } from "~/db/schema";
import { currentUser } from "@clerk/nextjs";

const formSchema = z.object({
  slug: z.string().min(3).max(20).refine(isAlphanumeric, {
    message: "Slug can only contain letters, numbers, dashes or underscores",
  }),
  target: z.string().url(),
});

export type FormData = z.infer<typeof formSchema>;

export async function quickAdd(data: FormData) {
  const linkData = await formSchema.parseAsync(data);
  const user = await currentUser();

  const res = await db
    .insert(link)
    .values({
      slug: linkData.slug,
      target: linkData.target,
      authorId: user!.id,
    })
    .returning({
      id: link.id,
    });

  return res[0];
}
