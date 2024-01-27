import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 276px;
  height: 238px;
  border-radius: 25px;
  background: #fff;
  padding: 18px;
  border: 0.1rem solid #e8eaee;
`;

const text = styled.p`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.32px;
`;

export const Time = styled(text)`
  color: #b6b6b6;
`;

export const Title = styled(text)`
  color: #141414;
  margin-top: 4px;
  margin-bottom: 24px;
`;

export const SmallSpan = styled.span`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.14px;
`;

export const DesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DetailWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const Description = styled(SmallSpan)`
  color: #000;
`;

export const Detail = styled(SmallSpan)`
  color: #b6b6b6;
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 12px;
`;
