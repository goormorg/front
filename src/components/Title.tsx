/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from '@emotion/react'

type TitleType = {
    children?: any
}

function Title({ children }: TitleType) {

    return (
        <h1 css={css({
            fontSize: "1.6rem",
            fontWeight: "700"
        })}>{children}</h1>
    );
}
  
export { Title };