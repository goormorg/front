/** @jsxImportSource @emotion/react */

import * as S from "./style";

import React, { useState } from "react";
import { css } from '@emotion/react'
import { Button } from "components/Button";
import { Modal } from "components/Modal";

type LoadmapMenuType = {
    title?: string
    date?: string
    day?: "아침" | "점심" | "저녁"
    isLeft: boolean
}

function Loadmap() {
    const [items, setItems] = useState([
        {}, {}, {}
    ])

    return (
        <div css={css({
            display: "flex",
            flexDirection: "column",
            gap: "1rem"
        })}>
            로드맵
            {items.map((el, index) => (
                <MenuItem isLeft={index%2 == 0}></MenuItem>
            
            ))}
        </div>
    )
}


function MenuItem({ isLeft }: LoadmapMenuType) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleClickOpenModal = () => {
        setIsModalOpen(true)
    }

    return (
        <div css={css({
            display: "flex",
            justifyContent: isLeft ? "flex-start" : "flex-end"
        })}>
            <div css={css({
                display: "flex"
            })}>
                <Button onClick={handleClickOpenModal}>아침</Button>
            </div>

            <Modal isOpen={isModalOpen}>
                <Button onClick={() => setIsModalOpen(false)}>x</Button>

            </Modal>
        </div>
    )
}

export default Loadmap;
