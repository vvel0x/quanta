/* eslint-disable @typescript-eslint/no-unused-vars */
import { currentUser } from "@clerk/nextjs";
import { SimpleGrid, Title } from "@mantine/core";
import QuickAdd from "~/components/Cards/QuickAdd";

interface PageProps {
  params: {
    slug: string;
  };
}

export const metadata = {
  title: "Quanta Console",
  description: "Multi-tenant URL shortener",
};

export default async function Console({ params }: PageProps) {
  const { slug } = params;
  const user = await currentUser();

  return (
    <>
      <div>
        <Title>Dashboard</Title>
      </div>

      <SimpleGrid
        cols={{
          base: 1,
          md: 2,
        }}
        spacing="md"
        mt={6}
      >
        <QuickAdd />
      </SimpleGrid>
    </>
  );
}
