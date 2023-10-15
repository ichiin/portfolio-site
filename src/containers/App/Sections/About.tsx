import styled from "@emotion/styled";
import AstronautIllustration from "../../../assets/astronaut_illustration.svg?react";
import theme from "../../../styles/theme";

const AboutContainer = styled.section({
  display: "flex",
  flexDirection: "column",
  margin: `${theme.space.large} 0`,
});

const Content = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
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
});

const TextPart = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "50%",
});

const About = () => {
  return (
    <AboutContainer>
      <HeadingSecondary>About me</HeadingSecondary>
      <Content>
        <IllustrationPart>
          <AstronautIllustration />
        </IllustrationPart>
        <TextPart>
          <HeadingQuartiary>Bonjour !</HeadingQuartiary>
          <p>
            My name is Philippe, a 28-year-old web developer hailing from the
            beautiful coastal town of Brest, France.
          </p>
          <p>
            I'm passionate about enhancing user interfaces and crafting
            intuitive design systems that make digital experiences come to life.
            I'm an ardent believer in the power of continuous learning and the
            art of effective communication, values I hold dear in both my
            personal and professional journey.
          </p>
          <p>
            Beyond the screen, you'll find me pedaling through scenic routes or
            hitting the gym, feeding my love for fitness. I'm also an avid
            traveler, with an upcoming adventure to South Korea awaiting, where
            I can't wait to explore new horizons and immerse myself in the
            vibrant culture.
          </p>
        </TextPart>
      </Content>
    </AboutContainer>
  );
};

export default About;
