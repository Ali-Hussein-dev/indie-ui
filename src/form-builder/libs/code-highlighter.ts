'use server';
import { toJsxRuntime } from 'hast-util-to-jsx-runtime';
import { Fragment } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import { codeToHast } from 'shiki/bundle/web';

export async function codeHighlighter({
  code,
  lang,
}: {
  code: string;
  lang?: string;
}) {
  const out = await codeToHast(code, {
    lang: lang ?? 'tsx',
    theme: 'everforest-dark',
  });

  return toJsxRuntime(out, {
    Fragment,
    jsx,
    jsxs,
  });
}
