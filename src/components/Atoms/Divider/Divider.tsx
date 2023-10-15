import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";

const Container = styled.hr({
  margin: 0,
  width: "150px",
});

const Divider = () => {
  return <Container color={colors.primary} />;
};

export default Divider;
