/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from '@emotion/react'

type ContainerType = {
    children?: any
}

function Container({ children }: ContainerType) {
    return (
        <div css={css({
            display: "flex",
            justifyContent: "center",
            width: "100%"
        })}>
            <div css={css({
                display: "flex",
                width: "100%", 
                padding: "1rem 1rem",
                '@media(min-width: 1200px)': {
                    maxWidth: "1200px",
                }
            })}>
                {children}
            </div>
        </div>
    )
}

export { Container }