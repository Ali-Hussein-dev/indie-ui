import { Input, InputBlock } from '@/components/inputs/input';
import { IoSearchSharp, IoSend } from 'react-icons/io5';
import { ComponentPreview } from '@/components/component-preview';
import { MdOutlineClear } from 'react-icons/md';

//======================================
export function InputPreview() {
  return (
    <ComponentPreview
      filePathsKey="input"
      className="flex-col-start px-4 gap-3 py-3"
    >
      <InputBlock>
        <Input placeholder="Default" />
      </InputBlock>
      <InputBlock variant="filled">
        <Input placeholder="filled" />
      </InputBlock>
      <InputBlock variant="underlined">
        <Input placeholder="Underlined" />
      </InputBlock>
      <InputBlock variant="ghost">
        <Input placeholder="Ghost" />
      </InputBlock>
      <InputBlock variant="neubrutalism">
        <Input placeholder="Neubrutalism" />
      </InputBlock>
      <h3 className="mb-0">With Icons</h3>
      <InputBlock
        leftSection={<IoSearchSharp className="mx-1" />}
        rightSection={<IoSend className="mx-1" />}
      >
        <Input placeholder="With right & left icons" />
      </InputBlock>
      <InputBlock
        leftSection={<IoSearchSharp className="mx-1" />}
        rightSection={
          <div className="flex gap-3 items-center mx-1">
            <MdOutlineClear className="size-5" />
            <IoSend className="size-4" />
          </div>
        }
      >
        <Input placeholder="With right & left icons" />
      </InputBlock>
    </ComponentPreview>
  );
}
