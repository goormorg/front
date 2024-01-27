import React, { useState } from "react";
import { useAtom } from "jotai";
import formAtom from "contexts/formAtom";
import * as S from "./style";
import backArrow from "assets/backArrow.svg";

interface GenderProps {
  goNext: () => void;
  goPrev: () => void;
}

const Gender = ({ goNext, goPrev }: GenderProps) => {
  const [formUserData, setFormUserData] = useAtom(formAtom);
  return (
    <S.Layout>
      <img src={backArrow} onClick={goPrev} width="14px" alt="이전" />
      <h2>
        성별을
        <br />
        입력해주세요
      </h2>
      <S.Button
        type="button"
        onClick={() => {
          setFormUserData({ ...formUserData, gender: "FEMALE" });
          goNext();
        }}
        value="여자"
      />
      <S.Button
        type="button"
        onClick={() => {
          setFormUserData({ ...formUserData, gender: "MALE" });
          goNext();
        }}
        value="남자"
      />
    </S.Layout>
  );
};

export default Gender;
