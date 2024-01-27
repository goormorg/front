import React from "react";
import { css } from "@emotion/react";

import { useState } from "react";
import Age from "components/Funnel/Age";
import Gender from "components/Funnel/Gender";
import Form from "components/Funnel/Form";
import Aim from "components/Funnel/Aim";
import Loading from "components/Funnel/Loading";
import Prepare from "components/Funnel/Prepare";

function LoginPage() {
  const pages = ["age", "gender", "form", "aim", "loading", "prepare"] as const;
  const [cur, setCur] = useState(5);

  const goNext = () => setCur((cur) => cur + 1);
  const goPrev = () => setCur((cur) => cur - 1);

  return (
    <>
      {pages[cur] === "age" && <Age goNext={goNext} goPrev={goPrev} />}
      {pages[cur] === "gender" && <Gender goNext={goNext} goPrev={goPrev} />}
      {pages[cur] === "form" && <Form goNext={goNext} goPrev={goPrev} />}
      {pages[cur] === "aim" && <Aim goNext={goNext} goPrev={goPrev} />}
      {pages[cur] === "loading" && <Loading goNext={goNext} goPrev={goPrev} />}
      {pages[cur] === "prepare" && <Prepare goPrev={goPrev} />}
    </>
  );
}

export { LoginPage };
