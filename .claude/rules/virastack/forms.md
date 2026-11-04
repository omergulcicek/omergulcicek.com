---
paths:
  - "src/**/components/**/*Form*.tsx"
  - "src/features/**/schemas/**/*.ts"
  - "src/schemas/**/*.ts"
---
<!-- Managed by @virastack/ai -->

# Forms

USE WHEN: Building forms with React Hook Form and Zod: schemas, defaults, submission, server errors.

## Rules

- React Hook Form with `zodResolver` from `@hookform/resolvers/zod`.
- Schemas live in `schemas/` (`*.schema.ts`), never in the component file.
- Every field has a value in `defaultValues`, typed from the schema.
- Render fields with `Controller` and shadcn `Field`: `data-invalid` on `Field`, `aria-invalid` on the control.
- Read live values with `useWatch` or `Controller`, not root `watch()`. Disable submit while `isSubmitting`.
- Map server errors to fields or to `root.server` with `setError`, and render them.
- The server validates the same schema again before it acts.
- Small forms without client validation may use an Action with `useActionState`.

## Bans

- Inputs managed with `useState`.
- Syncing form state with `useEffect`.
- Handling the native `submit` event instead of using `handleSubmit`.

<example>
```tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import { createProject } from "@/features/projects/api/create-project.api";
import { projectSchema } from "@/features/projects/schemas/project.schema";

export function ProjectForm() {
  const form = useForm({
    resolver: zodResolver(projectSchema),
    defaultValues: { name: "" },
  });

  const onSubmit = form.handleSubmit(async (values) => {
    try {
      await createProject(values);
    } catch (error) {
      form.setError("root.server", {
        message: error instanceof Error ? error.message : "Could not create the project",
      });
    }
  });

  return (
    <form onSubmit={onSubmit} noValidate>
      <Controller
        name="name"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>Name</FieldLabel>
            <Input
              {...field}
              id={field.name}
              aria-invalid={fieldState.invalid}
              aria-describedby={fieldState.invalid ? `${field.name}-error` : undefined}
            />
            {fieldState.invalid && (
              <FieldError id={`${field.name}-error`} errors={[fieldState.error]} />
            )}
          </Field>
        )}
      />
      <p role="alert">{form.formState.errors.root?.server?.message}</p>
      <Button type="submit" disabled={form.formState.isSubmitting}>
        Create
      </Button>
    </form>
  );
}
```
</example>
