/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";

type InputType = {
  children?: any;
  value?: any;
  onChange?: any;
  placeholder?: any;
  width: string;
};

function Input({ children, value, onChange, placeholder, width }: InputType) {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      css={css({
        border: "none",
        outline: "none",
        backgroundColor: "#F1F1F1",
        borderRadius: "10rem",
        padding: "12.8px 22.4px",
        width: width,
        height: "24px",
      })}
    ></input>
  );
}

export { Input };
