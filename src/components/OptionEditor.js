import React from "react";
import { Select } from "antd";

const { Option } = Select;
const OptionEditor = ({
  handleChangeTheme,
  handleChangeLanguage,
  handleChangeFontsize,
}) => {
  return (
    <div
      className="w-28 flex flex-col 
  "
    >
      <p className="text-gray-300">Mode:</p>
      <Select
        defaultValue="javascript"
        className="w-full"
        onChange={handleChangeLanguage}
      >
        <Option className="" value="css">
          Css
        </Option>
        <Option className="" value="java">
          Java
        </Option>

        <Option className="" value="javascript">
          Javascript
        </Option>
      </Select>
      <p className="mt-5 text-gray-300">Theme:</p>
      <Select
        defaultValue="dracula"
        className="w-full"
        onChange={handleChangeTheme}
      >
        <Option className="" value="twilight">
          Twilight
        </Option>
        <Option className="" value="dracula">
          Dracula
        </Option>

        <Option className="" value="monokai">
          Monokai
        </Option>
      </Select>
      <p className="mt-5 text-gray-300">Font Size:</p>
      <Select
        defaultValue="16"
        className="w-full"
        onChange={handleChangeFontsize}
      >
        <Option className="" value="14">
          14
        </Option>
        <Option className="" value="16">
          16
        </Option>

        <Option className="" value="18">
          18
        </Option>
      </Select>
    </div>
  );
};

export default OptionEditor;
