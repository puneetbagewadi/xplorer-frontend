import React, { useState } from "react";
import Editor from "@monaco-editor/react";

interface MonacoSolidityEditorProps {
  initialCode: string;
  readOnly?: boolean;
}

const MonacoSolidityEditor: React.FC<MonacoSolidityEditorProps> = ({
  initialCode
}) => {
  return (
    <div className="w-full h-[500px] border border-gray-300 rounded">
      <Editor
        height="100%"
        defaultLanguage="sol"
        defaultValue={initialCode}
        theme="vs-light"
        options={{
          readOnly: true,
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          fontSize: 12,
          fontFamily: '"Droid Sans Mono", "Courier New", monospace',
          automaticLayout: true,
          domReadOnly: true,
          cursorStyle: "line",
          renderValidationDecorations: "off",
          occurrencesHighlight: false,
          readOnlyMessage: { value: "This code is read-only." }
        }}
      />
    </div>
  );
};

export default MonacoSolidityEditor;
