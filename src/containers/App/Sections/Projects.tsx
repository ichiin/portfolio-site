import styled from "@emotion/styled";
import theme from "../../../styles/theme";
import Card from "../../../components/Organisms/Card";
import GithubIcon from "../../../assets/github_icon.svg?react";
import AsuraGatePreview from "../../../assets/asura_gate_preview.png";
import PersonalWebsitePreview from "../../../assets/personal_website_preview.png";
import NoImagePreview from "../../../assets/no_image_preview.png";
import BloodhuntCoinPreview from "../../../assets/bloodhunt_coin_preview.png";

const HeadingSecondary = styled.h2({
  fontFamily: theme.text.heading_2.fontFamily,
  fontSize: theme.text.heading_2.fontSize,
  fontWeight: theme.text.heading_2.fontWeight,
});

const ProjectContainer = styled.section({
  display: "flex",
  flexDirection: "column",
  margin: `${theme.space.large} 0`,
});

const ProjectList = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: theme.space.xlarge,
});

const Projects = () => {
  return (
    <ProjectContainer>
      <HeadingSecondary>Projects</HeadingSecondary>
      <ProjectList>
        <Card
          href='./'
          icon={<GithubIcon />}
          label='Personal site'
          src={PersonalWebsitePreview}
          tags={["Figma", "React", "Typescript", "Vite", "Emotion"]}
        />
        <Card
          href='./'
          icon={<GithubIcon />}
          label='Asura Gate'
          src={AsuraGatePreview}
          tags={["Figma", "React", "Typescript", "Vite", "Emotion"]}
        />
        <Card
          href='./'
          icon={<GithubIcon />}
          label='Gotchat'
          src={NoImagePreview}
          tags={["Figma", "React", "Typescript", "Vite", "Emotion"]}
        />
        <Card
          href='./'
          icon={<GithubIcon />}
          label='Custom cryptocurrency manager'
          src={BloodhuntCoinPreview}
          tags={["Figma", "React", "Typescript", "Vite", "Emotion"]}
        />
      </ProjectList>
    </ProjectContainer>
  );
};

export default Projects;
