import axios from "axios";

const useGetFoodImage = async (food: string) => {
  const key = process.env.REACT_APP_REST_API_KEY;

  const url = `https://dapi.kakao.com/v2/search/image?query=${food}&sort=accuracy&size=1`;

  const res = axios.get(url, {
    headers: {
      Authorization: "KakaoAK " + key,
    },
  });

  console.log(res);
};

export default useGetFoodImage;
