import * as S from "./style";

const mock = {
  time: "아침",
  title: "신라면 오리지널/진순이",
  nutrition: {
    kcal: 280,
    carbohydrate: 44,
    sugars: "3g",
    province: "9g",
    protein: "6g",
    saturatedFat: "3.5g",
    salt: "1,160mg",
    calcium: "77mg",
  },
};

const MealCard = () => (
  <S.Wrapper>
    <S.Time>{mock.time}</S.Time>
    <S.Title>{mock.title}</S.Title>
    <S.DesWrapper>
      <S.Description>열량 {mock.nutrition.kcal}</S.Description>
      <S.DetailWrapper>
        <S.Detail>하루 대사량의</S.Detail>
        <S.Description>15%</S.Description>
      </S.DetailWrapper>
    </S.DesWrapper>
    <S.Contents>
      <S.DesWrapper>
        <S.Description>탄수화물 {mock.nutrition.carbohydrate}</S.Description>
        <S.DetailWrapper>
          <S.Detail>기초 영상소 하루치의</S.Detail>
          <S.Description>15%</S.Description>
        </S.DetailWrapper>
      </S.DesWrapper>
      <S.DesWrapper>
        <S.Description>당류 {mock.nutrition.sugars}</S.Description>
        <S.DetailWrapper>
          <S.Detail>=</S.Detail>
          <S.Description>15%</S.Description>
        </S.DetailWrapper>
      </S.DesWrapper>
      <S.DesWrapper>
        <S.Description>지방 {mock.nutrition.province}</S.Description>
        <S.DetailWrapper>
          <S.Detail>=</S.Detail>
          <S.Description>15%</S.Description>
        </S.DetailWrapper>
      </S.DesWrapper>
      <S.DesWrapper>
        <S.Description>단백질 {mock.nutrition.protein}</S.Description>
        <S.DetailWrapper>
          <S.Detail>=</S.Detail>
          <S.Description>15%</S.Description>
        </S.DetailWrapper>
      </S.DesWrapper>
      <S.DesWrapper>
        <S.Description>포화지방 {mock.nutrition.saturatedFat}</S.Description>
        <S.DetailWrapper>
          <S.Detail>=</S.Detail>
          <S.Description>15%</S.Description>
        </S.DetailWrapper>
      </S.DesWrapper>
      <S.DesWrapper>
        <S.Description>나트륨 {mock.nutrition.salt}</S.Description>
        <S.DetailWrapper>
          <S.Detail>=</S.Detail>
          <S.Description>15%</S.Description>
        </S.DetailWrapper>
      </S.DesWrapper>
      <S.DesWrapper>
        <S.Description>칼슘 {mock.nutrition.calcium}</S.Description>
        <S.DetailWrapper>
          <S.Detail>=</S.Detail>
          <S.Description>15%</S.Description>
        </S.DetailWrapper>
      </S.DesWrapper>
    </S.Contents>
  </S.Wrapper>
);

export default MealCard;
