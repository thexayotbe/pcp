import styled, { keyframes } from "styled-components";
import bg from "../../assets/images/bg.jpg";
export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
Wrapper.Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
`;
Wrapper.Title = styled.h3`
  font-size: 53px;
  color: #252f3d;
  @media (max-width: 767px) {
    font-size: 30px;
  }
`;
Wrapper.Span = styled.span`
  background-color: #252f3d;
  color: #fff;
  padding: 5px;
  border-radius: 15px;
`;
Wrapper.Desc = styled.p`
  font-size: 15px;
  text-align: center;
  color: #7d7b7c;
  border: 1px solid #7d7b7c;
  padding: 10px;
  border-radius: 20px;
  @media (max-width: 767px) {
    font-size: 12px;
    padding: 10px 5px;
  }
`;
