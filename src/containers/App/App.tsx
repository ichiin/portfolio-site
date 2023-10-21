import styled from "@emotion/styled";
import { About, Footer, Header, Home, Projects } from "./sections";
import { colors, theme } from "@/styles";
import { Divider } from "@/components";
import useApp from "./useApp";

const AppContainer = styled.div({
  alignItems: "flex-start",
  background: theme.background.gradient,
  color: colors.white,
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  padding: theme.space.large,
});

const App = () => {
  const { homeRef, aboutRef, projectsRef, highlight } = useApp();
  return (
    <AppContainer>
      <Header highlight={highlight} />
      <Home ref={homeRef} />
      <Divider position='left' />
      <About ref={aboutRef} />
      <Divider position='right' />
      <Projects ref={projectsRef} />
      <Divider position='center' />
      <Footer />
    </AppContainer>
  );
};

export default App;
