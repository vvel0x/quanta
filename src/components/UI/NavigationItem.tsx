import { type ComponentType } from "react";
import { Group } from "@mantine/core";
import { type TablerIconsProps } from "@tabler/icons-react";
import Link from "next/link";

interface NavLinkProps {
  label: string;
  href: string;
  Icon: ComponentType<TablerIconsProps>;
  active?: boolean;
  orgSlug: string;
}

export default function NavigationItem({
  label,
  href,
  Icon,
  orgSlug,
}: NavLinkProps) {
  const target = `/console/${orgSlug}${href}`;

  return (
    <Link href={target}>
      <Group>
        <Icon size={24} />
        <span>{label}</span>
      </Group>
    </Link>
  );
}
