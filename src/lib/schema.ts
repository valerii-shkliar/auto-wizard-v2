import { z } from 'zod';

export const SignInSchema = z.object({
  username: z
    .string()
    .min(3, 'Username must be at least 3 characters')
    .max(20, 'Username must be at most 20 characters')
    .regex(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 or more characters')
    .max(15, 'Password must at most 15 characters'),
});

export const SignUpSchema = z
  .object({
    username: z
      .string()
      .min(3, 'Username must be at least 3 characters')
      .max(20, 'Username must be at most 20 characters')
      .regex(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores'),
    password: z
      .string()
      .min(6, 'Password must be at least 6 or more characters')
      .max(15, 'Password must at most 15 characters')
      .regex(/[A-Z]/, 'Password must include at least one capitalize word')
      .regex(/[a-z]/, 'Password must include at least one lower-case word')
      .regex(/[0-9]/, 'Password must include at least one number')
      .regex(/[^A-Za-z0-9]/, 'Password must include at least one special symbol'),
  })
  .required();
