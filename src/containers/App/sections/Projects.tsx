import styled from "@emotion/styled";
import { theme } from "@/styles";
import { Card } from "@/components";
import GithubIcon from "@/assets/github_icon.svg?react";
import AsuraGatePreview from "@/assets/asura_gate_preview.png";
import PersonalWebsitePreview from "@/assets/personal_website_preview.png";
import NoImagePreview from "@/assets/no_image_preview.png";
import BloodhuntCoinPreview from "@/assets/bloodhunt_coin_preview.png";
import { useTranslation } from "react-i18next";

const HeadingSecondary = styled.h2({
  fontFamily: theme.text.heading_2.fontFamily,
  fontSize: theme.text.heading_2.fontSize,
  fontWeight: theme.text.heading_2.fontWeight,
});

const ProjectContainer = styled.section({
  display: "flex",
  flexDirection: "column",
});

const ProjectList = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: theme.space.xlarge,
});

const formatStringToArray = (tags: string) => tags?.split(",");

const Projects = () => {
  const { t } = useTranslation();
  return (
    <ProjectContainer id={t("Projects.id")}>
      <HeadingSecondary>{t("Projects.title")}</HeadingSecondary>
      <ProjectList>
        <Card
          href={t("Projects.PersonalWebsite.href")}
          icon={<GithubIcon />}
          label={t("Projects.PersonalWebsite.title")}
          src={PersonalWebsitePreview}
          tags={formatStringToArray(t("Projects.PersonalWebsite.tags"))}
        />
        <Card
          href={t("Projects.AsuraGate.href")}
          icon={<GithubIcon />}
          label={t("Projects.AsuraGate.title")}
          src={AsuraGatePreview}
          tags={formatStringToArray(t("Projects.AsuraGate.tags"))}
        />
        <Card
          href={t("Projects.Gotchat.href")}
          label={t("Projects.Gotchat.title")}
          src={NoImagePreview}
          tags={formatStringToArray(t("Projects.Gotchat.tags"))}
        />
        <Card
          href={t("Projects.CryptoManager.href")}
          icon={<GithubIcon />}
          label={t("Projects.CryptoManager.title")}
          src={BloodhuntCoinPreview}
          tags={formatStringToArray(t("Projects.CryptoManager.tags"))}
        />
      </ProjectList>
    </ProjectContainer>
  );
};

export default Projects;
