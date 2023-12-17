import React from "react";
import { Wrapper } from "./style";
import logo from "../../assets/icons/logo.svg";
const Slogan = () => {
  return (
    <Wrapper>
      {Array.from({ length: 3 }).map((value) => {
        return (
          <>
            <Wrapper.Icon src={logo} />
            <Wrapper.Text>Use PCP , Keep Safety</Wrapper.Text>
          </>
        );
      })}
    </Wrapper>
  );
};

export default Slogan;
