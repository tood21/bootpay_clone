import MainRoutes from "./routes";
import GlobalStyles from "themes/GlobalStyles";
import "./App.css"

import styled from "styled-components";
import ScrollTop from "./util/ScrollTop";

function App() {
  return (
    <Container className="App">
        <ScrollTop />
        <GlobalStyles />
        <MainRoutes />
    </Container>
  );
}

export default App;

const Container = styled.div`


`