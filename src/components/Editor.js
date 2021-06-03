import React from "react";
import { render } from "react-dom";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-nord_dark";
// import "ace-builds";

const Editor = ({ theme, language, fontsize, valueEditor }) => {
  const onChange = (newValue) => {
    console.log("change", newValue);
  };
  console.log("valueEditor", valueEditor);
  return (
    <div className="w-2/5 min-h-full ">
      <AceEditor
        className="w-full h-full "
        height="800px"
        fontSize={fontsize * 1}
        mode={language}
        theme={theme}
        onChange={onChange}
        name="UNIQUE_ID_OF_DIV"
        highlightActiveLine={true}
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          tabSize: 2,
        }}
        // defaultValue={"let number=5\nconsole.log(number)"}
        // defaultValue={"let number=5\nconsole.log(number)"}
        // setOptions={{
        //   enableBasicAutocompletion: true,
        //   enableLiveAutocompletion: true,
        //   enableSnippets: false,
        //   showLineNumbers: true,

        // }}
        value={valueEditor}
      />
    </div>
  );
};

export default Editor;
