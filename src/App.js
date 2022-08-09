import MainRoutes from "./routes";
import GlobalStyles from "themes/GlobalStyles";
import "./App.css"
import styled from "styled-components";

function App() {
  return (
    <Container className="App">
        <GlobalStyles />
        <MainRoutes />
    </Container>
  );
}

export default App;

const Container = styled.div`

height: 200vh;

`