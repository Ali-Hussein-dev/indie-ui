import { Button } from '@/components/buttons/button';
import {
  Button_v1,
  Button_v2,
  Button_v3,
  Button_v4,
  Button_v5,
  Button_v6,
  Button_v7,
} from '@/components/buttons/button-variants';
import {
  EyeCatchingButton_v1,
  EyeCatchingButton_v2,
  EyeCatchingButton_v3,
} from '@/components/buttons/eye-catching-buttons';
import {
  SimpleCard_V1,
  SimpleCard_V2,
  SimpleCard_V3,
  SimpleCard_V4,
  SimpleCard_V5,
  SimpleCard_V6,
  SimpleCard_V7,
} from '@/components/cards/simple';
import {
  MultilayerCardV_1,
  MultilayerCardV_2,
  MultilayerCardV_3,
  MultilayerCardV_4,
} from '@/components/cards/multi-layers';

import {
  Card_with_image_v1,
  Card_with_image_v2,
  Card_with_image_v3,
  Card_with_image_v4,
  Card_with_image_v5,
  Card_with_image_v6,
} from '@/components/cards/with-image-bg';
import { InputBlock } from '@/components/inputs/inputs';
import { Footer } from '@/components/footer';
import { Newsletter } from '@/components/newsletter';
import { LuArrowLeft, LuArrowRight } from 'react-icons/lu';
import { IoSend } from 'react-icons/io5';
import { Hero } from '@/components/homepage/hero';
import components from '@/constants/components.json';
import { VariantsCard } from '@/components/variants-card';
import { TextAnimationVariants } from '@/components/text/text-animation-variants';
import { Separator } from '@/components/separators/separator';
import { FaPlus } from 'react-icons/fa6';
import {
  CardBody,
  CardWithCircleEllipsis,
  CardWithEllipsis,
  CardWithGrid,
  CardWithGridEllipsis,
  CardWithLines,
  CardWithNoise,
  CardWithPlus,
  CardWithSquareX,
} from '@/components/cards/with-pattern';
import { BentoVariants } from '@/components/layout/bento-variants';
import { Dots_v1, Dots_v2, Dots_v3, Dots_v4 } from '@/components/loaders/dots';
import * as React from 'react';

