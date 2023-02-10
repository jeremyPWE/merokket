import Image from "next/image";
import BigPicture from "../../../components/BigPicture";
import Header from "../../../components/Header";
import Layout from "../../../components/Layout";
import Section from "../../../components/Section";

export default function ReckOn() {
  return (
    <>
      <Header />
      <Layout>
        <BigPicture
          imgSrc="/website/reck-on/big.png"
          title="RECK-ON"
          desc="This is our take on a digital travel agency landing page. We tried to make it interesting by giving it a fresh design."
        />
        <Section className="flex-col -mt-[90px] xl:-mt-0">
          <div className="w-full aspect-[0.688] relative">
            <Image
              src="/website/reck-on/collection.png"
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
