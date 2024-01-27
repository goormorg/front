import axios from "axios";

type AIGetType = {
  gender: string;
  age: string;
  weight: string;
  muscle: string;
  goal: string;
};

const AIAPI = {
  async get({ gender, age, weight, muscle, goal }: AIGetType) {
    let response = await axios.request({
      method: "get",
      url: `http://43.202.55.176:8000/get`,
      params: {
        gender: gender,
        age: age,
        weight: weight,
        muscle: muscle,
        goal: goal,
      },
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      responseType: "json",
    });

    return response.data;
  },

  async getMore({ gender, age, weight, muscle, goal }: AIGetType) {
    let response = await axios.request({
      method: "get",
      url: `http://43.202.55.176:8000/get/more`,
      params: {
        gender: gender,
        age: age,
        weight: weight,
        muscle: muscle,
        goal: goal,
      },
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      responseType: "json",
    });

    return response.data;
  },
};

export { AIAPI };
