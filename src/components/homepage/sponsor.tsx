import { EyeCatchingButton_v3 } from '@/components/buttons/eye-catching-buttons';

const SponsorCard = ({ children }: { children: React.ReactNode }) => (
  <div className="size-28 rounded-lg border border-dashed center text-sm p-2 shadow-inner border-zinc-300 dark:border-zinc-700 dark:text-zinc-500 text-zinc-600">
    {children}
  </div>
);
//======================================
export function Sponsor() {
  const borderClass = 'dark:border-zinc-800/80 border-dashed border-zinc-300';
  return (
    <div className="py-12 ">
      <div
        className={`flex-col-center border rounded-sm pt-6 md:pt-10 w-full ${borderClass} dark:bg-black bg-white shadow`}
      >
        <div className="space-y-3 pb-4 md:pb-10 sm:pb-6 pt-4">
          <h2 className="text-3xl dark:text-green-300 text-green-500 font-bold">
            Sponsors
          </h2>
          <p className="max-w-xl text-center text-pretty dark:text-zinc-400">
            Sponsor Indie UI and showcase your brand to a community of active
            developers and solopreneurs.
          </p>
        </div>
        <div
          className={`flex-row-center py-5 md:py-7 gap-4 flex-wrap ${borderClass} border-y w-full`}
        >
          <SponsorCard>Your logo here</SponsorCard>
          <SponsorCard>Your logo here</SponsorCard>
          <SponsorCard>Your logo here</SponsorCard>
        </div>
        <div className={`py-6 w-full`}>
          <EyeCatchingButton_v3 asChild>
            <a
              href="https://github.com/sponsors/Ali-Hussein-dev"
              target="_blank"
              data-umami-event="sponsor-github"
            >
              Become a Sponsor
            </a>
          </EyeCatchingButton_v3>
        </div>
      </div>
    </div>
  );
}
