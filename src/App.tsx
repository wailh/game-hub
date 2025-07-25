import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

function App() {
  const isAboveLg = useBreakpointValue({ base: false, lg: true });

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`
        }}
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        {isAboveLg && (
          <GridItem area="aside" bg="gold">
            Aside
          </GridItem>
        )}
        <GridItem area="main" bg="dodgerblue">
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
