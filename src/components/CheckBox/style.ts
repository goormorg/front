import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  gap: 14px;
`;

export const CheckBox = styled.div<{ isChecked: boolean }>`
  width: 15px;
  height: 15px;
  border: 1px solid
    ${({ isChecked }) => (isChecked ? "#42bd4e" : "rgba(20, 20, 20, 0.27)")};
  cursor: pointer;
`;

export const Text = styled.span<{ isDark: boolean }>`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.42px;
  color: ${({ isDark }) => (isDark ? "#141414" : "#b6b6b6")};
`;
