import * as S from "./style";

import { CheckBox, Input } from "components";
import { useState } from "react";
import { Button } from "components/Button";

const textArr = [
  "[필수] 개인정보 수집 및 이용동의",
  "[필수] 서비스 이용약관",
  "(선택) 마케팅 활용 및 광고정보 수신 동의",
] as const;

const inputTextArr = ["이름", "이메일", "전화번호", "비밀번호"] as const;

const SignUpModal = () => {
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [arr, setArr] = useState<boolean[]>(new Array(3).fill(false));
  const [inputArr, setInputArr] = useState<string[]>(new Array(4).fill(""));

  const handleSignUp = () => {
    if ((selectAll || !arr.includes(false)) && !inputArr.includes("")) {
      // 성공 회원가입 로직 작성
    } else {
      alert("모두 입력해주세요");
    }
  };

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
            isChecked={selectAll || v}
          >
            {textArr[i]}
          </CheckBox>
        ))}
      </S.CheckBoxContainer>
      <S.InputContainer>
        {inputArr.map((v, i) => (
          <Input
            width={"264px"}
            placeholder={inputTextArr[i]}
            value={inputArr[i]}
            onChange={(e: any) => {
              const prev = [...inputArr];
              prev[i] = e.target.value;
              setInputArr(prev);
            }}
          />
        ))}
      </S.InputContainer>
      <Button onClick={handleSignUp} color="green">
        다음
      </Button>
    </S.Wrapper>
  );
};

export default SignUpModal;
