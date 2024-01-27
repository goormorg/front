/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";

import axios from "axios";

function MyPage() {
  const userEmail = "moondgod@gmail.com";

  const url =
    process.env.REACT_APP_BASE_URL + "/v1/api/user/detail?email=" + userEmail;

  const getMyInfo = async () => {
    const { data } = await axios.get(url);
    console.log(data);
  };

  return (
    <>
      <p onClick={getMyInfo}>my</p>
    </>
  );
}

export { MyPage };
