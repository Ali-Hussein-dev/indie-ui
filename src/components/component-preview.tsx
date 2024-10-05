import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import { CodeSnippet } from './code-snippet';
// import { WithContributor } from '@/components/with-contributor';
import * as React from 'react';

const filePaths = {
  ExpandableCard: 'cards/expandable-card.tsx',
  Separator: 'separators/separator.tsx',
  input: 'inputs/input.tsx',
};

type ComponentPreviewProps = {
  children: React.ReactNode;
  /**
   * The key of the file path to display in the code tab.
   */
  filePathsKey: keyof typeof filePaths;
  // contributorKey: string;
  className?: string;
};
//======================================
export function ComponentPreview({
  children,
  filePathsKey,
  className = '',
  // contributorKey = 'aliHussein',
}: ComponentPreviewProps) {
  // make sure the filePath is a valid key
  if (!filePaths[filePathsKey]) {
    throw new Error(`Invalid file path: ${filePathsKey}`);
  }
  return (
    <Tabs items={['Preview', 'Code']}>
      <Tab value="Preview">
        <div className={className}>{children}</div>
        {/* <WithContributor contributorKey={contributorKey}>
          {children}
        </WithContributor> */}
      </Tab>
      <Tab value="Code">
        <CodeSnippet filePath={'/src/components/' + filePaths[filePathsKey]} />
      </Tab>
    </Tabs>
  );
}
