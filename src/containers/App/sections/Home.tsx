import styled from "@emotion/styled";
import { IllustrationProgramming } from "@/assets";
import { colors, theme } from "@/styles";
import { useTranslation } from "react-i18next";
import { forwardRef } from "react";

const HeadingPrimary = styled.h1({
  fontFamily: theme.text.heading_1.fontFamily,
  fontSize: theme.text.heading_1.fontSize,
  fontWeight: theme.text.heading_1.fontWeight,
  margin: `${theme.space.small} 0px`,
});

const HeadingPrimaryAccent = styled.span({
  color: colors.primary,
  fontWeight: 700,
});

const HeadingTertiary = styled.h3({
  fontFamily: theme.text.heading_3.fontFamily,
  fontSize: theme.text.heading_3.fontSize,
  fontWeight: theme.text.heading_3.fontWeight,
  margin: 0,
});

const HomeContainer = styled.section({
  alignItems: "center",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
});

const IllustrationPart = styled.div({
  display: "flex",
  height: "100%",
  width: "60%",
  [theme.device.tablet]: {
    width: "50%",
  },
  [theme.device.mobile]: {
    display: "none",
  },
});

const TextPart = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "40%",
  [theme.device.tablet]: {
    width: "50%",
  },
  [theme.device.mobile]: {
    width: "100%",
  },
});

const Home = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();
  return (
    <HomeContainer id={t("Home.id")} ref={ref}>
      <TextPart>
        <HeadingTertiary>{t("Home.greeting")}</HeadingTertiary>
        <HeadingPrimary>
          {t("Home.userPronoun")}
          <HeadingPrimaryAccent>{t("Home.userName")}</HeadingPrimaryAccent>
        </HeadingPrimary>
        <HeadingTertiary
          dangerouslySetInnerHTML={{ __html: t("Home.description") }}
        ></HeadingTertiary>
      </TextPart>
      <IllustrationPart>
        <IllustrationProgramming />
      </IllustrationPart>
    </HomeContainer>
  );
});

export default Home;
