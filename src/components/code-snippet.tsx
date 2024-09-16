import { getCodeBlock } from '@/lib/get-code-block';
import { Pre, CodeBlock } from 'fumadocs-ui/components/codeblock';
import { codeToHast } from 'shiki';
import { toJsxRuntime, type Jsx } from 'hast-util-to-jsx-runtime';
import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';

type Language = 'tsx' | 'ts' | 'js';
//-------------------------------------------
const CustomCodeBlock = async ({
  code,
  lang,
}: {
  code: string;
  lang: Language;
}) => {
  const hast = await codeToHast(code, {
    lang,
    defaultColor: false,
    themes: {
      light: 'github-light',
      dark: 'github-dark',
    },
  });

  const rendered = toJsxRuntime(hast, {
    jsx: jsx as Jsx,
    jsxs: jsxs as Jsx,
    Fragment: React.Fragment,
    development: false,
    components: {
      // @ts-expect-error -- JSX component
      pre: Pre,
    },
  });
  return (
    <CodeBlock>
      <Pre>{rendered}</Pre>
    </CodeBlock>
  );
};

//======================================
export async function CodeSnippet({
  filePath,
  lang = 'tsx',
}: {
  filePath: string;
  lang?: Language;
}) {
  const response = await getCodeBlock(filePath);

  return <CustomCodeBlock code={response.body} lang="tsx" />;
}
