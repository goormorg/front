/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from '@emotion/react'

type ButtonType = {
    children?: any
    onClick?: any
    disable?: boolean
    color?: "light" | "blue"

}

function Button({ children, onClick, disable, color = 'light' }: ButtonType) {
    const buttonColor: any = {
        "light": {
            "backgroundColor": "#E8EAEE",
            "color": "#242427",
            "hoverBackgroundColor": "#d7d9de"
        },
        "blue": {
            "backgroundColor": "#266DF6",
            "color": "#FBFBFD",
            "hoverBackgroundColor": "#205ed6"
        },
    }

    return (
        <button onClick={onClick} disabled={disable} css={css({ 
            fontFamily: "'Noto Sans KR', sans-serif",
            outline: "none",
            border: "none",
            padding: "0.8rem 1.4rem",
            borderRadius: "0.6rem",
            backgroundColor: buttonColor[color].backgroundColor,
            color: buttonColor[color].color,
            transition: "0.1s",
            ":hover": {
                backgroundColor: buttonColor[color].hoverBackgroundColor,
                color: buttonColor[color].color,
            }
        })}>
            {children}
        </button>
    );
}
  
export { Button };