import styled from "@emotion/styled";
import Header from "./Sections/Header";
import theme from "../../styles/theme";
import { colors } from "../../styles/colors";
import Home from "./Sections/Home";
import Divider from "../../components/Atoms/Divider/Divider";
import About from "./Sections/About";

const AppContainer = styled.div({
  alignItems: "flex-start",
  background: theme.background.gradient,
  color: colors.white,
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  padding: theme.space.medium,
});

function App() {
  return (
    <AppContainer>
      <Header />
      <Home />
      <Divider position='left' />
      <About />
      <Divider position='right' />
    </AppContainer>
  );
}

export default App;
