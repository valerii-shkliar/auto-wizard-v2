'use client';

import AuthForm from '@/components/forms/AuthForm';
import { SignUpSchema } from '@/lib/schema';
import React from 'react';
import { z } from 'zod';

function SignUp() {
  return (
    <AuthForm
      schema={SignUpSchema}
      typeForm="SIGN_UP"
      defaultValues={{
        username: '',
        password: '',
      }}
      onSubmit={(data: z.infer<typeof SignUpSchema>) => Promise.resolve({ success: true, data })}
    />
  );
}

export default SignUp;
