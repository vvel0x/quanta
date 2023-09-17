"use client";
import { isAlphanumeric } from "~/utils/alphanumeric";
import {
  Button,
  Card,
  Stack,
  TextInput,
  Text,
  ActionIcon,
} from "@mantine/core";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quickAdd } from "~/app/console/actions";
import { z } from "zod";
import { IconArrowsShuffle } from "@tabler/icons-react";
import { nanoid } from "nanoid";

const formSchema = z.object({
  slug: z.string().min(3).max(20).refine(isAlphanumeric, {
    message: "Slug can only contain letters, numbers, dashes or underscores",
  }),
  target: z.string().url(),
});

export default function QuickAdd() {
  const {
    register,
    watch,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      slug: "",
      target: "",
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (data) => {
    await quickAdd(data)
      .then((r) => console.log(r.id))
      .finally(() => reset());
  };

  const generateSlug = () => {
    const slug = nanoid(5);
    setValue("slug", slug);
  };

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Text fw={600}>Quick Add</Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack mt={4} gap={"sm"}>
          <TextInput
            {...register("slug")}
            value={watch("slug")}
            label="Slug"
            placeholder="my-slug"
            error={errors.slug?.message}
            disabled={isSubmitting}
            rightSection={
              <ActionIcon variant="subtle">
                <IconArrowsShuffle size={18} onClick={generateSlug} />
              </ActionIcon>
            }
          />
          <TextInput
            {...register("target")}
            label="Target"
            placeholder="https://example.com"
            error={errors.target?.message}
            disabled={isSubmitting}
          />
          <Button type="submit" variant="light" loading={isSubmitting}>
            Create
          </Button>
        </Stack>
      </form>
    </Card>
  );
}
