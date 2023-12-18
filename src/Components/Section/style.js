import styled from "styled-components";
import bg2 from "../../assets/icons/bg-2.svg";
export const Wrapper = styled.div`
  width: 100%;
  height: 850px;
  position: relative;
`;
Wrapper.Bg = styled.div`
  background-image: url(${bg2});
  background-repeat: no-repeat;
  width: 1165.59px;
  height: 1030px;
  position: absolute;
  right: -350px;
  top: -209px;
  z-index: -1;
`;
Wrapper.Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 0;
  gap: 20px;
`;
Wrapper.Slogan = styled.div`
  color: #fff;
  text-align: center;
  font-family: Azeret Mono;
  font-size: 45px;
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
Wrapper.Sections = styled.div`
  padding: 25px;
  width: 951px;
  height: 238px;
  flex-shrink: 0;
  border-radius: 25.913px;
  border: 1.08px solid #fff;
  background: #1f1f1d -39.92px -4.92px / 142.061% 113.181% no-repeat;
  box-shadow: 4.319px 4.319px 32.392px 0px rgba(0, 0, 0, 0.3);
  margin: 40px auto;
`;
Wrapper.SectionTitle = styled.h3`
  color: #fff;
  font-family: Azeret Mono;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px; /* 125% */
  letter-spacing: -0.64px;
  display: flex;
  align-items: center;
  gap: 10px;
`;
Wrapper.Items = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  width: ${({ width }) => (width ? "1051px" : "")};
  margin: ${({ width }) => (width ? "0 auto" : "")};
`;
Wrapper.SectionItem = styled.div`
  width: ${({ width }) => (width ? "330px" : "290px")};
  height: 139px;
  flex-shrink: 0;
  border-radius: 16px;
  /* border: 1px solid #fff; */
  background: #292927 -12.922px -15.886px / 376.636% 125.714% no-repeat;
  box-shadow: 4px 4px 25px 0px rgba(0, 0, 0, 0.25);
  padding: 20px;
`;
Wrapper.SectionText = styled.div`
  color: #c1c3c9;
  font-family: Azeret Mono;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4;
`;
