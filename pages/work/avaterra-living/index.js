import Image from "next/image";
import BigPicture from "../../../components/BigPicture";
import Header from "../../../components/Header";
import Layout from "../../../components/Layout";
import Section from "../../../components/Section";

export default function Travellux() {
  return (
    <>
      <Header />
      <Layout>
        <BigPicture
          imgSrc="/website/avaterra-living/big.png"
          title="AVATERRA LIVING"
          desc="We teamed up with the people from Avaterra Living to design and create their first ever website. Avaterra living is a company with a mission and vision to promote the best handicrafts from local Indonesian artisans."
        />
        <Section className="flex-col -mt-[90px] xl:-mt-0">
          <div className="w-full aspect-[0.637] relative">
            <Image
              src="/website/avaterra-living/collection.png"
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