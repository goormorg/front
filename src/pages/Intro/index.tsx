import * as S from "./style";

import { Button } from "components/Button";

import { css } from "@emotion/react";

const Intro = () => (
  <S.Wrapper>
    <S.Title>
      나에게 딱 맞는
      <br />
      식단을 찾아봐요
    </S.Title>
    <S.Text>what’s up healthup</S.Text>
    <S.ButtonWrapper>
      <Button onClick={() => alert("test")} color="grey">
        로그인
      </Button>
      <Button onClick={() => alert("test")} color="green">
        회원가입
      </Button>
    </S.ButtonWrapper>
  </S.Wrapper>
);

export default Intro;
