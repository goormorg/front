/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { Navbar } from "../components/Navbar";
import { Input } from "../components/Input";
import { Modal } from "../components/Modal";
import { Loadmap } from "components";
import { AIAPI } from "api";

function MainPage() {
    const getAiAnswer = async () => {
        const result = await AIAPI.get({
            gender: '남자',
            age: '17세',
            weight: '60kg',
            muscle: '40',
            goal: '살찌우기'
        })
    }

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

            {/* <Button onClick={getAiAnswer}></Button> */}
        </Container>
        <Navbar></Navbar>
 
        </>
    )

}

export { MainPage };
