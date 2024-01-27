/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";

import axios from "axios";

function MyPage() {
  let userEmail = localStorage.getItem("email") ?? "";

  const [myInfo, setMyInfo] = useState(null);

  const url =
    process.env.REACT_APP_BASE_URL + "/v1/api/user/detail?email=" + userEmail;

  const getMyInfo = async () => {
    const { data } = await axios.get(url);

    setMyInfo(data[0]);
  };

  useEffect(() => {
    userEmail = localStorage.getItem("email") ?? "";
  }, []);

  return (
    <>
      <p onClick={getMyInfo}>my</p>
    </>
  );
}

export { MyPage };
