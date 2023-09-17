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

  return (
    <>
      <div>Console</div>
    </>
  );
}
