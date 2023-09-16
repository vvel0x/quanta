import { Select } from "@mantine/core";

export default function OrganizationSwitcher() {
  return (
    <Select
      data={["Personal"]}
      defaultValue={"Personal"}
      allowDeselect={false}
      placeholder="Select Organization"
    />
  );
}
