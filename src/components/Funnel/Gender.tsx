import React from "react";
import * as S from "./style";
import backArrow from "assets/backArrow.svg";

interface GenderProps {
  goNext: () => void;
  goPrev: () => void;
}

const Gender = ({ goNext, goPrev }: GenderProps) => {
  return (
    <S.Layout>
      <img src={backArrow} onClick={goPrev} width="14px" alt="이전" />
      <h2>
        성별을
        <br />
        입력해주세요
      </h2>
      <S.Button type="button" onClick={goNext} value="여자" />
      <S.Button type="button" onClick={goNext} value="남자" />
    </S.Layout>
  );
};

export default Gender;
