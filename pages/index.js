import Header from "../components/Header";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Process from "../components/Process";
import Showcase from "../components/Showcase";
import Tagline from "../components/Tagline";

export default function Home() {
  return (
    <>
      <Header
        title="Merokket | Web Developers and UI/UX Designers"
        description="We're a team of expert web developers and UI/UX designers, specializing in creating visually stunning websites with seamless functionality and optimized for search engines."
      />
      <Layout>
        <Hero />
        <Tagline />
        <Showcase />
        <Process />
      </Layout>
    </>
  );
}
