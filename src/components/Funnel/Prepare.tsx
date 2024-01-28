import React from "react";
import * as S from "./style";
import rightArrow from "assets/rightArrow.svg";
import backArrow from "assets/backArrow.svg";
import example from "assets/example.png";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

interface PrepareProps {
  goPrev: () => void;
}

const Prepare = ({ goPrev }: PrepareProps) => {
  const navigate = useNavigate();

  return (
    <S.Layout>
      <img src={backArrow} onClick={goPrev} width="14px" alt="이전" />
      <h2 style={{ margin: "50px 0 0 0" }}>
        나의 목표에 딱 맞는
        <br /> 식단이 준비 됬어요.
      </h2>
      <S.Extra color="#B6B6B6">날짜 별 플랜을 자세히 살펴보세요.</S.Extra>
      <DietBox>
        <Thumbnail src={example} alt="썸네일" />
        <RowBox>
          <FlexBox>
            <GrayText>단백질 55g</GrayText>
            <GrayText>지방 50g</GrayText>
          </FlexBox>
          <div style={{ fontSize: "14px" }}>총 열량 2600 kcal</div>
        </RowBox>

        <GrayText>탄수화물 130g</GrayText>
      </DietBox>
      <MoreBox>
        <div onClick={() => navigate("/roadmap")}>
          더 살펴보기 <RightArrow src={rightArrow} />
        </div>
      </MoreBox>
    </S.Layout>
  );
};

const DietBox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 18px;
  justify-content: center;
  width: 312px;
  height: 295px;
  background-color: #f1f1f1;
  border-radius: 25px;
`;

const Thumbnail = styled.img`
  width: 276px;
  height: 217px;
`;

const GrayText = styled.div`
  color: #999999;
  font-size: 14px;
`;

const RowBox = styled.div`
  margin-top: 12px;
  display: flex;
  align-items: start;
  justify-content: space-between;
`;

const FlexBox = styled.div`
  display: flex;
  gap: 4px;
`;

const MoreBox = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 6px;
  color: #7f7f7f;
  font-size: 12px;
`;

const RightArrow = styled.img`
  width: 5px;
`;

export default Prepare;
