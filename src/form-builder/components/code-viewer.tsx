'use client';
import * as React from 'react';
import { CodeBlock } from 'fumadocs-ui/components/codeblock';
import { FormElementList } from '@/form-builder/form-types';
import { generateFormCode } from '@/form-builder/libs/generate-form-code';
import { codeHighlighter } from '@/form-builder/libs/code-highlighter';
import { formatCode } from '@/form-builder/libs/utils';
import useFormBuilderStore from '@/form-builder/hooks/use-form-builder-store';

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <CodeBlock className="my-0 w-full">
    <div
      style={{ height: '100%', maxHeight: '65vh' }}
      className="[&>*]:mt-0 [&_pre]:p-2 "
    >
      {children}
    </div>
  </CodeBlock>
);
const useShiki = ({ code, lang }: { code: string; lang?: string }) => {
  const [renderedCode, setRenderedCode] = React.useState<JSX.Element>();
  React.useLayoutEffect(() => {
    if (typeof code == 'string') {
      void codeHighlighter({ code, lang }).then(setRenderedCode);
    }
  }, [code, lang]);
  return renderedCode;
};

export const JsonViewer = ({
  json,
}: {
  json: FormElementList | Record<string, any>;
}) => {
  json = Array.isArray(json)
    ? json.filter((element) => !('static' in element && element.static))
    : json;

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

//======================================
export function JsxViewer() {
  const formElements = useFormBuilderStore((s) => s.formElements);
  const generatedCode = generateFormCode(formElements);
  const formattedCode = formatCode(generatedCode);
  const highlightedCode = useShiki({ code: formattedCode });
  return highlightedCode ? (
    <Wrapper>{highlightedCode}</Wrapper>
  ) : (
    <div className="text-center py-5 w-full">Generating code...</div>
  );
}
