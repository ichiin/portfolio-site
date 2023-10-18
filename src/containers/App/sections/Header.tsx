import styled from "@emotion/styled";
import Logo from "@/assets/logo.svg?react";
import { NavigationItem, NavigationList, NavigationLogo } from "@/components";
import { useTranslation } from "react-i18next";

const Container = styled.header({
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
});

const Header = ({}) => {
  const { t } = useTranslation();
  return (
    <Container>
      <NavigationLogo href='/' label='Philippe Duval' logo={<Logo />} />
      <NavigationList>
        <NavigationItem highlight href='/'>
          {t("title")}
        </NavigationItem>
        <NavigationItem href='/about'>About</NavigationItem>
        <NavigationItem href='/projects'>Project</NavigationItem>
      </NavigationList>
    </Container>
  );
};

export default Header;
