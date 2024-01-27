/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from '@emotion/react'

type ButtonType = {
    children?: any
    onClick?: any
    disable?: boolean
    size?: string
    borderColor?: string
    type?: string
    stylecss?: object

}

function Button({ children, onClick, disable}: ButtonType) {
    const buttonSizeValue = {
        "sm": {
            padding: "0.4rem 0.9rem",
            fontSize: "0.8rem"
        },
        "md": {
            padding: "0.6rem 1.4rem",
            fontSize: "1rem"
        },
        "lg": {
            padding: "0.6rem 3.4rem",
            fontSize: "1rem"
        },
    }

    const buttonBorderColorValue = {
        "default": "#25252B",
        "green": "#43AB5A",
        "red": "#D73131"
    }

    const buttonRoundTypeValue = {
        "round": "0.6rem",
        "circle": "10rem"
    }

    return (
        <button onClick={onClick} disabled={disable} css={css({ 
            fontFamily: "'Noto Sans KR', sans-serif",

            backgroundColor: "#121215",
            color: "#888A93",
            ":hover": {
                backgroundColor: "#18181c",
                color: "#93959e",
            }
        })}>
            {children}
        </button>
    );
}
  
export { Button };