import * as S from "./style";
import backArrow from "assets/backArrow.svg";
import React from "react";

interface AgeProps {
  goNext: () => void;
  goPrev: () => void;
}

const Age = ({ goNext, goPrev }: AgeProps) => {
  return (
    <S.Layout>
      <img src={backArrow} onClick={goPrev} width="14px" alt="이전" />
      <h2>
        만 나이를
        <br />
        입력해주세요
      </h2>
      <S.Input
        placeholder="만 나이를 입력해주세요"
        style={{ margin: "10% 0 98.5% 0" }}
      />
      <S.Button type="button" onClick={goNext} value="다음-체형정보" />
    </S.Layout>
  );
};

export default Age;
