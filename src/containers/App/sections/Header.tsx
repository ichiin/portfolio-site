import styled from "@emotion/styled";
import { IconBrand } from "@/assets";
import { NavigationItem, NavigationList, NavigationLogo } from "@/components";
import { useTranslation } from "react-i18next";
import { theme } from "@/styles";

const HeaderContainer = styled.header({
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
  marginBottom: theme.space.medium,
  width: "100%",
});

const Header = ({}) => {
  const { t } = useTranslation();
  return (
    <HeaderContainer>
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
    </HeaderContainer>
  );
};

export default Header;
