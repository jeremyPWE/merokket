import Image from "next/image";
import BigPicture from "../../../components/BigPicture";
import Header from "../../../components/Header";
import Layout from "../../../components/Layout";
import PictCaption from "../../../components/PictCaption";
import Section from "../../../components/Section";

export default function GateKeeping() {
  return (
    <>
      <Header />
      <Layout>
        <BigPicture
          imgSrc="/website/gate-keeping/big.png"
          title="GATE KEEPING"
          desc="This section is our take on how art gallery should adapt during pandemic, and that adaptation is to utilize online platform to make sure that people could visit or see the art on their offline gallery."
        />
        <Section className="flex-col -mt-[90px] xl:-mt-0">
          <PictCaption
            smallImg="/website/gate-keeping/smallImg.png"
            title="A CURRATED ONLINE GALLERY"
            desc="Delivering a new experience for people that long to visit the online gallery during the pandemic"
          />
          <PictCaption
            bigImg="/website/gate-keeping/bigImg.png"
            title="WIDE RANGE OPTION FOR GLOBAL AUDIENCE"
            desc="We focused on creating an online platform gallery that would act as a one-stop online gallery for all your art needs. We made sure our design had all the wide range option choosing the art that you want to see online. "
            className="w-full aspect-[0.445]"
          />
        </Section>
        <div className="w-full aspect-[0.948] relative -mt-[140px] xl:-mt-0">
          <Image
            src="/website/gate-keeping/collection.png"
            fill
            className="object-cover"
            alt="collection"
          />
        </div>
      </Layout>
    </>
  );
}
