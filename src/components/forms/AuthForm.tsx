'use client';
import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, DefaultValues, FieldValues, Path, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';

// interface AuthFormProps<T extends AuthFields> {
//   schema: z.ZodTypeAny;
//   defaultValues: T;
//   type: 'SIGN_IN' | 'SIGN_UP';
//   onSubmit: (data: T) => Promise<{ success: boolean; data: T }>;
// }

function AuthForm({ schema, defaultValues, typeForm, onSubmit }) {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues,
  });
  async function handleSubmit(data: z.infer<typeof schema>) {
    console.log(data);
  }

  return (
    <form id="form-rhf-input" onSubmit={form.handleSubmit(handleSubmit)}>
      {typeForm}
      <FieldGroup>
        <Controller
          name={'username'}
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="form-rhf-input-username">Login</FieldLabel>
              <Input
                {...field}
                id="form-rhf-input-username"
                aria-invalid={fieldState.invalid}
                placeholder="Your Login"
                autoComplete="username"
                className="input!"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
      <FieldGroup>
        <Controller
          name={'password'}
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="form-rhf-input-password">Password</FieldLabel>
              <Input
                {...field}
                id="form-rhf-input-password"
                aria-invalid={fieldState.invalid}
                placeholder="Your Password"
                autoComplete="current-password"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
      <Field orientation="horizontal">
        <Button type="button" variant="outline" onClick={() => form.reset()}>
          Reset
        </Button>
        <Button type="submit" form="form-rhf-input">
          Save
        </Button>
      </Field>
    </form>
  );
}
export default AuthForm;
