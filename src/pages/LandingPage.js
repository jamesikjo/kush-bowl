import React from "react";
import Favorites from "../components/Favorites";
import Hero from "../components/Hero/index";
import Catering from "../components/Catering";
import Info from "../components/Info";
import Layout from "./../components/Layout/index";
import { useInView } from "react-intersection-observer";

const LandingPage = () => {
  const [refInfoSection, inViewInfo] = useInView({
    threshold: 0, //inViewMain = false when info section is not inview
  });
  return (
    <Layout inViewInfo={inViewInfo}>
      <Hero />
      <Info ref={refInfoSection} />
      <Catering />
      <Favorites />
    </Layout>
  );
};

export default LandingPage;
