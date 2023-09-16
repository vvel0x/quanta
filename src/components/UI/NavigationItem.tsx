import { Group } from "@mantine/core";
import Link from "next/link";
import React, { type ComponentType } from "react";

interface NavLinkProps {
  label: string;
  href: string;
  Icon: ComponentType;
  active?: boolean;
}

export default function NavigationItem({
  label,
  href,
  active,
  Icon,
}: NavLinkProps) {
  return (
    <Link href={href}>
      <Group>
        <Icon />
        <span>{label}</span>
      </Group>
    </Link>
  );
}
