import Image from "next/image";
import BigPicture from "../../../components/BigPicture";
import Header from "../../../components/Header";
import Layout from "../../../components/Layout";
import PictCaption from "../../../components/PictCaption";
import Section from "../../../components/Section";

export default function GaleriKeramik() {
  return (
    <>
      <Header />
      <Layout>
        <BigPicture
          imgSrc="/website/galeri-keramik/big.png"
          title="GALERI KERAMIK"
          desc="Designing website from scratch, bringin together Galeri Keramik different product categories, services, and contact info into an unified website experiences"
          link="https://galerikeramik.com"
        />
        <Section className="flex-col -mt-[90px]">
          <PictCaption
            bigImg="/website/galeri-keramik/bigImg.png"
            title="DESIGN GUIDELINES"
            desc="These are sets of recommendation on how to apply our design principles to enforce consistent and positive user experiences throughout Galeri Keramik website."
            className="w-full aspect-[0.434]"
          />
        </Section>
        <div className="w-full aspect-[1.953] relative -mt-[150px]">
          <Image
            src="/website/galeri-keramik/collection1.png"
            fill
            className="object-cover"
            alt="collection"
          />
        </div>
        <Section className="flex-col flex gap-[20px] xl:gap-[70px] -mt-[100px] xl:-mt-0">
          <div className="w-full aspect-[1.792] relative bg-gray-300 ">
            <Image
              src="/website/galeri-keramik/collection2.png"
              fill
              className="object-cover"
              alt="collection"
            />
          </div>
          <div className="w-full aspect-[1.792] relative bg-gray-300 ">
            <Image
              src="/website/galeri-keramik/collection3.png"
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
