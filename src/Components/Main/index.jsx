import React from "react";
import { Wrapper } from "./style";
import "./style.css";
const Main = () => {
  return (
    <Wrapper>
      <Wrapper.Text>
        <Wrapper.Title>
          Assalomu alaykum <Wrapper.Span>PCP</Wrapper.Span>
        </Wrapper.Title>
        <Wrapper.Desc>
          Sababi biz sizga yanada kuchliroq himoyani taklif qilishni istaymiz.{" "}
          <br />
          Yangilanish Sanasi 2023.11.26 <br />
        </Wrapper.Desc>
        <Wrapper.Desc>
          PCP himoya tizimi vaqtinchalik serverdan olib qo‘yildi!
        </Wrapper.Desc>
      </Wrapper.Text>
    </Wrapper>
  );
};

export default Main;
