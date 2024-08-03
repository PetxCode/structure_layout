import { FC } from "react";
import { CopyBlock, dracula } from "react-code-blocks";

interface iCode {
  code: string;
}

const Coded: FC<iCode> = ({ code }) => {
  return (
    <CopyBlock
      text={code}
      language="text"
      showLineNumbers
      theme={dracula}
      codeBlock
    />
  );
};

export default Coded;
