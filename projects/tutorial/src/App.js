/* import React from "react";
import "./App.css";

import { createGlobalStyle } from "styled-components";

import AlternativeHeader from "./examples/AlternativeHeader";
import { DangerButton, SuccessButton } from "./examples/PropsButton";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <AlternativeHeader title="hello from app.js" background="cyan" />
      <AlternativeHeader title="hello from app.js TWO" />
      <DangerButton big>danger button</DangerButton>
      <SuccessButton>success button</SuccessButton>
    </div>
  );
}

export default App; */

/* import React from "react";
import "./App.css";

import Hero from "./examples/Hero";
import img1 from "./images/image-1.jpeg";
import img2 from "./images/image-2.jpeg";
import Banner from "./examples/Banner";
import { DangerButton } from "./examples/PropsButton";

function App() {
  return (
    <div>
      <Hero img={img1}>
        <Banner title="this is my title" color="red">
          <DangerButton big>click me</DangerButton>
        </Banner>
      </Hero>
      <Hero img={img2} />
      <Hero big />
    </div>
  );
}

export default App; */

/**
 * attrs Method
 */

/* import React from "react";
import "./App.css";

import { BasicInput, AwesomeInput } from "./examples/Inputs";

function App() {
  return (
    <div>
      <BasicInput />
      <AwesomeInput />
      <AwesomeInput type="email" placeholder="please enter email" />
    </div>
  );
}

export default App; */

/**
 * CSS Helper Function and Animation
 */

/* import React from "react";
import "./App.css";

import { RedBox, GreenBox } from "./examples/Boxes";
import { Box } from "./examples/AnimatedBox";

function App() {
  return (
    <div>
      <RedBox color="red"></RedBox>
      <GreenBox color="green"></GreenBox>
      <Box />
    </div>
  );
}

export default App; */

/**
 * Themes
 */

/* import React, { useState } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { redTheme, greenTheme, blueTheme } from "./examples/theming/themes";
import Navbar from "./examples/theming/Navbar";
import Button from "./examples/theming/Button";
import Content from "./examples/theming/Content";

function App() {
  const [theme, setTheme] = useState(redTheme);

  const handleTheme = () => {
    if (theme.primaryColor === "red") {
      setTheme(greenTheme);
    } else if (theme.primaryColor === "green") {
      setTheme(blueTheme);
    } else {
      setTheme(redTheme);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <main>
        <Navbar>
          <Button onClick={handleTheme}>toggle theme</Button>
        </Navbar>
        <Content />
      </main>
    </ThemeProvider>
  );
}

export default App; */

/**
 * Simple Media Queries and Media Quries with a Object
 */

import React from "react";
import "./App.css";
import { Banner, SecondBanner } from "./components/Banners";

function App() {
  return (
    <div>
      <Banner>
        <h1>first banner</h1>
      </Banner>
      <SecondBanner>
        <h1>second banner</h1>
      </SecondBanner>
    </div>
  );
}

export default App;
