import styled from "@emotion/styled";
import IconLinkedin from "@/assets/linkedin_icon.svg?react";
import IconGithub from "@/assets/github_icon.svg?react";
import IconTwitter from "@/assets/twitter_x_icon.svg?react";
import { theme } from "@/styles";

const FooterContainer = styled.footer({
  display: "flex",
  flexDirection: "row",
  marginTop: `${theme.space.large} 0`,
  width: "100%",
  [theme.device.mobile]: {
    flexDirection: "column",
  },
});

const FooterEmpty = styled.div({
  flex: 1,
  [theme.device.mobile]: {
    flex: 0,
  },
});

const FooterIcon = styled.a({
  height: "48px",
  width: "48px",
});

const FooterPersonalData = styled.div({
  display: "flex",
  flex: 1,
  flexDirection: "column",
  width: "100%",
  [theme.device.mobile]: {
    alignItems: "center",
    marginBottom: theme.space.medium,
  },
});

const FooterSocials = styled.div({
  alignItems: "center",
  display: "flex",
  flex: 1,
  justifyContent: "center",
  gap: theme.space.medium,
});

const Footer = () => {
  return (
    <FooterContainer>
      <FooterPersonalData>
        <span>Philippe Duval</span>
        <span>home@philippeduval.dev</span>
        <span>Made with ❤ @ Brest</span>
      </FooterPersonalData>
      <FooterSocials>
        <FooterIcon href='./'>
          <IconLinkedin />
        </FooterIcon>
        <FooterIcon href='./'>
          <IconGithub />
        </FooterIcon>
        <FooterIcon href='./'>
          <IconTwitter />
        </FooterIcon>
      </FooterSocials>
      <FooterEmpty></FooterEmpty>
    </FooterContainer>
  );
};

export default Footer;
