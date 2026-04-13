'use client';

import Image from 'next/image';
import React, { ReactNode } from 'react';
import githubIcon from 'public/icons/systems/github.svg';
import googleIcon from 'public/icons/systems/google.svg';
import { CircleX } from 'lucide-react';
import { toast } from 'sonner';
import { signIn } from 'next-auth/react';
import ROUTES from '@/constants/routes';
import { useRouter } from 'next/navigation';

function AuthLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  async function handleAuthClick(provider: 'github' | 'google') {
    try {
      await signIn(provider, {
        callbackUrl: ROUTES.HOME,
      });
    } catch (e) {
      console.log(e);
      toast.error('SignIn Error', {
        description: e instanceof Error ? e.message : 'Process ingress to your account was failed',
      });
    }
  }

  function handleCloseModalClick() {
    router.back();
  }

  return (
    <div>
      <div
        className="fixed inset-0 z-10 bg-dark-100/30 backdrop-blur-xs"
        onClick={handleCloseModalClick}
      ></div>

      <div className="fixed z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-8 background-light1200_dark200 rounded-xl">
        <button onClick={handleCloseModalClick}>
          <CircleX className="absolute top-1.5 right-1.5 text-light-500 hover:text-dark-100 transition-default" />
        </button>
        <h2 className="text-center text-2xl mb-3">Ingress to your account</h2>
        {children}
        <div className="flex gap-4">
          <button className="btn-primary" onClick={() => handleAuthClick('github')}>
            <Image
              src={githubIcon}
              width={20}
              height={20}
              alt="GitHub Logo"
              className="invert-colors"
            />
            Enter via GitHub
          </button>
          <button className="btn-primary" onClick={() => handleAuthClick('google')}>
            <Image src={googleIcon} width={20} height={20} alt="Google Logo" />
            Enter via Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
