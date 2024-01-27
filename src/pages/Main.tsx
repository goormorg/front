import React from "react";
import { css } from '@emotion/react'
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { Navbar } from "../components/Navbar";
import { Input } from "../components/Input";

function MainPage() {
    return (
        <>
        <Container>
        <p>main</p>
        <Button color="light">버튼</Button>
        <Button color="blue">버튼</Button>

        <Input></Input>

        </Container>
        <Navbar></Navbar>
 
        </>
    )
}

export { MainPage };
