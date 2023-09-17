import Shell from "~/components/Layout/Shell";

interface Params {
  slug: string;
}

interface LayoutProps {
  children: React.ReactNode;
  params: Params;
}

export default function layout({ children, params }: LayoutProps) {
  const { slug } = params;

  return <Shell orgSlug={slug}>{children}</Shell>;
}
