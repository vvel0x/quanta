import { IconGauge, IconLink } from "@tabler/icons-react";
import type { ComponentType } from "react";

type NavigationLink = {
  href: string;
  label: string;
  Icon: ComponentType;
};

export default [
  {
    href: "/",
    label: "Dashboard",
    Icon: IconGauge,
  },
  {
    href: "/links",
    label: "Links",
    Icon: IconLink,
  },
  {
    href: "/domains",
    label: "Domains",
    Icon: IconLink,
  },
  {
    href: "/users",
    label: "Users",
    Icon: IconLink,
  },
  {
    href: "/settings",
    label: "Settings",
    Icon: IconLink,
  },
] satisfies Array<NavigationLink>;
