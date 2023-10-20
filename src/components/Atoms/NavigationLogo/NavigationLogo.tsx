import styled from "@emotion/styled";
import { colors, theme } from "@/styles";
import { ReactNode } from "react";

interface NavigationLogoProps {
  href: string;
  label: string;
  logo: ReactNode;
}

const Label = styled.label({
  color: theme.text.logo.color,
  cursor: "inherit",
  fontFamily: theme.text.logo.fontFamily,
  fontSize: theme.text.logo.fontSize,
  fontWeight: theme.text.logo.fontWeight,
  marginLeft: theme.space.small,
  [theme.device.mobile_small]: {
    display: "none",
  },
});

const Link = styled.a({
  alignItems: "center",
  cursor: "pointer",
  display: "flex",
  textDecoration: "none",
});

const LogoContainer = styled.div({
  color: colors.primary,
  height: "32px",
  width: "32px",
});

const NavigationLogo = ({ href, label, logo }: NavigationLogoProps) => {
  return (
    <Link href={href}>
      <LogoContainer>{logo}</LogoContainer>
      <Label>{label}</Label>
    </Link>
  );
};

export default NavigationLogo;
