import Image from "next/image";
import BigPicture from "../../../components/BigPicture";
import Header from "../../../components/Header";
import Layout from "../../../components/Layout";
import PictCaption from "../../../components/PictCaption";
import Section from "../../../components/Section";

export default function ComposureMagazine() {
  return (
    <>
      <Header />
      <Layout>
        <BigPicture
          imgSrc="/website/composure-magazine/big.png"
          title="COMPOSURE"
          desc="Composure Magazine is a publication that celebrates current fashion and beauty trends while showcasing the styles and lives of celebrities."
          link="https://composuremagazine.com"
        />
        <Section className="flex-col -mt-[90px] xl:-mt-0">
          <PictCaption
            smallImg="/website/composure-magazine/smallImg.png"
            title="CONNECTING WITH TODAY GENERATION"
            desc="Featuring brands for everyone who has discerning sensibility for aspiration and modern life style. Through our research, we came to the conclusion that the redesign of composure needs to be able to connect with anyone who wants to improve their fashion or lifestyle."
          />
          <PictCaption
            bigImg="/website/composure-magazine/bigImg.png"
            title="DESIGN FOR EXPERIENCE"
            desc="Since Composure is a digital magazine, our approach for the re-design is to make it simple for the readers to navigate the site, explore categories, and find the magazine or article that they want to read."
            className="w-full aspect-[0.537]"
          />
        </Section>
        <div className="w-full bg-[#FFD6A6] flex flex-col items-center py-[50px] -mt-[140px] xl:-mt-0">
          <Section className="flex-col gap-[30px]">
            <div className="relative w-full aspect-[0.773]">
              <Image
                src="/website/composure-magazine/collection1.png"
                fill
                className="object-cover"
                alt="collection image"
              />
            </div>
            <div className="relative w-full aspect-[1.545]">
              <Image
                src="/website/composure-magazine/collection2.png"
                fill
                className="object-cover"
                alt="collection image"
              />
            </div>
            <div className="relative w-full aspect-[3.115] bg-gray-300">
              <Image
                src="/website/composure-magazine/collection3.png"
                fill
                className="object-cover"
                alt="collection image"
              />
            </div>
            <div className="relative w-full aspect-[3.115]">
              <Image
                src="/website/composure-magazine/collection4.png"
                fill
                className="object-cover"
                alt="collection image"
              />
            </div>
            <div className="relative w-full aspect-[1.568]">
              <Image
                src="/website/composure-magazine/collection5.png"
                fill
                className="object-cover"
                alt="collection image"
              />
            </div>
          </Section>
        </div>
      </Layout>
    </>
  );
}
