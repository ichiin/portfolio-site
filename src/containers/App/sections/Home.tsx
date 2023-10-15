import styled from "@emotion/styled";
import ProgrammingIllustration from "@/assets/programming_illustration.svg?react";
import { colors, theme } from "@/styles";

const HeadingPrimary = styled.h1({
  fontFamily: theme.text.heading_1.fontFamily,
  fontSize: theme.text.heading_1.fontSize,
});

const HeadingPrimaryAccent = styled.span({
  color: colors.primary,
});

const HeadingTertiary = styled.h3({
  fontFamily: theme.text.heading_3.fontFamily,
  fontSize: theme.text.heading_3.fontSize,
});

const HomeContainer = styled.section({
  alignItems: "center",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: theme.space.large,
  width: "100%",
});

const IllustrationPart = styled.div({
  display: "flex",
  height: "100%",
  width: "60%",
});

const TextPart = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "40%",
});

const Home = () => {
  return (
    <HomeContainer>
      <TextPart>
        <HeadingTertiary>Hi</HeadingTertiary>
        <HeadingPrimary>
          I'm <HeadingPrimaryAccent>Philippe</HeadingPrimaryAccent>
        </HeadingPrimary>
        <HeadingTertiary>
          Turning concepts into a <br /> code-driven reality.
        </HeadingTertiary>
      </TextPart>
      <IllustrationPart>
        <ProgrammingIllustration />
      </IllustrationPart>
    </HomeContainer>
  );
};

export default Home;
