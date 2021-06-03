import React from "react";

import { Input } from "antd";

const { TextArea } = Input;

const InputText = () => {
  const onChange = (e) => {
    console.log(e);
  };
  return <TextArea placeholder="Type the place hoder of the editor" className="w-2/5" onChange={onChange} />;
};

export default InputText;
