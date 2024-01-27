import meals from "constants/meal.json";

interface Props {
  type: "up" | "down" | "maintain";
}

const SelectExample: React.FC<Props> = ({ type }) => {
  const mealsArr = meals.filter((meal) => meal.type.includes(type));

  return (
    <div>
      {mealsArr.map((meal) => (
        <div>
          <span>{meal.mealName}</span>
          <br />
          <span>{meal.mealDescription}</span>
          <br />
          <span>{meal.kcal}</span>
          <br />
          <span>{meal.provideBy}</span>
          <br />
          <img
            src={meal.mealImageUrl}
            alt="사진을 찾을 수 없음"
            width={200}
            height={200}
          />
        </div>
      ))}
    </div>
  );
};

export default SelectExample;
