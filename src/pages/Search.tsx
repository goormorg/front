/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import { css } from "@emotion/react";
import { Input } from "../components/Input";
import { Container } from "../components/Container";
import { Navbar } from "../components/Navbar";

type RoadmapItemType = {
  title?: string;
  description?: string;
  date?: string;
  tag?: string[];
};

function SearchPage() {
  const [searchValue, setSearchValue] = useState("");
  const [item, setItem] = useState([
    {
      title: "dldld",
      description: "dfsdef",
      date: "1010-10-10",
      tag: ["sss", "sdgvsde"],
    },
  ]);

  const onChangeSearch = (e: any) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <Container>
        <div
          css={css({
            position: "absolute",
            left: "0",
            right: "0",
            padding: "1rem",
            display: "flex",
          })}
        >
          <Input
            value={searchValue}
            onChange={onChangeSearch}
            placeholder={"검색..."}
            width="100%"
          ></Input>
        </div>

        <div
          css={css({
            display: "flex",
            paddingTop: "4rem",
            width: "100%",
          })}
        >
          {item.map((el) => (
            <RoadmapItem
              title={el.title}
              description={el.description}
              date={el.date}
              tag={el.tag}
            ></RoadmapItem>
          ))}
        </div>
      </Container>

      <Navbar></Navbar>
    </>
  );
}

function RoadmapItem({ title, description, date, tag }: RoadmapItemType) {
  return (
    <div
      css={css({
        borderRadius: "0.6rem",
        border: "0.1rem solid #E8EAEE",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        width: "100%",
      })}
    >
      <h3 css={css({ marginTop: 0 })}>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export { SearchPage };
