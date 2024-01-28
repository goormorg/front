import React, { useEffect, useState } from "react";
import backArrow from "assets/backArrow.svg";
import * as S from "./style";
import styled from "@emotion/styled";
import { Oval } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AIAPI } from "api";

interface LoadingProps {
  goPrev: () => void;
  goNext: () => void;
}

const Loading = ({ goPrev, goNext }: LoadingProps) => {
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

      goNext();

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
    <S.Layout>
      <img src={backArrow} onClick={goPrev} width="14px" alt="이전" />
      <LoadingBox>
        <Oval color="#2FAA3B" height={75} width={75} />
        <div style={{ textAlign: "center" }}>
          나에게 딱 맞는
          <br /> 식단 계산 중
        </div>
      </LoadingBox>
    </S.Layout>
  );
};

const LoadingBox = styled.div`
  display: flex;
  height: 80vh;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Loading;
