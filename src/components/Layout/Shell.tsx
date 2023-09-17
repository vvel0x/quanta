"use client";
import { useDisclosure } from "@mantine/hooks";
import { AppShell, Burger, Group, Stack, Text } from "@mantine/core";
import navigationList from "~/config/navigation";
import NavigationItem from "../UI/NavigationItem";
import OrganizationSwitcher from "../UI/OrganizationSwitcher";
import { UserButton } from "@clerk/nextjs";

interface ShellProps {
  children: React.ReactNode;
  orgSlug: string;
}

export default function Shell({ children, orgSlug }: ShellProps) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Group>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
            <Text size="xl" fw={700}>
              Quanta
            </Text>
          </Group>
          <UserButton />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Stack>
          <OrganizationSwitcher />
          {navigationList.map((item) => (
            <NavigationItem key={item.label} orgSlug={orgSlug} {...item} />
          ))}
        </Stack>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
