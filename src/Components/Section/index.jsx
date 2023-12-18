import React from "react";
import { Wrapper } from "./style";
import { CgMenuRight } from "react-icons/cg";

const Section = () => {
  return (
    <Wrapper>
      <Wrapper.Bg />
      <Wrapper.Text>
        <Wrapper.Slogan>
          Embrace a tailored shield for your digital realm.
        </Wrapper.Slogan>
        <Wrapper.Info>
          Say farewell to the era of predictable challenges. Welcome a fortress
          that outsmarts bots with dynamic defenses.
        </Wrapper.Info>
      </Wrapper.Text>
      <Wrapper.Sections>
        <Wrapper.SectionTitle>
          <CgMenuRight /> Services
        </Wrapper.SectionTitle>
        <Wrapper.Items>
          <Wrapper.SectionItem>
            <Wrapper.SectionText>
              Defend apps from bots with cutting-edge cyber security
            </Wrapper.SectionText>
          </Wrapper.SectionItem>
          <Wrapper.SectionItem>
            <Wrapper.SectionText>
              Proactive defense against bots—elevate your application security{" "}
            </Wrapper.SectionText>
          </Wrapper.SectionItem>
          <Wrapper.SectionItem>
            <Wrapper.SectionText>
              Bot-proof applications with dynamic, adaptive security solutions.{" "}
            </Wrapper.SectionText>
          </Wrapper.SectionItem>
        </Wrapper.Items>
      </Wrapper.Sections>
      <Wrapper.Items width={true}>
        <Wrapper.SectionItem width={true}>
          <Wrapper.SectionText>
            Enhance security with real-time monitoring for seamless user
            verification.
          </Wrapper.SectionText>
        </Wrapper.SectionItem>
        <Wrapper.SectionItem width={true}>
          <Wrapper.SectionText>
            Ability to detect malicious behavior patterns and prevent system
            from them usinf AI shield
          </Wrapper.SectionText>
        </Wrapper.SectionItem>
        <Wrapper.SectionItem width={true}>
          <Wrapper.SectionText>
            Verification through biometrics such as voice, face, and motion
            recognition{" "}
          </Wrapper.SectionText>
        </Wrapper.SectionItem>
      </Wrapper.Items>
    </Wrapper>
  );
};

export default Section;
