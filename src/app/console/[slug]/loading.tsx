import { Skeleton, Stack } from "@mantine/core";
import React from "react";

export default function loading() {
  return (
    <Stack>
      <Skeleton height={20} width={"32rem"} />
      <Skeleton height={20} width={"26rem"} />
      <Skeleton height={20} width={"26rem"} />
    </Stack>
  );
}
