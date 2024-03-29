/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import "material-icons/iconfont/material-icons.css";

type NavbarType = {
  children?: any;
};

const path = [
  {
    url: "/",
    name: "홈",
    icon: "home",
  },
  {
    url: "/search",
    name: "검색",
    icon: "search",
  },
  {
    url: "/user",
    name: "세팅",
    icon: "settings",
  },
] as const;

function Navbar() {
  const navigate = useNavigate();

  const handleClick = (url: string) => {
    navigate(url);
  };

  return (
    <div css={css({ position: "fixed", bottom: 0, width: "100%" })}>
      <div
        css={css({
          backgroundColor: "#ffffff",
          height: "3rem",
          borderTop: "0.1rem solid #E8EAEE",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        })}
      >
        {path.map((el, index) => (
          <Button
            color="white"
            key={el + "" + index}
            onClick={() => handleClick(el.url)}
          >
            <span className="material-icons">{el.icon}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}

export { Navbar };
