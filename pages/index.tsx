import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import Masthead from "../components/masthead";
import AboutUs from "../components/aboutus";
import Skills from "../components/skills";
import Works from "../components/works";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Deep Point Lab</title>
        <meta name="description" content="Website for DeepPointLab" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Masthead />
      <AboutUs />
      <Skills />
      <Works />
    </div>
  );
};

export default Home;
