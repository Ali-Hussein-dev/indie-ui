'use client';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';

const isDev = process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production';

//======================================
export const AnalyticsProv = ({ children }: { children: React.ReactNode }) => {
  if (isDev) return <>{children}</>;
  if (typeof window !== 'undefined') {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      person_profiles: 'identified_only',
      // or 'always' to create profiles for anonymous users as well
    });
  }
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
};
