import Image from "next/image";
import BigPicture from "../../../components/BigPicture";
import Header from "../../../components/Header";
import Layout from "../../../components/Layout";
import PictCaption from "../../../components/PictCaption";
import Section from "../../../components/Section";

export default function MorningRooster() {
  return (
    <>
      <Header />
      <Layout>
        <BigPicture
          imgSrc="/branding/morning-rooster/big.png"
          title="MORNING ROOSTER"
          desc="Morning Rooster is a small roastery, where it intends to expand their business by selling a high quality coffee beans and coffee drip product. My role was to help developing a visual identity that could be notice in an already competitive region, through wich it could express it&lsquo;s commitment to it&lsquo;s customer and specialized supplier."
        />
        <Section className="flex-col -mt-[90px] xl:-mt-0">
          <PictCaption
            smallImg="/branding/morning-rooster/smallImg.png"
            title="BRAND & LOGO CONCEPT"
            desc="The name “Morning Rooster” indicates, a journet of quick and meaningful morning routine experiences. Providing a high quality quick to brew coffee drip for their target audiences that likes to drink coffee in the morning, but don&lsquo;t have much time to brew their own coffee."
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
