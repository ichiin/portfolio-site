import styled from "@emotion/styled";
import Logo from "../../../assets/logo.svg?react";
import NavigationItem from "../../../components/Atoms/NavigationItem/NavigationItem";
import NavigationList from "../../../components/Molecules/NavigationList/NavigationList";
import NavigationLogo from "../../../components/Atoms/NavigationLogo/NavigationLogo";

const Container = styled.header({
  alignItems: "center",
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "space-between",
  width: "100%",
});

const Header = ({}) => {
  return (
    <Container>
      <NavigationLogo href='/' label='Philippe Duval' logo={<Logo />} />
      <NavigationList>
        <NavigationItem href='/'>Home</NavigationItem>
        <NavigationItem href='/about'>About</NavigationItem>
        <NavigationItem href='/projects'>Project</NavigationItem>
      </NavigationList>
    </Container>
  );
};

export default Header;
