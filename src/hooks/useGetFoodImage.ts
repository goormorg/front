import axios from "axios";

const useGetFoodImage = async (
  food: string,
  setState: React.Dispatch<React.SetStateAction<string>>
) => {
  const key = process.env.REACT_APP_REST_API_KEY;

  const url = `https://dapi.kakao.com/v2/search/image?query=${food}&sort=accuracy&size=1`;

  const res: any = await axios.get(url, {
    headers: {
      Authorization: "KakaoAK " + key,
    },
  });

  setState(res.data.documents[0].image_url);
};

export default useGetFoodImage;
