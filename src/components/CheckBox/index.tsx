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
  console.log(isDark);
  return (
    <S.Wrapper>
      <S.CheckBox isChecked={isChecked} onClick={onClick}>
        {isChecked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
          >
            <rect x="0.5" y="0.5" width="14" height="14" stroke="#42BD4E" />
            <path d="M3 7L6 10L12 4" stroke="#42BD4E" />
          </svg>
        )}
      </S.CheckBox>
      <S.Text isDark={isDark}>{children}</S.Text>
    </S.Wrapper>
  );
};

export default CheckBox;
