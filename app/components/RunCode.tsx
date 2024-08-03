"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

interface iProsp {
  state: string;
}

const url: string = "https://emkc.org/api/v2/piston/execute";
const RunCode = ({ state }: iProsp) => {
  const [code, setCode] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const runCode = async () => {
    try {
      setLoading(true);
      await axios
        .post(url, {
          language: "javascript",
          version: "18.15.0",
          files: [
            {
              name: "codebook project",
              content: state,
            },
          ],
          stdin: "",
          args: ["1", "2", "3"],
          compile_timeout: 10000,
          run_timeout: 3000,
          compile_memory_limit: -1,
          run_memory_limit: -1,
        })
        .then((res) => {
          setCode(res?.data?.run?.output?.split("\n")[0]);
          return res?.data?.run?.output?.split("\n");
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {}, []);

  return (
    <div>
      <button
        onClick={runCode}
        className="bg-white text-black px-6 py-2 rounded-md"
      >
        <p>Run Code</p>
      </button>

      <div className="mt-5">{code}</div>
    </div>
  );
};

export default RunCode;
