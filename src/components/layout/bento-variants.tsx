import {
  Bento_4_v1,
  Bento_4_v2,
  Bento_4_v3,
  Bento_4_v4,
} from '@/components/layout/bento-4';

import {
  Bento_5_v1,
  Bento_5_v2,
  Bento_5_v3,
  Bento_5_v4,
} from '@/components/layout/bento-5';
import {
  Bento_6_v1,
  Bento_6_v2,
  Bento_6_v3,
  Bento_6_v4,
} from '@/components/layout/bento-6';
import { VariantsCard } from '@/components/variants-card';
import components from '@/constants/components.json';
import { SwiperWrapper } from '@/components/swiper-wrapper';

const bentos = {
  'bento-4': [Bento_4_v1, Bento_4_v2, Bento_4_v3, Bento_4_v4],
  'bento-5': [Bento_5_v1, Bento_5_v2, Bento_5_v3, Bento_5_v4],
  'bento-6': [Bento_6_v1, Bento_6_v2, Bento_6_v3, Bento_6_v4],
};

//======================================
export const BentoVariants = () => {
  return (
    <>
      <VariantsCard
        id={components.bentoGrids4.id}
        title={components.bentoGrids4.title}
        docUrl={components.bentoGrids4.docUrl}
      >
        <SwiperWrapper
          slides={bentos['bento-4'].map((Element, i) => (
            <Element key={i} />
          ))}
        />
      </VariantsCard>
      <VariantsCard
        id={components.bentoGrids5.id}
        title={components.bentoGrids5.title}
        docUrl={components.bentoGrids5.docUrl}
      >
        <SwiperWrapper
          slides={bentos['bento-5'].map((Element, i) => (
            <Element key={i} />
          ))}
        />
      </VariantsCard>
      <VariantsCard
        id={components.bentoGrids6.id}
        title={components.bentoGrids6.title}
        docUrl={components.bentoGrids6.docUrl}
      >
        <SwiperWrapper
          slides={bentos['bento-6'].map((Element, i) => (
            <Element key={i} />
          ))}
        />
      </VariantsCard>
    </>
  );
};
