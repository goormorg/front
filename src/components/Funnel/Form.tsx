import React, { useRef, useState } from "react";
import backArrow from "assets/backArrow.svg";
import downArrow from "assets/downArrow.svg";
import * as S from "./style";
import { useAtom } from "jotai";
import formAtom from "contexts/formAtom";

interface FormProps {
  goPrev: () => void;
  goNext: () => void;
}

const Form = ({ goPrev, goNext }: FormProps) => {
  const inputRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLInputElement>(null);

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [fat, setFat] = useState(0);
  const [skeletalMuscle, setSkeletalMuscle] = useState(0);
  const [formUserData, setFormUserData] = useAtom(formAtom);

  const handleVisible = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (inputRef.current?.style && buttonRef.current?.style) {
      inputRef.current.style.visibility = "visible";
      buttonRef.current.style.marginTop = "calc(30% + 24.5px)";
      e.currentTarget.style.display = "none";
    }
  };

  return (
    <S.Layout>
      <img src={backArrow} onClick={goPrev} width="14px" alt="이전" />
      <h2 style={{ marginBottom: 0 }}>
        체형 정보를
        <br />
        입력해주세요
      </h2>
      <S.Extra color="#42BD4E">추가적인 입력이 가능해요</S.Extra>
      <S.Input
        placeholder="몸무게*"
        value={weight || ""}
        onChange={(e) => setWeight(parseInt(e.currentTarget.value))}
      />
      <S.Input
        placeholder="키*"
        value={height || ""}
        onChange={(e) => setHeight(parseInt(e.currentTarget.value))}
      />
      <S.Text onClick={handleVisible}>
        추가 정보 입력 <img src={downArrow} alt="아래 화살표" width="14px" />
      </S.Text>
      <S.InputBox ref={inputRef}>
        <S.Input
          placeholder="체지방률"
          value={fat || ""}
          onChange={(e) => setFat(parseInt(e.currentTarget.value))}
        />
        <S.Input
          placeholder="골격근량"
          value={skeletalMuscle || ""}
          onChange={(e) => setSkeletalMuscle(parseInt(e.currentTarget.value))}
        />
      </S.InputBox>

      <S.Button
        ref={buttonRef}
        type="button"
        value="다음"
        onClick={() => {
          setFormUserData({
            ...formUserData,
            weight,
            height,
            fat,
            skeletalMuscle,
          });
          goNext();
        }}
        style={{ marginTop: "30%" }}
      />
    </S.Layout>
  );
};

export default Form;
