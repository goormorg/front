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

function GetRoadmapPage() {
  const [menu, setMenu] = useState<string[][]>([[""], [""], [""]]);

  const getAiAnswer = async () => {
    try {
      const result = await AIAPI.getMore({
        gender: "남자",
        age: "17세",
        weight: "60kg",
        muscle: "40",
        goal: "살찌우기",
      });

      const getJson = JSON.parse(result.result);

      setMenu([getJson["아침"], getJson["점심"], getJson["저녁"]]);

      localStorage.setItem(
        "roadmap",
        JSON.stringify([
          {
            time: "아침",
            title: getJson["아침"]["메뉴"].join(","),
            nutrition: {
              kcal: getJson["아침"]["영양소"]["칼로리"],
              carbohydrate: getJson["아침"]["영양소"]["탄수화물"],
              sugars: getJson["아침"]["영양소"]["당류"],
              province: getJson["아침"]["영양소"]["지방"],
              protein: getJson["아침"]["영양소"]["단백질"],
              saturatedFat: getJson["아침"]["영양소"]["포화지방"],
              salt: getJson["아침"]["영양소"]["나트륨"],
              calcium: getJson["아침"]["영양소"]["칼슘"],
            },
          },
          {
            time: "점심",
            title: getJson["점심"]["메뉴"].join(","),
            nutrition: {
              kcal: getJson["점심"]["영양소"]["칼로리"],
              carbohydrate: getJson["점심"]["영양소"]["탄수화물"],
              sugars: getJson["점심"]["영양소"]["당류"],
              province: getJson["점심"]["영양소"]["지방"],
              protein: getJson["점심"]["영양소"]["단백질"],
              saturatedFat: getJson["점심"]["영양소"]["포화지방"],
              salt: getJson["점심"]["영양소"]["나트륨"],
              calcium: getJson["점심"]["영양소"]["칼슘"],
            },
          },
          {
            time: "저녁",
            title: getJson["저녁"]["메뉴"].join(","),
            nutrition: {
              kcal: getJson["저녁"]["영양소"]["칼로리"],
              carbohydrate: getJson["저녁"]["영양소"]["탄수화물"],
              sugars: getJson["저녁"]["영양소"]["당류"],
              province: getJson["저녁"]["영양소"]["지방"],
              protein: getJson["저녁"]["영양소"]["단백질"],
              saturatedFat: getJson["저녁"]["영양소"]["포화지방"],
              salt: getJson["저녁"]["영양소"]["나트륨"],
              calcium: getJson["저녁"]["영양소"]["칼슘"],
            },
          },
        ])
      );

      console.log(getJson);
    } catch (error) {
      setMenu([["닭가슴살", "계란", "빵"], ["소고기", "흰쌀밥"], ["감자"]]);
      localStorage.setItem(
        "roadmap",
        JSON.stringify([
          ["닭가슴살", "계란", "빵"],
          ["소고기", "흰쌀밥"],
          ["감자"],
        ])
      );
    }
  };

  useEffect(() => {
    getAiAnswer();
  }, []);

  return (
    <>
      <Container>
        <div
          css={css({
            display: "flex",
            flexDirection: "column",
          })}
        >
          <h2>
            AI 추천 로드맵을
            <br />
            가져올게요
          </h2>
          <div
            css={css({
              borderRadius: "0.6rem",
              border: "0.1rem solid #E8EAEE",
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              width: "100%",
            })}
          ></div>
        </div>
      </Container>
      <Navbar></Navbar>
    </>
  );
}

export { GetRoadmapPage };
