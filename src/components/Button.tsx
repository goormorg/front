/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";

type ButtonType = {
  children?: any;
  onClick?: any;
  disable?: boolean;
  color?: "light" | "blue" | "white" | "green" | "grey";
};

function Button({ children, onClick, disable, color = "light" }: ButtonType) {
  const buttonColor: any = {
    light: {
      backgroundColor: "#E8EAEE",
      color: "#242427",
      hoverBackgroundColor: "#d7d9de",
    },
    grey: {
      backgroundColor: "#B6B6B6",
      color: "#fff",
      hoverBackgroundColor: "#d7d9de",
    },
    blue: {
      backgroundColor: "#266DF6",
      color: "#FBFBFD",
      hoverBackgroundColor: "#205ed6",
    },
    green: {
      backgroundColor: "#42BD4E",
      color: "#ffffff",
      hoverBackgroundColor: "#3aab45",
    },
    white: {
      backgroundColor: "#ffffff",
      color: "#000000",
      hoverBackgroundColor: "#ffffff",
    },
  };

  return (
    <button
      onClick={onClick}
      disabled={disable}
      css={css({
        fontFamily: "'Noto Sans KR', sans-serif",
        outline: "none",
        border: "none",
        padding: "0.8rem 1.4rem",
        borderRadius: "10rem",
        backgroundColor: buttonColor[color].backgroundColor,
        color: buttonColor[color].color,
        cursor: "pointer",
        transition: "0.1s",
        fontSize: "16px",
        width: "100%",
        height: "50px",
        ":hover": {
          backgroundColor: buttonColor[color].hoverBackgroundColor,
          color: buttonColor[color].color,
        },
      })}
    >
      {children}
    </button>
  );
}

export { Button };
