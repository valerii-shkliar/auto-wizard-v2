'use client';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import uppercaseFirstWord from '@/lib/uppercaseFirstWord';
import { Eye } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AuthFields {
  username: string;
  password: string;
}

interface AuthFormProps {
  schema: z.ZodType<AuthFields, AuthFields>;
  defaultValues: AuthFields;
  typeForm: 'SIGN_IN' | 'SIGN_UP';
  onSubmit: (data: AuthFields) => Promise<{ success: boolean; data: AuthFields }>;
}

function AuthForm({ schema, defaultValues, typeForm, onSubmit }: AuthFormProps) {
  const [inputType, setInputType] = useState('password');
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<AuthFields>({
    resolver: zodResolver(schema),
    defaultValues,
    mode: 'onTouched',
  });

  async function onFormSubmit(data: AuthFields) {
    await onSubmit(data);
    console.log(data);
  }
  console.log('render');

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div className="mb-3">
        <label htmlFor={`form-input-username`}>{uppercaseFirstWord('username')}</label>
        <div className="relative">
          <input
            className={cn('input-primary p-2 block w-full', errors['username'] && 'border-warning')}
            id={`form-input-username`}
            aria-invalid={errors['username'] ? 'true' : 'false'}
            placeholder={`Your username...`}
            {...register('username')}
          />
        </div>

        {errors['username'] && (
          <p role="alert" className="text-warning">
            {errors['username']?.message}
          </p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor={`form-input-password`}>{uppercaseFirstWord('password')}</label>
        <div className="relative">
          <input
            className={cn('input-primary p-2 block w-full', errors['password'] && 'border-warning')}
            id={`form-input-password`}
            type={inputType}
            aria-invalid={errors['password'] ? 'true' : 'false'}
            placeholder={`Your password...`}
            {...register('password')}
          />
          <button
            type="button"
            className="group absolute right-2 top-1/2 -translate-y-1/2"
            onClick={() => {
              if (inputType === 'password') setInputType('text');
              if (inputType === 'text') setInputType('password');
            }}
          >
            <Eye className="text-light-500 group-hover:text-dark-100 transition-default" />
          </button>
        </div>

        {errors['password'] && (
          <p role="alert" className="text-warning">
            {errors['password']?.message}
          </p>
        )}
      </div>
      <button
        className="background-primary500_light1000 hover:bg-primary-600 dark:hover:bg-light-700 text-light1200_primary300 m-auto px-3 py-1 rounded-md block mb-3.5 transition-default disabled:bg-light-500 disabled:cursor-not-allowed"
        type="submit"
        disabled={!isValid}
      >
        {typeForm === 'SIGN_IN' ? 'Sign In' : 'Sign Up'}
      </button>
    </form>
  );
}
export default AuthForm;
