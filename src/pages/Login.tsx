import React from "react";
import { css } from "@emotion/react";

import { useState } from "react";
import Age from "components/Funnel/Age";
import Gender from "components/Funnel/Gender";
import Form from "components/Funnel/Form";
import Aim from "components/Funnel/Aim";

function LoginPage() {
  const pages = ["age", "gender", "form", "aim"] as const;
  const [cur, setCur] = useState(0);

  const goNext = () => setCur(cur + 1);
  const goPrev = () => setCur(cur - 1);

  return (
    <>
      {pages[cur] === "age" && <Age goNext={goNext} goPrev={goPrev}/>}
      {pages[cur] === "gender" && <Gender goNext={goNext} goPrev={goPrev}/>}
      {pages[cur] === "form" && <Form goNext={goNext} goPrev={goPrev}/>}
      {pages[cur] === "aim" && <Aim goPrev={goPrev}/>}
    </>
  );
}

export { LoginPage };
