import React from "react";
import backArrow from "assets/backArrow.svg";
import * as S from "./style";
import styled from "@emotion/styled";
import { Oval } from "react-loader-spinner";

interface LoadingProps {
  goPrev: () => void;
  goNext: () => void;
}

const Loading = ({ goPrev, goNext }: LoadingProps) => {
  return (
    <S.Layout>
      <img src={backArrow} onClick={goPrev} width="14px" alt="이전" />
      <LoadingBox>
        <Oval color="#2FAA3B" height={75} width={75} />
        <div style={{textAlign: "center"}}>
          나에게 딱 맞는
          <br /> 식단 계산 중
        </div>
      </LoadingBox>
    </S.Layout>
  );
};

const LoadingBox = styled.div`
  display: flex;
  height: 80vh;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Loading;
