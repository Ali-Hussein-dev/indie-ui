'use client';
import * as React from 'react';
import { CodeBlock, Pre } from 'fumadocs-ui/components/codeblock';
import type {
	FormElement,
	FormElementList,
	FormElementOrList,
	FormStep,
} from '@/form-builder/form-types';
import { generateFormCode } from '@/form-builder/libs/generate-form-code';
import { codeHighlighter } from '@/form-builder/libs/code-highlighter';
import { formatCode } from '@/form-builder/libs/utils';
import useFormBuilderStore from '@/form-builder/hooks/use-form-builder-store';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import { flattenFormSteps } from '../libs/form-elements-helpers';

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <CodeBlock className="my-0 w-full">
    <div
      style={{ height: '100%', maxHeight: '60vh' }}
      className="[&>*]:mt-0 [&_pre]:p-3 w-full"
    >
      {children}
    </div>
  </CodeBlock>
);
const useShiki = ({ code, lang }: { code: string; lang?: string }) => {
  const [renderedCode, setRenderedCode] = React.useState<JSX.Element>();
  React.useLayoutEffect(() => {
    if (typeof code === 'string') {
      void codeHighlighter({ code, lang }).then(setRenderedCode);
    }
  }, [code, lang]);
  return renderedCode;
};

export const JsonViewer = ({
  json,
  isMS,
}: {
  json: FormElementOrList[] | FormStep[] | Record<string, unknown>;
  isMS: boolean;
}) => {
  if (Array.isArray(json)) {
    json = (
      isMS
        ? flattenFormSteps(json as FormStep[]).flat()
        : (json as FormElementOrList[])
    ).filter((element) => !('static' in element && element.static));
  }

  const highlightedCode = useShiki({
    code: JSON.stringify(json, null, 2),
    lang: 'json',
  });

  return highlightedCode ? (
    <Wrapper>{highlightedCode}</Wrapper>
  ) : (
    <div className="text-center py-5 w-full">Generating code...</div>
  );
};
const noneShadcnComponents = 'multiselect';
//======================================
export function JsxViewer() {
  const formElements = useFormBuilderStore((s) => s.formElements);
  const isMS = useFormBuilderStore((s) => s.isMS);
  // generate -> format -> highlight code
  const generatedCode = generateFormCode({
    formElements: formElements as FormElementOrList[],
    isMS,
  });
  const formattedCode = formatCode(generatedCode);
  const highlightedCode = useShiki({ code: formattedCode });
  if (!highlightedCode)
    return <div className="text-center py-5 w-full">Generating code...</div>;

  const processedFormElements = isMS
    ? flattenFormSteps(formElements as FormStep[])
    : formElements;

  const formElementTypes = (processedFormElements.flat() as FormElement[])
    .filter((el) => {
      return !el.static;
    })
    .map((el) => el.fieldType.toLowerCase());

  const packagesSet = new Set(formElementTypes);
  const packages = Array.from(packagesSet)
    .join(' ')
    .replace(noneShadcnComponents, '');
  const otherPackages = 'react-hook-form zod @hookform/resolvers framer-motion';
  const tabsData = [
    {
      value: 'pnpm',
      shadcn: `pnpm add shadcn@latest add ${packages}`,
      base: `pnpm add ${otherPackages}`,
    },
    {
      value: 'npm',
      shadcn: `npx shadcn@latest add ${packages}`,
      base: `npx i ${otherPackages}`,
    },
    {
      value: 'yarn',
      shadcn: `npx shadcn@latest add ${packages}`,
      base: `npx add ${otherPackages}`,
    },
    {
      value: 'bun',
      shadcn: `bunx --bun shadcn@latest add ${packages}`,
      base: `bunx --bun add ${otherPackages}`,
    },
  ];
  return (
    <div className="flex-col-center gap-2 relative">
      <Tabs items={['JSX', 'Install']} className="w-full min-w-full">
        <Tab value="JSX" className="p-2">
          <div className="relative max-w-full">
            <Wrapper>{highlightedCode}</Wrapper>
          </div>
        </Tab>
        <Tab value="Install" className="p-0">
          <div className="w-full px-4 py-5 max-w-full">
            <h2 className="font-sembold text-left text-xl">
              Install Shadcn components
            </h2>
            <Tabs items={tabsData.map((o) => o.value)} className="w-full mb-8">
              {tabsData.map((item) => (
                <Tab key={item.value} value={item.value}>
                  <CodeBlock>
                    <Pre>{item.shadcn}</Pre>
                  </CodeBlock>
                </Tab>
              ))}
            </Tabs>
            <h2 className="font-sembold text-left text-xl">
              Install base packages
            </h2>
            <Tabs items={tabsData.map((o) => o.value)} className="w-full">
              {tabsData.map((item) => (
                <Tab key={item.value} value={item.value}>
                  <CodeBlock>
                    <Pre>{item.base}</Pre>
                  </CodeBlock>
                </Tab>
              ))}
            </Tabs>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}
