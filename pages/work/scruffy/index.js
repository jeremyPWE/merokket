import Image from "next/image";
import BigPicture from "../../../components/BigPicture";
import Header from "../../../components/Header";
import Layout from "../../../components/Layout";
import Section from "../../../components/Section";

export default function Scruffy() {
  return (
    <>
      <Header />
      <Layout>
        <BigPicture
          imgSrc="/branding/scruffy/big.png"
          title="SCRUFFY"
          desc="Our first exploration with a goal to learn about brand & logo design. Scruffy is a brand that provide sustainable pet care product for your fur buddy."
        />
        <Section className="flex-col -mt-[90px] xl:-mt-0">
          <div className="w-full aspect-[0.468] relative bg-gray-300">
            <Image
              src="/branding/scruffy/collection1.png"
              fill
              className="object-cover"
              alt="collection"
            />
          </div>
          <div className="w-full aspect-[1.414] relative bg-gray-300">
            <Image
              src="/branding/scruffy/collection2.png"
              fill
              className="object-cover"
              alt="collection"
            />
          </div>
          <div className="w-full aspect-[1.414] relative bg-gray-300">
            <Image
              src="/branding/scruffy/collection3.png"
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