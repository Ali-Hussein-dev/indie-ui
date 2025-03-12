import Script from 'next/script';

const ALIYTICS_SRC = process.env?.NEXT_PUBLIC_ALIYTICS_SRC;
const ALIYTICS_ID = process.env?.NEXT_PUBLIC_ALIYTICS_ID;

const isDev = process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production';

export const Scripts = () => {
  if (isDev) return null;

  return (
    <>
      <Script
        async
        strategy="afterInteractive"
        src="https://analytics.ahrefs.com/analytics.js"
        data-key="kEhWimpYIkxQOFwhW2VxNg"
      />
      <Script
        async
        strategy="afterInteractive"
        src={ALIYTICS_SRC}
        data-website-id={ALIYTICS_ID}
      />
    </>
  );
};
