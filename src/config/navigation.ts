import { IconGauge, IconLink } from "@tabler/icons-react";
import type { ComponentType } from "react";

type NavigationLink = {
  href: string;
  label: string;
  Icon: ComponentType;
};

export default [
  {
    href: "/console/",
    label: "Dashboard",
    Icon: IconGauge,
  },
  {
    href: "/console/links",
    label: "Links",
    Icon: IconLink,
  },
  {
    href: "/console/domains",
    label: "Domains",
    Icon: IconLink,
  },
  {
    href: "/console/users",
    label: "Users",
    Icon: IconLink,
  },
  {
    href: "/console/settings",
    label: "Settings",
    Icon: IconLink,
  },
] satisfies Array<NavigationLink>;
