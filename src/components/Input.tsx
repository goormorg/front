/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from '@emotion/react'

type InputType = {
    children?: any
    value?: any
    onChange?: any
    placeholder?: any
}

function Input({ children, value, onChange, placeholder }: InputType) {
    return (
        <input
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            css={css({
                border: "none",
                outline: "none",
                backgroundColor: "#E8EAEE",
                borderRadius: "0.6rem",
                padding: "0.6rem 0.8rem",
                width: "100%"
            })}
        ></input>
    )
}

export { Input }