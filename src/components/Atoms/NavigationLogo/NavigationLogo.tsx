import styled from "@emotion/styled";
import { colors, theme } from "@/styles";
import { ReactNode } from "react";

interface NavigationLogoProps {
  href: string;
  label: string;
  logo: ReactNode;
}

const Label = styled.label({
  marginLeft: theme.space.medium,
});

const Link = styled.a({
  alignItems: "center",
  display: "flex",
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
