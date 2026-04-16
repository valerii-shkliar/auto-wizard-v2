'use client';
import AuthForm from '@/components/forms/AuthForm';
import { SignInSchema } from '@/lib/schema';
import React from 'react';
import { z } from 'zod';

function SignIn() {
  return (
    <AuthForm
      schema={SignInSchema}
      typeForm="SIGN_IN"
      defaultValues={{
        username: '',
        password: '',
      }}
      onSubmit={(data: z.infer<typeof SignInSchema>) => Promise.resolve({ success: true, data })}
    />
  );
}

export default SignIn;
