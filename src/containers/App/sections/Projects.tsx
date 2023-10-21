import styled from "@emotion/styled";
import { theme } from "@/styles";
import { Card } from "@/components";
import {
  IconGithub,
  PreviewAsuraGate,
  PreviewBloodhuntCoin,
  PreviewPersonalWebsite,
} from "@/assets";
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
          icon={<IconGithub />}
          label={t("Projects.PersonalWebsite.title")}
          src={PreviewPersonalWebsite}
          tags={formatStringToArray(t("Projects.PersonalWebsite.tags"))}
        />
        <Card
          href={t("Projects.AsuraGate.href")}
          icon={<IconGithub />}
          label={t("Projects.AsuraGate.title")}
          src={PreviewAsuraGate}
          tags={formatStringToArray(t("Projects.AsuraGate.tags"))}
        />
        <Card
          href={t("Projects.Gotchat.href")}
          label={t("Projects.Gotchat.title")}
          tags={formatStringToArray(t("Projects.Gotchat.tags"))}
        />
        <Card
          href={t("Projects.CryptoManager.href")}
          icon={<IconGithub />}
          label={t("Projects.CryptoManager.title")}
          src={PreviewBloodhuntCoin}
          tags={formatStringToArray(t("Projects.CryptoManager.tags"))}
        />
      </ProjectList>
    </ProjectContainer>
  );
};

export default Projects;
