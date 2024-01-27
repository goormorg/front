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
import axios from "axios";

function GetRoadmapPage() {
  const [menu, setMenu] = useState<any>(["", "", ""]);

  let userEmail = localStorage.getItem("email") ?? "";

  const [myInfo, setMyInfo] = useState(null);

  const url =
    process.env.REACT_APP_BASE_URL + "/v1/api/user/detail?email=" + userEmail;

  const getMyInfo = async () => {
    const { data } = await axios.get(url);

    setMyInfo(data[0]);
  };

  useEffect(() => {
    userEmail = localStorage.getItem("email") ?? "";
  }, []);

  const getAiAnswer = async () => {
    try {
      const { data } = await axios.get(url);

      const result = await AIAPI.getMore({
        gender: data[0].gender,
        age: data[0].birth,
        weight: String(data[0].weight) + "kg",
        muscle: String(data[0].skeletalMuscle),
        goal: data[0].target,
      });

      const getJson = JSON.parse(result.result);

      setMenu([
        getJson["아침"]["메뉴"].join(","),
        getJson["점심"]["메뉴"].join(","),
        getJson["저녁"]["메뉴"].join(","),
      ]);

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
      //setMenu([["닭가슴살", "계란", "빵"], ["소고기", "흰쌀밥"], ["감자"]]);
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
          >
            <p>아침: {menu[0]}</p>
            <p>점심: {menu[1]}</p>
            <p>저녁: {menu[2]}</p>
          </div>
        </div>
      </Container>
      <Navbar></Navbar>
    </>
  );
}

export { GetRoadmapPage };
