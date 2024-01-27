import * as S from "./style";
import backArrow from "assets/backArrow.svg";
import formAtom from "contexts/formAtom";
import { useAtom } from "jotai";
import React, { useState } from "react";

interface AgeProps {
  goNext: () => void;
  goPrev: () => void;
}

const Age = ({ goNext, goPrev }: AgeProps) => {
  const [age, setAge] = useState("");
  const [formUserData, setFormUserData] = useAtom(formAtom);
  return (
    <S.Layout>
      <img src={backArrow} onClick={goPrev} width="14px" alt="이전" />
      <h2>
        만 나이를
        <br />
        입력해주세요
      </h2>
      <S.Input
        value={age}
        onChange={(e) => setAge(e.currentTarget.value)}
        placeholder="만 나이를 입력해주세요"
        style={{ margin: "10% 0 98.5% 0" }}
      />
      <S.Button
        type="button"
        onClick={() => {
          setFormUserData({ ...formUserData, birth: age });
          goNext();
        }}
        value="다음-체형정보"
      />
    </S.Layout>
  );
};

export default Age;
