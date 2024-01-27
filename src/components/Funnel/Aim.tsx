import React from "react";
import backArrow from "assets/backArrow.svg";
import * as S from "./style";

interface AimProps {
  goPrev: () => void;
}

const Aim = ({ goPrev }: AimProps) => {
  return (
    <S.Layout>
      <img src={backArrow} onClick={goPrev} width="14px" alt="이전" />
      <h2 style={{ marginBottom: 0 }}>
        나의 목표를<br />
        설정 해 주세요
      </h2>
      <S.Extra color="#B6B6B6">자신에게 가장 적합하게 맞춰주세요</S.Extra>
      <S.Button type="button" value="건강한 생활" />
      <S.Button type="button" value="체중 감량" />
      <S.Button type="button" value="체중 중량" />
      <S.Button type="button" value="체중 유지" />
    </S.Layout>
  );
};

export default Aim;
