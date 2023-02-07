import Header from "../components/Header";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Process from "../components/Process";
import Showcase from "../components/Showcase";
import Tagline from "../components/Tagline";

export default function Home() {
  return (
    <>
      <Header />
      <Layout>
        <Hero />
        <Tagline />
        <Showcase />
        <Process />
      </Layout>
    </>
  );
}
