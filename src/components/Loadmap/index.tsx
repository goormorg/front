/** @jsxImportSource @emotion/react */

import * as S from "./style";

import React, { useState } from "react";
import { css } from '@emotion/react'
import { Button } from "components/Button";
import { Modal } from "components/Modal";
import { Title } from "components/Title";
import SelectExample from "components/SelectExample";

type LoadmapMenuType = {
    title?: string
    date?: string
    meal?: "아침" | "점심" | "저녁"
    type?: string
    isLeft?: boolean
}


function Loadmap() {
    const [items, setItems] = useState<LoadmapMenuType[]>([
        {
            date: "2024-01-01",
            meal: "아침",
            type: "up"
        }, 
        {
            date: "2024-01-01",
            meal: "점심",
            type: "up"
        }, 
        {
            date: "2024-01-01",
            meal: "저녁",
            type: "up"
        }, 
    ])

    return (
        <>
            <Title>로드맵</Title>
            <div css={css({
                display: "flex",
                flexDirection: "column-reverse",
                gap: "1rem"
            })}>
                {items.map((el, index) => (
                    <MenuItem title={el.meal}  isLeft={index%2 == 0}></MenuItem>
                
                ))}
            </div>
        </>

    )
}


function MenuItem({ title, isLeft }: LoadmapMenuType) {
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
                <div onClick={handleClickOpenModal} css={css({
                    display: "flex",
                    width: "8rem",
                    height: "8rem",
                    backgroundColor: "#F1F1F1",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "2rem",
                    cursor: "pointer"
                })}>
                    {title}
                </div>

            </div>

            <Modal isOpen={isModalOpen}>
                <Button onClick={() => setIsModalOpen(false)}>x</Button>
                <SelectExample type="up"></SelectExample>

            </Modal>
        </div>
    )
}

export default Loadmap;
