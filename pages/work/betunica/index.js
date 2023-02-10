import Image from "next/image";
import BigPicture from "../../../components/BigPicture";
import Header from "../../../components/Header";
import Layout from "../../../components/Layout";
import PictCaption from "../../../components/PictCaption";
import Section from "../../../components/Section";

export default function Betunica() {
  return (
    <>
      <Header />
      <Layout>
        <BigPicture
          imgSrc="/website/betunica/big.png"
          title="BETUNICA"
          desc="Betunica is our take on creating a landing page for an outdoor fine dining restaurant based in Bali, Indonesia. We make sure to use design that would stand out in it&lsquo;s creative way."
        />
        <Section className="flex-col -mt-[90px] xl:-mt-0">
          <PictCaption
            smallImg="/website/betunica/smallImg.png"
            title="REDIFINING LANDING PAGE"
            desc="A landing page is a web page that consumers can land on, but in the marketing realm, it&lsquo;s usually a stand-alone page that serves a single, focused purpose. That&lsquo;s why, in this challenge, we tried to create a stand-alone landing page in our own creative way."
          />

          <div className="w-full aspect-[0.286] relative bg-gray-300">
            <Image
              src="/website/betunica/collection.png"
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
