import styled from "@emotion/styled";
import { About, Footer, Header, Home, Projects } from "./sections";
import { colors, theme } from "@/styles";
import { Divider } from "@/components";

const AppContainer = styled.div({
  alignItems: "flex-start",
  background: theme.background.gradient,
  color: colors.white,
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  padding: theme.space.large,
});

function App() {
  return (
    <AppContainer>
      <Header />
      <Home />
      <Divider position='left' />
      <About />
      <Divider position='right' />
      <Projects />
      <Divider position='center' />
      <Footer />
    </AppContainer>
  );
}

export default App;
