import React from "react";
import Favorites from "../components/Favorites";
import Hero from "../components/Hero/index";
import Catering from "../components/Catering";
import Info from "../components/Info";
import Layout from "./../components/Layout/index";
import { useInView } from "react-intersection-observer";
import { Box, Container } from "@material-ui/core";

const LandingPage = () => {
  const [refInfoSection, inViewInfo] = useInView({
    threshold: 0, //inViewMain = false when info section is not inview
  });
  return (
    <Layout inViewInfo={inViewInfo}>
      <Box style={{ padding: "4.5em 0em" }}>
        <Hero />
      </Box>
      <Box style={{ padding: "10em 0em", backgroundColor: "#e8f4ea" }}>
        <Info ref={refInfoSection} />
      </Box>

      <Catering />
      <Container maxWidth="lg" style={{ padding: "10em 0em" }}>
        <Favorites />
      </Container>
    </Layout>
  );
};

export default LandingPage;
