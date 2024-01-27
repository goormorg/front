/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from 'react';

import { css } from '@emotion/react'



function Modal({ children, isOpen = false, onClose }: any) {
    return (
        <div css={css({ position: "absolute", top: 0, left: 0, display: isOpen ? "flex" : "none", width: "100%", height: "100%", backdropFilter: "brightness(20%)", justifyContent: "center", alignItems: "center", zIndex: "2000", maxHeight: "100%" })}>
            <div css={css({ backgroundColor: "#ffffff", borderRadius: "0.6rem", color: "#000000", width: "60vw", height: "90vh", padding: "1rem", border: "0.1rem solid #E8EAEE", overflow: "scroll" })}>
                {children}
            </div>
        </div>
    );
};

export { Modal };