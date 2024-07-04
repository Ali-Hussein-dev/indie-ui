import { VariantsCard } from '@/components/variants-card';
import components from '@/constants/components.json';
import { AnimationContainer } from '@/components/text/animation-container';
import { GradualSpacing } from '@/components/text/gradual-spacing';
import { TypingEffect } from '@/components/text/typing-effect';
import { StaggeredFade } from '@/components/text/staggered-fade';
import { RotateWords } from '@/components/text/rotate-words';
import { LettersPullUp, WordsPullUp } from '@/components/text/pull-up';
import { BlurIn } from '@/components/text/blur-in';
import { TextFade } from '@/components/text/fade';

//======================================
export const TextAnimationVariants = () => {
  const { textAnimation } = components;
  return (
    <VariantsCard
      title={textAnimation.title}
      id={textAnimation.id}
      docUrl={textAnimation.docUrl}
    >
      {/* //-------------------------------------------GradualSpacing */}
      <AnimationContainer>
        <GradualSpacing text="Gradual Spacing" />
      </AnimationContainer>
      {/* //-------------------------------------------TypingEffect */}
      <AnimationContainer>
        <TypingEffect text="Typing Effect" />
      </AnimationContainer>
      {/* //-------------------------------------------StaggeredFade */}
      <AnimationContainer>
        <StaggeredFade text="Staggered Fade" />
      </AnimationContainer>
      {/* //-------------------------------------------WordsRotate */}
      <AnimationContainer>
        <RotateWords
          text="You can"
          words={['build', 'beautiful', 'websites']}
        />
      </AnimationContainer>
      {/* //-------------------------------------------LettersPullUp */}
      <AnimationContainer>
        <LettersPullUp text="Letters Pull Up" />
      </AnimationContainer>
      {/* //-------------------------------------------WordsPullUp */}
      <AnimationContainer>
        <WordsPullUp text="Words Pull Up" />
      </AnimationContainer>
      {/* //-------------------------------------------BlurIn */}
      <AnimationContainer>
        <BlurIn>Text Blur in</BlurIn>
      </AnimationContainer>
      {/* //-------------------------------------------TextFadeUp */}
      <AnimationContainer>
        <TextFade direction="up" className="py-1">
          <h2 className="text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem]">
            Fade Up
          </h2>
          <p className="mt-5 text-center md:text-lg max-w-lg mx-auto text-balance dark:text-zinc-300">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit amet.
          </p>
          <span className="mx-auto">Lorem, ipsum dolor.</span>
        </TextFade>
      </AnimationContainer>
      {/* //-------------------------------------------TextFadeDown */}
      <AnimationContainer>
        <TextFade direction="down" className="py-1">
          <h2 className="text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem]">
            Fade Down
          </h2>
          <p className="mt-5 text-center md:text-lg max-w-lg mx-auto text-balance dark:text-zinc-300">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit amet.
          </p>
          <span className="mx-auto">Lorem, ipsum dolor.</span>
        </TextFade>
      </AnimationContainer>
      <p className="pt-4 dark:text-zinc-500">Built on top of Variant Vault</p>
    </VariantsCard>
  );
};
