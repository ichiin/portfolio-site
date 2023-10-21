import styled from "@emotion/styled";
import React, { MouseEventHandler } from "react";

interface ButtonIconProps {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  onClick: MouseEventHandler;
}

const Container = styled.button({
  alignItems: "center",
  background: "none",
  border: "none",
  cursor: "pointer",
  display: "flex",
  height: "100%",
  maxHeight: "32px",
  maxWidth: "32px",
  outline: "inherit",
  padding: 0,
  width: "100%",
});

const IconContainer = styled.div({
  display: "flex",
  height: "100%",
  width: "100%",
});

const ButtonIcon = ({ Icon, onClick }: ButtonIconProps) => {
  return (
    <Container onClick={onClick}>
      <IconContainer>
        <Icon />
      </IconContainer>
    </Container>
  );
};

export default ButtonIcon;
