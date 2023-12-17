import styled, { keyframes } from "styled-components";
import bg1 from "../../assets/icons/bg-1.svg";
export const Wrapper = styled.div`
  width: 100%;
  height: auto;

  position: relative;
`;
Wrapper.Bg = styled.div`
  background-image: url(${bg1});
  background-repeat: no-repeat;
  width: 1165.59px;
  height: 1080.262px;
  position: absolute;
  left: -34px;
  top: -66px;
  z-index: -1;
`;
Wrapper.Navbar = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  padding: 24px 80px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
`;
Wrapper.Logo = styled.div`
  color: #fff;
  font-family: Azeret Mono;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px; /* 125% */
  letter-spacing: -0.64px;
`;
Wrapper.Button = styled.button`
  width: 180px;
  height: 45px;
  border-radius: 100px;
  border: 1px solid #3ab9db;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  color: #fff;
  text-align: center;
  font-family: Azeret Mono;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 133.333% */
`;
Wrapper.Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;
  gap: 20px;
`;
Wrapper.Slogan = styled.div`
  color: #fff;
  text-align: center;
  font-family: Azeret Mono;
  font-size: 60px;
  font-style: normal;
  font-weight: 500;
  line-height: 80px; /* 133.333% */
  letter-spacing: -1.2px;
  width: 899px;
`;
Wrapper.Info = styled.div`
  color: #c1c3c9;
  font-family: Azeret Mono;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 120% */
  width: 1106px;
  text-align: center;
  line-height: 1.4;
`;

Wrapper.VideoPlayer = styled.video`
  display: flex;
  justify-content: center;
  margin: 80px auto;
  border-radius: 10px;
  width: 890px;
  height: 503px;
  border-radius: 24px;
  border: 1px solid #7774fa;
  background: url(<path-to-image>),
    lightgray 0px 0px / 100.871% 101.849% no-repeat;
  box-shadow: -4px 4px 60px 0px rgba(0, 0, 0, 0.5);
`;
