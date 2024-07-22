const isDev = process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production';

//======================================
export const AnalyticsProv = () => {
  if (isDev) return null;
  return (
    <script
      defer
      src="https://aliytics.netlify.app/script.js"
      data-website-id="47b996fd-088c-4d37-9ea2-b172bc689b61"
    ></script>
  );
};
