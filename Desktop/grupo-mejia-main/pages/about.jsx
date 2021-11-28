import React from "react";
import Layout from "../components/layout";
import Footer from "../components/footer/footer";
import BannerNosotros from "../components/bannerNosotros/banner-nosotros";
import ContainerNosotros from "../components/containerNosotros/containerNosotros";

const About = () => {
  return (
    <Layout title="Nosotros" icon="static/icon.ico">
      <BannerNosotros />
      <ContainerNosotros></ContainerNosotros>
      <Footer />
    </Layout>
  );
};

export default About;
