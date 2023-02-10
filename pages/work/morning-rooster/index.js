import Image from "next/image";
import BigPicture from "../../../components/BigPicture";
import Header from "../../../components/Header";
import Layout from "../../../components/Layout";
import PictCaption from "../../../components/PictCaption";
import Section from "../../../components/Section";

export default function MorningRooster() {
  return (
    <>
      <Header
        title="Merokket | Showcasing Our Work and Services"
        description="Explore the stunning results of our previous work. See why Merokket is the top choice for expert design and development services"
      />
      <Layout>
        <BigPicture
          imgSrc="/branding/morning-rooster/big.png"
          title="MORNING ROOSTER"
          desc="Morning Rooster is a small roastery that intends to expand its business by selling high-quality coffee beans and coffee drip products. My role was to help develop a visual identity that could be noticed in an already competitive region, through which it could express its commitment to its customers and specialized suppliers."
        />
        <Section className="flex-col -mt-[90px] xl:-mt-0">
          <PictCaption
            smallImg="/branding/morning-rooster/smallImg.png"
            title="BRAND & LOGO CONCEPT"
            desc="The name &lqdquo;Morning Rooster&rdquo; indicates a journey of quick and meaningful morning routine experiences. They provide a high-quality, quick-brew coffee drip for their target audiences that like to drink coffee in the morning but don&lsquo;t have much time to brew their own coffee."
          />
          <PictCaption
            bigImg="/branding/morning-rooster/bigImg.png"
            title="HIGH QUALITY DIGITAL MOCKUP"
            className="w-3/4 aspect-[0.324] bg-[#141414]"
          />
          <div className="flex flex-col w-full 2xl:-mt-[50px]">
            <div className="w-full aspect-[1.501] relative bg-gray-300">
              <Image
                src="/branding/morning-rooster/collection1.png"
                fill
                className="object-cover"
                alt="collection"
              />
            </div>
            <div className="w-full aspect-[1.501] relative bg-gray-300">
              <Image
                src="/branding/morning-rooster/collection2.png"
                fill
                className="object-cover"
                alt="collection"
              />
            </div>
          </div>
        </Section>
      </Layout>
    </>
  );
}
