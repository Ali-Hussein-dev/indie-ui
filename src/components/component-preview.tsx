import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import { CodeSnippet } from './code-snippet';

const filePaths = {
  ExpandableCard: 'cards/expandable-card.tsx',
  Separator: 'separators/separator.tsx',
  input: 'inputs/input.tsx',
  button_v1: 'buttons/button-v1.tsx',
  button_v2: 'buttons/button-v2.tsx',
  button_v3: 'buttons/button-v3.tsx',
  button_v4: 'buttons/button-v4.tsx',
  button_v5: 'buttons/button-v5.tsx',
  button_v6: 'buttons/button-v6.tsx',
  button_v7: 'buttons/button-v7.tsx',
  button_v8: 'buttons/button-v8.tsx',

  eye_catching_buttons_v1: 'buttons/eye-catching-button-v1.tsx',
  eye_catching_buttons_v2: 'buttons/eye-catching-button-v2.tsx',
  eye_catching_buttons_v3: 'buttons/eye-catching-button-v3.tsx',
  eye_catching_buttons_v4: 'buttons/eye-catching-button-v4.tsx',
  eye_catching_buttons_v5: 'buttons/eye-catching-button-v5.tsx',

  loader_text: 'loaders/text-loader.tsx',
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
      </Tab>
      <Tab value="Code">
        <CodeSnippet filePath={`/src/components/${filePaths[filePathsKey]}`} />
      </Tab>
    </Tabs>
  );
}
