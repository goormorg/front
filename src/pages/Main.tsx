import React from "react";
import { css } from '@emotion/react'
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { Navbar } from "../components/Navbar";
import { Input } from "../components/Input";
import { Modal } from "../components/Modal";

function MainPage() {
    return (
        <>
        <Container>
            <div css={css({
                display: "flex",
                flexDirection: "column"
            })}>
                <Button color="light">버튼</Button>
                <Button color="blue">버튼</Button>
                <Button color="green">버튼</Button>

                <Input></Input>
                <Modal isOpen={false}>
                    scsc
                </Modal>
            </div>
        <p>main</p>


        </Container>
        <Navbar></Navbar>
 
        </>
    )
}

export { MainPage };
