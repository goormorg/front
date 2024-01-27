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
          <span>{meal.mealDescription}</span>
          <span>{meal.kcal}</span>
          <span>{meal.provideBy}</span>
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
