import * as S from "./style";

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
      <S.CheckBox isChecked={isChecked} onClick={onClick}>
        {isChecked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
          >
            <rect x="0.5" y="0.5" width="16" height="16" stroke="#42BD4E" />
            <path d="M4 7L6 11L12 6" stroke="#42BD4E" />
          </svg>
        )}
      </S.CheckBox>
      <S.Text isDark={isDark}>{children}</S.Text>
    </S.Wrapper>
  );
};

export default CheckBox;
