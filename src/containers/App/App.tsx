import styled from "@emotion/styled";
import Header from "./Sections/Header";
import theme from "../../styles/theme";
import { colors } from "../../styles/colors";

const AppContainer = styled.div({
  background: theme.background.gradient,
  color: colors.white,
  minHeight: "100vh",
  padding: theme.space.medium,
});

function App() {
  return (
    <AppContainer>
      <Header />
    </AppContainer>
  );
}

export default App;
