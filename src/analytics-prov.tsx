import Script from 'next/script';

const isDev = process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production';

//======================================
export const AnalyticsProv = () => {
  if (isDev) return null;
  const ALIYTICS_SRC = process.env?.NEXT_PUBLIC_ALIYTICS_SRC;
  const ALIYTICS_ID = process.env?.NEXT_PUBLIC_ALIYTICS_ID;
  return (
    <Script
      async
      strategy="afterInteractive"
      src={ALIYTICS_SRC}
      data-website-id={ALIYTICS_ID}
    />
  );
};
