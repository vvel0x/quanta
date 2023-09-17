"use client";
import { isAlphanumeric } from "~/utils/alphanumeric";
import { Button, Card, Stack, TextInput, Text } from "@mantine/core";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quickAdd } from "~/app/console/actions";
import { z } from "zod";

const formSchema = z.object({
  slug: z.string().min(3).max(20).refine(isAlphanumeric, {
    message: "Slug can only contain letters, numbers, dashes or underscores",
  }),
  target: z.string().url(),
});

export default function QuickAdd() {
  const {
    register,
    handleSubmit,
    reset,
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

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Text fw={600}>Quick Add</Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack mt={4} gap={"sm"}>
          <TextInput
            label="Slug"
            placeholder="my-slug"
            error={errors.slug?.message}
            disabled={isSubmitting}
            {...register("slug")}
          />
          <TextInput
            label="Target"
            placeholder="https://example.com"
            error={errors.target?.message}
            disabled={isSubmitting}
            {...register("target")}
          />
          <Button type="submit" variant="light" loading={isSubmitting}>
            Create
          </Button>
        </Stack>
      </form>
    </Card>
  );
}
