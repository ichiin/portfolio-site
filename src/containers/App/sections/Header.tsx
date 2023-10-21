import styled from "@emotion/styled";
import { IconBrand, FlagGreatBritain, FlagFrance } from "@/assets";
import {
  NavigationItem,
  NavigationList,
  NavigationLogo,
  ButtonIcon,
} from "@/components";
import { useTranslation } from "react-i18next";
import { theme } from "@/styles";

const HeaderContainer = styled.header({
  alignItems: "center",
  display: "flex",
  marginBottom: theme.space.medium,
  width: "100%",
});

const LanguageToggler = styled.div({
  height: "32px",
  marginLeft: theme.space.medium,
  width: "32px",
});

const NavigationContainer = styled.div({
  alignItems: "center",
  display: "flex",
  flex: 1,
  justifyContent: "space-between",
});

const Header = ({}) => {
  const { t, i18n } = useTranslation();
  const iconFlag = i18n.language === "fr" ? FlagFrance : FlagGreatBritain;

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === "fr" ? "en" : "fr");
  };

  return (
    <HeaderContainer>
      <NavigationContainer>
        <NavigationLogo
          href='/'
          label={t("Header.logoLabel")}
          logo={<IconBrand />}
        />
        <NavigationList>
          <NavigationItem highlight href={`#${t("Home.id")}`}>
            {t("Header.homeLabel")}
          </NavigationItem>
          <NavigationItem href={`#${t("About.id")}`}>
            {t("Header.aboutLabel")}
          </NavigationItem>
          <NavigationItem href={`#${t("Projects.id")}`}>
            {t("Header.projectsLabel")}
          </NavigationItem>
        </NavigationList>
      </NavigationContainer>
      <LanguageToggler>
        <ButtonIcon Icon={iconFlag} onClick={changeLanguage} />
      </LanguageToggler>
    </HeaderContainer>
  );
};

export default Header;
