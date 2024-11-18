'use client';
import * as React from 'react';
import { CodeBlock } from 'fumadocs-ui/components/codeblock';
import { FormElement } from '../form-types';
import { generateFormCode } from '../libs/generate-form-code';
import { highlight } from './code-highlighter';

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
const useShiki = ({ code }: { code: string }) => {
  const [renderedCode, setRenderedCode] = React.useState<
    JSX.Element | undefined
  >(undefined);
  React.useLayoutEffect(() => {
    void highlight({ code }).then(setRenderedCode);
  }, [code]);
  return renderedCode;
};

export const JsonViewer = ({ json }: { json: Record<string, any> | any[] }) => {
  const highlightedCode = useShiki({ code: JSON.stringify(json, null, 2) });
  return highlightedCode ? (
    <Wrapper>{highlightedCode}</Wrapper>
  ) : (
    <div className="text-center py-5 w-full">Generating code...</div>
  );
};

//======================================
export function JsxViewer({ formElements }: { formElements: FormElement[] }) {
  const generatedCode = generateFormCode(formElements);
  const highlightedCode = useShiki({ code: generatedCode });
  return highlightedCode ? (
    <Wrapper>{highlightedCode}</Wrapper>
  ) : (
    <div className="text-center py-5 w-full">Generating code...</div>
  );
}
