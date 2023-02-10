import Image from "next/image";
import BigPicture from "../../../components/BigPicture";
import Header from "../../../components/Header";
import Layout from "../../../components/Layout";
import Section from "../../../components/Section";

export default function Travellux() {
  return (
    <>
      <Header
        title="Merokket | Showcasing Our Work and Services"
        description="Explore the stunning results of our previous work. See why Merokket is the top choice for expert design and development services"
      />
      <Layout>
        <BigPicture
          imgSrc="/website/suraja-law/big.png"
          title="SURAJA LAW OFFICES"
          desc="SURAJA Law Offices is a Jakarta-based law firm offering a full range of Indonesian legal services. At SURAJA, we focus on constantly delivering the highest quality legal services to meet our clients&lsquo; needs."
          link="https://surajalaw.com"
        />
        <Section className="flex-col -mt-[90px] xl:-mt-0">
          <div className="w-full aspect-[0.501] relative">
            <Image
              src="/website/suraja-law/collection.png"
              fill
              className="object-cover"
              alt="collection"
            />
          </div>
        </Section>
      </Layout>
    </>
  );
}
