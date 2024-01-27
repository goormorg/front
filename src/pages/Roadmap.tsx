/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { Navbar } from "../components/Navbar";
import { Input } from "../components/Input";
import { Modal } from "../components/Modal";
import { Loadmap } from "components";
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

  const [menu, setMenu] = useState<string[][]>([[""], [""], [""]]);

  const getAiAnswer = async () => {
    try {
      const result = await AIAPI.get({
        gender: "남자",
        age: "17세",
        weight: "60kg",
        muscle: "40",
        goal: "살찌우기",
      });

      const getJson = JSON.parse(result.result);

      setMenu([getJson["아침"], getJson["점심"], getJson["저녁"]]);

      console.log(getJson);
    } catch (error) {
      setMenu([["닭가슴살", "계란", "빵"], ["소고기", "흰쌀밥"], ["감자"]]);
    }
  };

  useEffect(() => {
    //getAiAnswer();

    setMenu([["닭가슴살", "계란", "빵"], ["소고기", "흰쌀밥"], ["감자"]]);
  }, []);

  return (
    <>
      <Container>
        <div
          css={css({
            position: "absolute",
            top: "100px",
            left: 0,
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
            top: "1000px",
            paddingBottom: "4rem",
            left: 0,
            display: "flex",
            width: "100%",
          })}
        >
          <div
            css={css({
              borderRadius: "0.6rem",
              border: "0.1rem solid #E8EAEE",
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              width: "100%",
            })}
          >
            <p>아침: {menu[0].join(",")}</p>
            <p>점심: {menu[1].join(",")}</p>
            <p>저녁: {menu[2].join(",")}</p>
          </div>
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
