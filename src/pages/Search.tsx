/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import { css } from '@emotion/react'
import { Input } from "../components/Input";
import { Container } from "../components/Container";
import { Navbar } from "../components/Navbar";

function SearchPage() {
    const [searchValue, setSearchValue] = useState("")

    const onChangeSearch = (e: any) => {
        setSearchValue(e.target.value)
    }
    
    return (
        <>
            <Container>
                <div css={css({
                    position: "absolute",
                    left: "0",
                    right: "0",
                    padding: "1rem",
                    display: "flex"
                })}>
                    <Input value={searchValue} onChange={onChangeSearch} placeholder={"검색..."}></Input>
                </div>

                
            </Container>

                
            <Navbar></Navbar>

        </>
    )
}

export { SearchPage }