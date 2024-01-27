import * as S from "./style";

import { CheckBox, Input } from "components";
import { useState } from "react";
import { Button } from "components/Button";
import { useAtom } from "jotai";
import formAtom from "contexts/formAtom";
import { useNavigate } from "react-router-dom";

const SignInModal = () => {
  const [email, setEmail] = useState<string>("");
  const [pw, setPw] = useState<string>("");

  const navigate = useNavigate();

  function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const handleSignIn = () => {
    if (isValidEmail(email) && pw) {
      // navigate("/login");
    } else {
      alert("모두 입력해주세요");
    }
  };

  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.Title>로그인</S.Title>
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

      <S.InputContainer>
        <Input
          width={"219px"}
          placeholder="이메일"
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
        />
        <Input
          width={"219px"}
          value={pw}
          placeholder="비밀번호"
          onChange={(e: any) => setPw(e.target.value)}
        />
      </S.InputContainer>
      <Button onClick={handleSignIn} color="green">
        다음
      </Button>
    </S.Wrapper>
  );
};

export default SignInModal;
