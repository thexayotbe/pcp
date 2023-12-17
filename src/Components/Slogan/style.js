import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  height: 76px;
  padding: 18px 30px 19px 30px;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(1px);
  display: flex;
  gap: 70px;
`;
Wrapper.Text = styled.h3`
  color: rgba(255, 255, 255, 0.6);
  font-family: Azeret Mono;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-transform: uppercase;
`;
Wrapper.Icon = styled.img`
  filter: grayscale(100%);
`;
