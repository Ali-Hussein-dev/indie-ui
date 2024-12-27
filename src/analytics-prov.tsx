'use client';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY as string;
const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST as string;

if (POSTHOG_HOST || POSTHOG_KEY) {
  console.error('POSTHOG_KEY or POSTHOG_HOST not found in .env.local');
}

const isDev = process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production';

//======================================
export const AnalyticsProv = ({ children }: { children: React.ReactNode }) => {
  if (typeof window !== 'undefined') {
    posthog.init(POSTHOG_KEY, {
      loaded: (posthog) => {
        if (isDev) {
          posthog.opt_out_capturing();
          posthog.set_config({ disable_session_recording: true });
        }
      },
      api_host: POSTHOG_HOST,
      person_profiles: 'identified_only',
      // or 'always' to create profiles for anonymous users as well
    });
    console.info('PostHog initialized');
  }
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
};
