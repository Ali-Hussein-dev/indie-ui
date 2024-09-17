'use client';
import { Button } from '@/components/ui/button';
import { HeaderDemo } from '@/components/headers/header-demo';
import * as React from 'react';

//======================================
const HeaderDemoPage = () => {
  const [variant, setVariant] = React.useState<'default' | 'centered'>(
    'default'
  );
  const [isSticky, setIsSticky] = React.useState(false);
  return (
    <div className="relative">
      <HeaderDemo variant={variant} sticky={isSticky} />
      <section className="h-screen">
        <div className="flex-row-center py-10 gap-10">
          <Button
            onClick={() => setVariant('default')}
            variant={variant == 'default' ? 'default' : 'outline'}
          >
            default
          </Button>
          <Button
            onClick={() => setVariant('centered')}
            variant={variant == 'centered' ? 'default' : 'outline'}
          >
            centered
          </Button>
          <Button
            onClick={() => setIsSticky(!isSticky)}
            variant={isSticky ? 'default' : 'outline'}
          >
            {isSticky ? 'unstick' : 'stick'}
          </Button>
        </div>
        <p className="text-center pb-8">
          Resize the window to see the mobile version
        </p>
      </section>
      <section
        id="features"
        className="h-screen mx-auto flex-row-center border-t"
      >
        Features
      </section>
      <section
        id="pricing"
        className="h-screen mx-auto flex-row-center border-t"
      >
        pricing
      </section>
      <section id="faqs" className="h-screen mx-auto flex-row-center border-t">
        FAQs
      </section>
    </div>
  );
};
export default HeaderDemoPage;
