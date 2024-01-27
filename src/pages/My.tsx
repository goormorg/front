import React, { useEffect, useState } from "react";

import styled from "@emotion/styled";

import axios from "axios";

function MyPage() {
  let userEmail = localStorage.getItem("email") ?? "";

  const [myInfo, setMyInfo] = useState<any>(null);
  const [kg, setKg] = useState<string>("");
  const [tall, setTall] = useState<string>("");
  const [fat, setFat] = useState<string>("");
  const [muscle, setMuscle] = useState<string>("");
  const [isUpdateKg, setIsUpdateKg] = useState<boolean>(false);
  const [isUpdateTall, setIsUpdateTall] = useState<boolean>(false);
  const [isUpdateMuscle, setIsUpdateMuscle] = useState<boolean>(false);

  const getMyInfo = async () => {
    const { data } = await axios.get(
      process.env.REACT_APP_BASE_URL + "/v1/api/user/detail?email=" + userEmail
    );

    setMyInfo(data[0]);
    setKg(data[0].weight);
    setTall(data[0].height);
    setMuscle(data[0].skeletalMuscle);
    setFat(data[0].fat);
  };

  useEffect(() => {
    userEmail = localStorage.getItem("email") ?? "";
    getMyInfo();
  }, []);

  const updateKg = async () => {
    await axios.put(
      process.env.REACT_APP_BASE_URL + "/v1/api/user/info-change/weight",
      {
        email: userEmail,
        weight: kg,
      }
    );
  };

  const updateTall = async () => {
    await axios.put(
      process.env.REACT_APP_BASE_URL + "/v1/api/user/info-change/height",
      {
        email: userEmail,
        height: tall,
      }
    );
  };

  return (
    <Wrapper>
      <ProfileWrapper>
        <SmallWrapper>
          <Profile />
          <TextWrapper>
            <UserName>{myInfo?.name ?? ""}님</UserName>
            <UserPlan>{myInfo?.target ?? ""}</UserPlan>
          </TextWrapper>
        </SmallWrapper>
        <AddButton>식단 추가 관리</AddButton>
      </ProfileWrapper>
      <ModifyContainer>
        <ModifyWrapper>
          <ModifyTextWrapper>
            <CurText>현재 몸무게</CurText>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="2"
              viewBox="0 0 48 2"
              fill="none"
            >
              <path d="M0 1H48" stroke="#999999" stroke-width="0.5" />
            </svg>
            <UpdateText
              onClick={() =>
                isUpdateKg ? updateKg() : setIsUpdateKg((prev) => !prev)
              }
            >
              {isUpdateKg ? "저장" : "수정"}
            </UpdateText>
          </ModifyTextWrapper>
          <InputWrapper>
            <BigInput
              maxLength={3}
              value={kg}
              onChange={(e) => setKg(e.target.value)}
              disabled={!isUpdateKg}
              type="number"
            />
            <Unit>kg</Unit>
          </InputWrapper>
        </ModifyWrapper>
        <ModifyWrapper>
          <ModifyTextWrapper>
            <CurText>현재 키</CurText>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="68"
              height="2"
              viewBox="0 0 68 2"
              fill="none"
            >
              <path d="M0 1L68 0.999994" stroke="#D9D9D9" />
            </svg>
            <UpdateText
              onClick={() =>
                isUpdateTall ? updateTall() : setIsUpdateTall((prev) => !prev)
              }
            >
              {isUpdateTall ? "저장" : "수정"}
            </UpdateText>
          </ModifyTextWrapper>
          <InputWrapper>
            <BigInput
              maxLength={3}
              value={tall}
              onChange={(e) => setTall(e.target.value)}
              type="number"
              disabled={!isUpdateTall}
            />
          </InputWrapper>
        </ModifyWrapper>

        <Box>
          <ViewButton>내 목표치 보기</ViewButton>
          <Fat>
            <FatText>체지방량</FatText>
            <FatInput
              value={fat}
              onChange={(e) => setFat(e.target.value)}
              maxLength={2}
            />
            <FatUnit>%</FatUnit>
          </Fat>
        </Box>

        <ModifyWrapper>
          <ModifyTextWrapper>
            <CurText>골근력량</CurText>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="61"
              height="2"
              viewBox="0 0 61 2"
              fill="none"
            >
              <path d="M0 1L61 1.00001" stroke="#D9D9D9" />
            </svg>
            <UpdateText onClick={() => setIsUpdateMuscle((prev) => !prev)}>
              {isUpdateMuscle ? "저장" : "수정"}
            </UpdateText>
          </ModifyTextWrapper>
          <InputWrapper>
            <BigInput
              maxLength={2}
              value={muscle}
              onChange={(e) => setMuscle(e.target.value)}
              type="number"
              disabled={!isUpdateMuscle}
            />
            <Unit>kg</Unit>
          </InputWrapper>
        </ModifyWrapper>
      </ModifyContainer>
    </Wrapper>
  );
}

export { MyPage };

const Wrapper = styled.div`
  padding: 24px;
  width: 100%;
`;

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const SmallWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

const Profile = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-image: url("https://img.freepik.com/free-photo/human-hand-holding-green-leaf-symbolizing-environmentalism-generated-by-ai_188544-27710.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699056000&semt=ais");
  object-fit: contain;
`;

const UserName = styled.span`
  color: #999;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.28px;
`;

const UserPlan = styled.span`
  color: #141414;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.28px;
`;

const AddButton = styled.button`
  width: 117px;
  height: 44px;
  border-radius: 22px;
  background: #2faa3b;
  border: 0;
  color: #f3f3f3;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.28px;
  cursor: pointer;
`;

const ModifyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2px;
`;

const ModifyTextWrapper = styled(ModifyContainer)`
  gap: 4px;
  align-items: center;
  display: flex;
`;

const ModifyWrapper = styled.div`
  width: 134px;
  height: 121px;
  background: #f1f1f1;

  padding: 12px;

  position: relative;
  border-radius: 10px;
`;

const Unit = styled.span`
  color: #000;
  font-size: 36px;
  font-weight: 300;
  letter-spacing: -2.16px;
  font-weight: 400;
  margin-top: 30px;
`;

const CurText = styled.span`
  color: #999;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.36px;
`;

const UpdateText = styled.span`
  color: #000;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.36px;
  cursor: pointer;
`;

const InputWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 12px;
  display: flex;
`;

const BigInput = styled.input`
  color: #000;
  text-align: right;
  font-size: 64px;
  font-weight: 400;
  letter-spacing: -4.32px;
  outline: none;
  border: none;
  background: none;

  width: 100px;
  padding-right: 3px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const ViewButton = styled.button`
  width: 155px;
  height: 72px;

  color: #fff;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.36px;
  padding-top: 46px;
  padding-left: 12px;

  border-radius: 10px;
  background: #2faa3b;
  border: none;
  display: flex;
`;

const FatInput = styled.input`
  color: #000;
  font-weight: 400;
  outline: none;
  border: none;
  background: none;
  text-align: right;

  font-size: 48px;
  letter-spacing: -2.88px;

  margin-top: 10px;
  width: 46px;
`;

const FatText = styled(CurText)`
  margin-top: 45px;
  margin-right: 26px;
`;

const FatUnit = styled(Unit)`
  font-size: 24px;
  margin-top: 32px;
  letter-spacing: -2.16px;
`;

const Fat = styled.button`
  width: 155px;
  height: 72px;

  color: #fff;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.36px;
  padding-left: 12px;

  border-radius: 10px;
  background: #f1f1f1;
  border: none;
  display: flex;
`;
