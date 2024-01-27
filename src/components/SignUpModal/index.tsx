import * as S from "./style";

import { CheckBox, Input } from "components";
import { useState } from "react";
import { Button } from "components/Button";
import { useAtom } from "jotai";
import formAtom from "contexts/formAtom";
import { useNavigate } from "react-router-dom";

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

  const [formUserData, setFormUserData] = useAtom(formAtom);
  const navigate = useNavigate();

  function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function isValidTelNum(num: string): boolean {
    const numRegex = /^\d{2,3}-?\d{3,4}-?\d{4}$/;
    return numRegex.test(num);
  }

  const handleSignUp = () => {
    if (
      (selectAll || !arr.includes(false) || arr.indexOf(false) === 2) &&
      !inputArr.includes("") &&
      isValidEmail(inputArr[1]) &&
      isValidTelNum(inputArr[2])
    ) {
      setFormUserData({
        ...formUserData,
        name: inputArr[0],
        email: inputArr[1],
        phoneNumber: inputArr[2],
        password: inputArr[3],
      });
      navigate("/login");
    } else {
      alert("모두 입력해주세요");
    }
  };

  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.Title>회원가입</S.Title>
        <form>
          <S.NewSvgWrapper>
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
          </S.NewSvgWrapper>
        </form>
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
            key={i}
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
            key={i}
            type={inputTextArr[i] === "비밀번호" && "password"}
            width={"219px"}
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
