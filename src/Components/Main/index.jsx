import React, { useEffect, useRef } from "react";
import { Wrapper } from "./style";
import vid from "../../assets/video/PCP.mp4";
const Main = () => {
  const videoRef = useRef(null);
  const videoUrl = process.env.PUBLIC_URL + "/myVideo.mp4";

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.play().catch((error) => {
        // Autoplay was blocked, handle the error or provide a user interaction to start the video.
        console.error("Autoplay was blocked:", error);
      });
    }
  }, []);
  return (
    <Wrapper>
      <Wrapper.Bg />
      <Wrapper.Navbar>
        <Wrapper.Logo>Poison Cuts Poison </Wrapper.Logo>
        <Wrapper.Button>Try it</Wrapper.Button>
      </Wrapper.Navbar>
      <Wrapper.Text>
        <Wrapper.Slogan>the new technology of cyber security </Wrapper.Slogan>
        <Wrapper.Info>
          We fight against cybercrime and ensure the safety of individuals and
          organizations. Our cutting-edge technology detects and prevents cyber
          attacks.
        </Wrapper.Info>
      </Wrapper.Text>
      <Wrapper.VideoPlayer
        ref={videoRef}
        width="560"
        height="315"
        controls
        autoPlay>
        <source src={vid} type="video/mp4" />
        Your browser does not support the video tag.
      </Wrapper.VideoPlayer>{" "}
    </Wrapper>
  );
};

export default Main;
