import styled from "@emotion/styled";
import { colors, theme } from "@/styles";

interface DividerProps {
  position: "left" | "center" | "right";
}

const Container = styled.div<DividerProps>(
  {
    display: "flex",
    margin: `${theme.space.large} 0px`,
    width: "100%",
  },
  (props) => ({
    justifyContent:
      props.position === "left"
        ? "flex-start"
        : props.position === "right"
        ? "flex-end"
        : props.position,
  })
);

const Line = styled.hr({
  borderWidth: "1px 0",
  margin: 0,
  width: "150px",
});

const Divider = ({ position }: DividerProps) => {
  return (
    <Container position={position}>
      <Line color={colors.primary} />
    </Container>
  );
};

export default Divider;
