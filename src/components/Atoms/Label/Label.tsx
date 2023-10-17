import styled from "@emotion/styled";
import { ReactNode } from "react";
import theme from "../../../styles/theme";

interface LabelProps {
  href: string;
  icon: ReactNode;
  label: string;
}

const LabelContainer = styled.div({
  alignItems: "center",
  display: "flex",
});

const LabelText = styled.span({
  fontFamily: theme.text.heading_4.fontFamily,
  fontSize: theme.text.heading_4.fontSize,
});

const LabelIcon = styled.div({
  marginLeft: theme.space.small,
  height: "32px",
  width: "32px",
});

const LabelIconLink = styled.a({
  marginLeft: theme.space.small,
  height: "32px",
  width: "32px",
});

const Label = ({ label, icon, href }: LabelProps) => {
  return (
    <LabelContainer>
      <LabelText>{label}</LabelText>
      {href ? (
        <LabelIconLink href={href}>{icon}</LabelIconLink>
      ) : (
        <LabelIcon>{icon}</LabelIcon>
      )}
    </LabelContainer>
  );
};

export default Label;
