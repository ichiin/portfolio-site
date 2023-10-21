import styled from "@emotion/styled";
import { IconLinkedin, IconGithub, IconX } from "@/assets";

import { colors, theme } from "@/styles";
import { useTranslation } from "react-i18next";

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

const FooterMailTo = styled.a({
  color: colors.white,
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
  const { t } = useTranslation();
  return (
    <FooterContainer id={t("Footer.id")}>
      <FooterPersonalData>
        <span>{t("Footer.user")}</span>
        <FooterMailTo href={`mailto:${t("Footer.mail")}`}>
          {t("Footer.mail")}
        </FooterMailTo>
        <span>{t("Footer.love")}</span>
      </FooterPersonalData>
      <FooterSocials>
        <FooterIcon
          href='https://www.linkedin.com/in/phil-duval/'
          target='_blank'
        >
          <IconLinkedin />
        </FooterIcon>
        <FooterIcon href='https://github.com/ichiin' target='_blank'>
          <IconGithub />
        </FooterIcon>
        <FooterIcon href='https://twitter.com/PhilippeDuval18' target='_blank'>
          <IconX />
        </FooterIcon>
      </FooterSocials>
      <FooterEmpty></FooterEmpty>
    </FooterContainer>
  );
};

export default Footer;
