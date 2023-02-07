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
          imgSrc="/website/travellux/big.png"
          title="TRAVELLUX"
          desc="Travellux is our take on a digital travel journals where travellers could share their personal travel experiences. They could also like and commend on their friend post and travel location."
        />
        <Section className="flex-col -mt-[90px] xl:-mt-0">
          <div className="w-full aspect-[0.501] relative">
            <Image
              src="/website/travellux/collection.png"
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
