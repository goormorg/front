/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from '@emotion/react'
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { Navbar } from "../components/Navbar";
import { Input } from "../components/Input";
import { Modal } from "../components/Modal";
import { Loadmap } from "components";

function MainPage() {
    return (
        <>
        <Container>
            <div css={css({
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "100%"
            })}>

                <Loadmap></Loadmap>
            </div>
        </Container>
        <Navbar></Navbar>
 
        </>
    )
}

export { MainPage };
