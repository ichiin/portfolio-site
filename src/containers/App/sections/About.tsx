import styled from "@emotion/styled";
import { IllustrationAstronaut } from "@/assets";
import { theme } from "@/styles";
import { useTranslation } from "react-i18next";

const AboutContainer = styled.section({
  display: "flex",
  flexDirection: "column",
});

const Content = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
  [theme.device.mobile]: {
    flexDirection: "column",
  },
});

const HeadingQuartiary = styled.div({
  fontFamily: theme.text.heading_4.fontFamily,
  fontSize: theme.text.heading_4.fontSize,
  fontWeight: theme.text.heading_4.fontWeight,
});

const HeadingSecondary = styled.h2({
  fontFamily: theme.text.heading_2.fontFamily,
  fontSize: theme.text.heading_2.fontSize,
  fontWeight: theme.text.heading_2.fontWeight,
});

const IllustrationPart = styled.div({
  display: "flex",
  height: "100%",
  width: "50%",
  [theme.device.mobile]: {
    width: "100%",
  },
});

const TextPart = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "50%",
  [theme.device.mobile]: {
    width: "100%",
  },
});

const About = () => {
  const { t } = useTranslation();
  return (
    <AboutContainer id={t("About.id")}>
      <HeadingSecondary>{t("About.title")}</HeadingSecondary>
      <Content>
        <IllustrationPart>
          <IllustrationAstronaut />
        </IllustrationPart>
        <TextPart>
          <HeadingQuartiary>{t("About.subtitle")}</HeadingQuartiary>
          <p>{t("About.firstParagraph")}</p>
          <p>{t("About.secondParagraph")}</p>
          <p>{t("About.thirdParagraph")}</p>
        </TextPart>
      </Content>
    </AboutContainer>
  );
};

export default About;
