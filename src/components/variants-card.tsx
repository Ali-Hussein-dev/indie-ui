import Link from 'next/link';
import { Button } from './buttons/button';
import { FaChevronRight } from 'react-icons/fa';

export const VariantsCard = ({
  id,
  title,
  docUrl,
  children,
}: {
  id: string;
  title: string;
  docUrl: string;
  children: React.ReactNode;
}) => (
  <section
    id={id}
    className="border px-2 sm:px-4 md:px-8 pb-6 pt-3 border-dashed rounded-lg shadow bg-white dark:bg-black"
  >
    <div className="flex-row-between mb-4 gap-1 border-b border-dashed py-1">
      <h3 className="text-xl font-bold text-left">{title}</h3>
      <Button asChild variant="ghost" size="sm" rightIcon={<FaChevronRight />}>
        <Link href={docUrl} prefetch={false}>
          Get code
        </Link>
      </Button>
    </div>
    <div className="w-full pt-4">{children}</div>
  </section>
);
