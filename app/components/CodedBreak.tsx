"use client";

import React, { useState, useRef } from "react";
import Editor from "@monaco-editor/react";
import { LiveProvider, LivePreview } from "react-live";
import RunCode from "./RunCode";
import { editor } from "monaco-editor";

export const CodedBreak = () => {
  const ref: any = useRef(null);

  const mounted = (editor: any) => {
    ref.current = editor;
    editor.focus;
  };
  const [state, setState] = useState<string>("");
  function handleEditorChange(value?: string) {
    console.log("here is the current model value:", value);
    setState(value!);
  }
  return (
    <div>
      <Editor
        height="40vh"
        defaultLanguage="javascript"
        defaultValue={state}
        onChange={handleEditorChange}
        className="border rounded-md bg-yellow-50 "
        theme="vs-dark"
        onMount={mounted}
      />
      <div className="my-3">
        <hr />
      </div>
      <RunCode state={state} />
      <div className="my-3">
        <hr />
      </div>
      <LiveProvider code={state!}>
        <LivePreview />
      </LiveProvider>
    </div>
  );
};
