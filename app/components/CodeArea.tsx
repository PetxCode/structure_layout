"use client";

import React, { useState } from "react";
import Coded from "./Coded";
import { CopyBlock, dracula } from "react-code-blocks";
import { CodedBreak } from "./CodedBreak";

const CodeArea = () => {
  const [text, setText] = useState<string>("");
  return (
    <div className="grid gap-4 grid-cols-7 h-full">
      <div className="col-span-3 border rounded-md p-2"></div>
      <div className="col-span-4 border rounded-md p-2">
        <p className="p-2 bg-neutral-600 rounded-md mb-3">Solution</p>
        <CopyBlock
          text={text}
          language="text"
          showLineNumbers
          theme={dracula}
          codeBlock
        />
        <textarea
          className="h-[20%] w-full resize-none bg-slate-400
        "
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <CodedBreak />
      </div>
    </div>
  );
};

export default CodeArea;
