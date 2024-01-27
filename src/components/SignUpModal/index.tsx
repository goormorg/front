import * as S from "./style";

import { CheckBox } from "components";

import { useState } from "react";

const textArr = [
  "[필수] 개인정보 수집 및 이용동의",
  "[필수] 서비스 이용약관",
  "(선택) 마케팅 활용 및 광고정보 수신 동의",
] as const;

const SignUpModal = () => {
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [arr, setArr] = useState<boolean[]>(new Array(3).fill(false));

  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.Title>회원가입</S.Title>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="27"
          height="27"
          viewBox="0 0 27 27"
          fill="none"
        >
          <path
            d="M26 1L13.5 13.5M13.5 13.5L26 26M13.5 13.5L1 1M13.5 13.5L1 26"
            stroke="#B6B6B6"
          />
        </svg>
      </S.TitleWrapper>
      <S.Temp />
      <CheckBox
        isChecked={selectAll}
        onClick={() => setSelectAll((prev) => !prev)}
        isDark={true}
      >
        전체 동의
      </CheckBox>
      <S.Line />
      <S.CheckBoxContainer>
        {arr.map((v, i) => (
          <CheckBox
            onClick={() => {
              const prev = [...arr];
              prev[i] = !prev[i];
              setArr(prev);
            }}
            isChecked={v}
          >
            {textArr[i]}
          </CheckBox>
        ))}
      </S.CheckBoxContainer>
    </S.Wrapper>
  );
};

export default SignUpModal;
