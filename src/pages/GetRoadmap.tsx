/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";
import { css, keyframes } from "@emotion/react";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { Navbar } from "../components/Navbar";
import { Input } from "../components/Input";
import { Modal } from "../components/Modal";
import { Loadmap } from "components";
import roadmapLine from "assets/roadmapLine.svg";
import { AIAPI } from "api";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function GetRoadmapPage() {
  const navigate = useNavigate();

  const [menu, setMenu] = useState<any>(["", "", ""]);
  const [showFinalButton, setShowFinalButton] = useState(false);

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
              kcal: String(getJson["아침"]["영양소"]["칼로리"]),
              carbohydrate: String(getJson["아침"]["영양소"]["탄수화물"]),
              sugars: String(getJson["아침"]["영양소"]["당류"]),
              province: String(getJson["아침"]["영양소"]["지방"]),
              protein: String(getJson["아침"]["영양소"]["단백질"]),
              saturatedFat: String(getJson["아침"]["영양소"]["포화지방"]),
              salt: String(getJson["아침"]["영양소"]["나트륨"]),
              calcium: String(getJson["아침"]["영양소"]["칼슘"]),
            },
          },
          {
            time: "점심",
            title: getJson["점심"]["메뉴"].join(","),
            nutrition: {
              kcal: String(getJson["점심"]["영양소"]["칼로리"]),
              carbohydrate: String(getJson["점심"]["영양소"]["탄수화물"]),
              sugars: String(getJson["점심"]["영양소"]["당류"]),
              province: String(getJson["점심"]["영양소"]["지방"]),
              protein: String(getJson["점심"]["영양소"]["단백질"]),
              saturatedFat: String(getJson["점심"]["영양소"]["포화지방"]),
              salt: String(getJson["점심"]["영양소"]["나트륨"]),
              calcium: String(getJson["점심"]["영양소"]["칼슘"]),
            },
          },
          {
            time: "저녁",
            title: getJson["저녁"]["메뉴"].join(","),
            nutrition: {
              kcal: String(getJson["저녁"]["영양소"]["칼로리"]),
              carbohydrate: String(getJson["저녁"]["영양소"]["탄수화물"]),
              sugars: String(getJson["저녁"]["영양소"]["당류"]),
              province: String(getJson["저녁"]["영양소"]["지방"]),
              protein: String(getJson["저녁"]["영양소"]["단백질"]),
              saturatedFat: String(getJson["저녁"]["영양소"]["포화지방"]),
              salt: String(getJson["저녁"]["영양소"]["나트륨"]),
              calcium: String(getJson["저녁"]["영양소"]["칼슘"]),
            },
          },
        ])
      );

      setShowFinalButton(true);

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
        <>
          <div
            css={css({
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: "2rem",
            })}
          >
            <h2>
              AI 추천 로드맵을
              <br />
              가져오는 중이에요
            </h2>
            <div
              css={css({
                borderRadius: "0.6rem",
                border: "0.1rem solid #E8EAEE",
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
              })}
            >
              <p>아침: {menu[0]}</p>
              <p>점심: {menu[1]}</p>
              <p>저녁: {menu[2]}</p>
            </div>

            <div
              css={css({
                bottom: "0",
                display: "flex",
                width: "100%",
                justifyContent: "center",
              })}
            >
              {showFinalButton && (
                <Button onClick={() => navigate("/roadmap")}>
                  내 식단 보러가기
                </Button>
              )}
            </div>
          </div>
        </>
        <Loading isOpen={!showFinalButton}></Loading>
      </Container>
    </>
  );
}

function Loading({ isOpen = false }: any) {
  const rotation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    `;

  return (
    <div
      css={css({
        position: "absolute",
        bottom: 0,
        left: 0,
        display: isOpen ? "flex" : "none",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backdropFilter: "blur(5px)",
        zIndex: "3000",
      })}
    >
      <div
        css={css({
          backgroundColor: "#26262b",
          borderRadius: "0.6rem",
          color: "#ffffff",
          padding: "1rem",
          margin: "2rem",
        })}
      >
        <span
          css={css({
            width: "48px",
            height: "48px",
            border: "5px solid #FFF",
            borderBottomColor: "transparent",
            borderRadius: "50%",
            display: "inline-block",
            boxSizing: "border-box",
            animation: `${rotation} linear 1s infinite`,
          })}
        ></span>
      </div>
    </div>
  );
}

export { GetRoadmapPage };
