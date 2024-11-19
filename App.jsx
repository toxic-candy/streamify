import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Video from "./pages/Video";
import Signin from "./pages/Signin";

// Define themes
const lightTheme = {
  bg: "#ffffff",
  text: "#000000",
};

const darkTheme = {
  bg: "#181818",
  text: "#ffffff",
};

// Styled Components
const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
  padding: 20px;
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Container>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="Signin" element={<Signin />} />
                <Route path="video/:id" element={<Video />} />
              </Routes>
            </Wrapper>
          </Main>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;

