/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { Navbar } from "../components/Navbar";
import { Input } from "../components/Input";
import { Modal } from "../components/Modal";
import { Loadmap, MealCard } from "components";
import roadmapLine from "assets/roadmapLine.svg";
import { AIAPI } from "api";

function RoadmapPage() {
  const [buttons, setButtons] = useState([
    {
      top: 80,
      left: 50,
      label: "월요일",
    },
    {
      top: 150,
      left: 150,
      label: "화요일",
    },
    {
      top: 220,
      left: 200,
      label: "수요일",
    },
    {
      top: 290,
      left: 100,
      label: "목요일",
    },
    {
      top: 360,
      left: 190,
      label: "금요일",
    },
    {
      top: 430,
      left: 130,
      label: "토요일",
    },
    {
      top: 520,
      left: 100,
      label: "일요일",
    },
  ]);

  const [menu, setMenu] = useState<any[]>([{}, {}, {}]);
  const [isEnable, setIsEnable] = useState(false);

  useEffect(() => {
    const roadmap: any = localStorage.getItem("roadmap");

    setMenu(JSON.parse(roadmap));
    setIsEnable(true);
  }, []);

  return (
    <>
      <Container>
        <div
          css={css({
            position: "absolute",
            top: "100px",
            left: 0,
            backgroundColor: "#2FAA3B",
          })}
        >
          <img src={roadmapLine} width="375px" alt="이전" />
        </div>
        {buttons.map((el) => (
          <RoadmapButton top={el.top} left={el.left}>
            {el.label}
          </RoadmapButton>
        ))}

        <div
          css={css({
            position: "absolute",
            top: "650px",
            paddingBottom: "4rem",
            flexDirection: "column",
            left: 0,
            display: "flex",
            width: "100%",
            background: "linear-gradient(#2FAA3B, #ccd9cd)",
          })}
        >
          {isEnable && (
            <div
              css={css({
                borderRadius: "0.6rem",
                padding: "1rem",
                margin: "1rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              })}
            >
              <h2 css={css({ color: "#ffffff" })}>
                오늘의 식단을 <br />
                확인하세요.
              </h2>

              <>
                <MealCard mock={menu[0]}></MealCard>

                <MealCard mock={menu[1]}></MealCard>

                <MealCard mock={menu[2]}></MealCard>
              </>
            </div>
          )}
        </div>
      </Container>
      <Navbar></Navbar>
    </>
  );
}

function RoadmapButton({ children, top, left }: any) {
  return (
    <button
      css={css({
        position: "absolute",
        top: top,
        left: left,
        width: "60px",
        height: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "20rem",
        border: "none",
        backgroundColor: "#3785E0",
        color: "#ffffff",
      })}
    >
      {children}
    </button>
  );
}

export { RoadmapPage };
