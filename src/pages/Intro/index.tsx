import * as S from "./style";

import { Button } from "components/Button";

import { useRef } from "react";

import { SignUpModal, SignInModal } from "components";

const Intro = () => {
  const signInDialog = useRef<HTMLDialogElement>(null);
  const signUpDialog = useRef<HTMLDialogElement>(null);

  return (
    <S.Wrapper>
      <S.ModalWrapper ref={signUpDialog}>
        <SignUpModal />
      </S.ModalWrapper>
      <S.ModalWrapper ref={signInDialog}>
        <SignInModal />
      </S.ModalWrapper>
      <S.Title>
        나에게 딱 맞는
        <br />
        식단을 찾아봐요
      </S.Title>
      <S.Text>what’s up healthup</S.Text>
      <S.ButtonWrapper>
        <Button onClick={() => signInDialog.current?.showModal()} color="grey">
          로그인
        </Button>
        <Button onClick={() => signUpDialog.current?.showModal()} color="green">
          회원가입
        </Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
};

export default Intro;
