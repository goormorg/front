import * as S from "./style";

import { css } from "@emotion/react";

interface Props {
  isDark?: boolean;
  children?: any;
  isChecked: boolean;
  onClick: () => void;
}

const CheckBox: React.FC<Props> = ({
  onClick,
  isDark = false,
  children,
  isChecked,
}) => {
  return (
    <S.Wrapper>
      <S.CheckBox onClick={onClick}>{isChecked && <div></div>}</S.CheckBox>
      <S.Text
        css={
          isDark &&
          css`
            color: #141414;
          `
        }
      >
        {children}
      </S.Text>
    </S.Wrapper>
  );
};

export default CheckBox;