const CardsWithPattern = [
  CardWithEllipsis,
  CardWithGridEllipsis,
  CardWithCircleEllipsis,
  CardWithLines,
  CardWithPlus,
  CardWithSquareX,
  CardWithGrid,
  CardWithNoise,
];
export default function HomePage() {
  return (
    <main className="min-h-screen text-center">
      <Hero />
      <div className="flex-col justify-center flex overflow-hidden">
        <div className="mx-auto space-y-8 max-w-6xl pb-10 px-2">
          <VariantsCard
            id={components.button.id}
            title={components.button.title}
            docUrl={components.button.docUrl}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 max-w-2xl">
              <Button_v1>Click me</Button_v1>
              <Button_v2>Hover me</Button_v2>
              <Button_v3>Hover me</Button_v3>
              <Button_v4>Hover me</Button_v4>
              <Button_v5 Icon={<IoSend />}>Hover me</Button_v5>
              <Button_v6>Hover me</Button_v6>
              <Button rightIcon={<LuArrowRight />} variant="outline">
                <span>Hover me</span>
              </Button>
              <Button leftIcon={<LuArrowLeft />} variant="outline">
                <span>Hover me</span>
              </Button>
              <Button_v7 className="w-fit mx-auto">Hover me</Button_v7>
            </div>
          </VariantsCard>
          <VariantsCard
            id={components.eyeCatchingButton.id}
            title={components.eyeCatchingButton.title}
            docUrl={components.eyeCatchingButton.docUrl}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 max-w-2xl">
              <EyeCatchingButton_v1>Shimmer effect</EyeCatchingButton_v1>
              <EyeCatchingButton_v2>Shiny background</EyeCatchingButton_v2>
              <EyeCatchingButton_v3>Shiny text</EyeCatchingButton_v3>
            </div>
          </VariantsCard>
          <VariantsCard
            id={components.input.id}
            title={components.input.title}
            docUrl={components.input.docUrl}
          >
            <div className="space-y-6 max-w-2xl">
              <InputBlock placeholder="Input field (default)" />
              <InputBlock
                placeholder="Input field (ghost)"
                root={{ variant: 'ghost' }}
              />
              <InputBlock
                placeholder="Input field (underlined)"
                root={{ variant: 'underlined' }}
              />
              <InputBlock
                placeholder="Input field (neubrutalism)"
                root={{ variant: 'neubrutalism' }}
              />
              <InputBlock
                placeholder="Input field (filled)"
                root={{ variant: 'filled' }}
              />
            </div>
          </VariantsCard>
          <VariantsCard
            id={components.simpleCards.id}
            title={components.simpleCards.title}
            docUrl={components.simpleCards.docUrl}
          >
            <div className="max-w-2xl space-y-10 md:space-y-12 pt-4 mx-auto">
              <SimpleCard_V1 />
              <SimpleCard_V2 />
              <SimpleCard_V3 />
              <SimpleCard_V4 />
              <SimpleCard_V5 />
              <SimpleCard_V6 />
              <SimpleCard_V7 />
            </div>
          </VariantsCard>
          <VariantsCard
            id={components.cardsWithMultiLayers.id}
            title={components.cardsWithMultiLayers.title}
            docUrl={components.cardsWithMultiLayers.docUrl}
          >
            <div className="max-w-xl mx-auto space-y-4">
              <MultilayerCardV_1 />
              <MultilayerCardV_2 />
              <MultilayerCardV_3 />
              <MultilayerCardV_4 />
            </div>
          </VariantsCard>
          <VariantsCard
            id={components.cardsWithImageBg.id}
            title={components.cardsWithImageBg.title}
            docUrl={components.cardsWithImageBg.docUrl}
          >
            <div className="max-w-2xl grid md:grid-cols-2 gap-y-8 md:gap-y-20 gap-4">
              <Card_with_image_v1 />
              <Card_with_image_v2 />
              <Card_with_image_v3 />
              <Card_with_image_v4 />
              <Card_with_image_v5 />
              <Card_with_image_v6 />
            </div>
          </VariantsCard>
          <Newsletter />
          <VariantsCard
            id={components.cardsWithPattern.id}
            title={components.cardsWithPattern.title}
            docUrl={components.cardsWithPattern.docUrl}
          >
            <div className="grid gap-4 gap-y-8 max-w-2xl mx-auto md:grid-cols-2">
              {CardsWithPattern.map((Card, i) => (
                <Card key={i}>
                  <CardBody />
                </Card>
              ))}
            </div>
          </VariantsCard>
          <VariantsCard
            id={components.loadersDots.id}
            title={components.loadersDots.title}
            docUrl={components.loadersDots.docUrl}
          >
            <div className="max-w-2xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 gap-y-8 md:gap-y-4 pl-8">
              <div className="mx-auto -translate-x-9 md:translate-x-0 md:mx-0">
                <Dots_v1 />
              </div>
              <Dots_v2 />
              <Dots_v3 />
              <Dots_v4 />
            </div>
          </VariantsCard>
          <VariantsCard
            id={components.separator.id}
            title={components.separator.title}
            docUrl={components.separator.docUrl}
          >
            <div className="flex-col-center gap-12 pt-4">
              <Separator gradient />
              <Separator />
              <Separator
                label={<span className="px-2">Section</span>}
                gradient
              />
              <Separator label={<span className="px-2">Section</span>} />
              <Separator
                label={
                  <div className="border px-4 py-1 rounded-full border-dashed">
                    Section
                  </div>
                }
                gradient
              />
              <Separator
                label={
                  <div className="border px-4 py-1 rounded-full">Section</div>
                }
              />
              <Separator
                label={
                  <div className="border px-12 py-2 rounded-full">
                    <FaPlus />
                  </div>
                }
                gradient
              />
            </div>
          </VariantsCard>
          <TextAnimationVariants />
          <BentoVariants />
        </div>
      </div>
      <Footer />
    </main>
  );
}
