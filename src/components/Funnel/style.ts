import styled from "@emotion/styled";

export const Layout = styled.div`
  display: flex;
  width: 100%;
  margin: 24px;
  gap: 10px;
  flex-direction: column;
`;

export const Input = styled.input`
  border-radius: 25px;
  outline: none;
  border: none;
  background-color: #f1f1f1;
  height: 50px;
  padding: 0 24px;
`;

export const Button = styled.input`
  border-radius: 25px;
  border: none;
  background-color: #42bd4e;
  color: white;
  height: 50px;
  text-align: center;
  font-size: 16px;
`;

export const Extra = styled.div<{ color: string }>`
  color: ${(prop) => prop.color};
  margin-bottom: 10%;
`;

export const Text = styled.div`
  text-align: end;
  color: #b6b6b6;
  font-size: 12px;
  visibility: visible;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  visibility: hidden;
`;
