import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 312px;
  height: 640px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 24px;
  position: relative;
`;

export const Title = styled.h1`
  color: #141414;
  text-align: center;
  font-size: 36px;
  font-weight: 900;
  margin: 215px 0 8px;
`;

export const Text = styled.span`
  color: #b6b6b6;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.48px;
`;

export const Button = styled.button`
  width: 312px;
  height: 50px;
  border-radius: 25px;
  background: #b6b6b6;

  color: #fff;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.48px;
`;

export const ButtonWrapper = styled.div`
  width: 312px;
  position: absolute;
  bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
