import React from "react";
import { css } from "@emotion/react";

import { useState } from "react";

function LoginPage() {
  type pages = "age" | "gender" | "form" | "ex";
  const [cur, setCur] = useState<pages>("age");

  return (
    <>
      {cur === "ex" && (
        <div /*goNext={() => setCur("age")}*/>예시 사용 방법</div>
      )}
      {cur === "age" && <div>나이 정보 페이지</div>}
      {cur === "gender" && <div>성별 정보 페이지</div>}
      {cur === "form" && <div>체형 정보 페이지</div>}
    </>
  );
}

export { LoginPage };
