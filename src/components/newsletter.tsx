import Link from 'next/link';
import { configs } from '@/configs';
import { Button_v6 } from '@/components/buttons/button-variants';
import { MultilayerCardV_2 } from './cards/multi-layers';

//======================================
export const Newsletter = () => {
  return (
    <div className="mx-auto py-8">
      <MultilayerCardV_2>
        <div>
          <p className="text-center text-lg text-pretty mb-5 font-bold dark:text-zinc-200 md:text-xl lg:text-2xl tracking-tight">
            Get notified about new components & updates
          </p>
          <div className="mx-auto w-fit">
            <Button_v6>
              <Link href={configs.urls.newsletter}>Subscribe</Link>
            </Button_v6>{' '}
          </div>
        </div>
      </MultilayerCardV_2>
    </div>
  );
};
