import Image from "next/image";
import BigPicture from "../../../components/BigPicture";
import Header from "../../../components/Header";
import Layout from "../../../components/Layout";
import Section from "../../../components/Section";

export default function APlus() {
  return (
    <>
      <Header />
      <Layout>
        <BigPicture
          imgSrc="/website/a-plus/big.png"
          title="A-PLUS"
          desc="A landing page is a web page that consumers can land on, but in the marketing realm, it&lsquo;s usually a stand-alone page that serves a single, focused purpose. That&lsquo;s why, in this challenge, we tried to create a stand-alone landing page in our own creative way."
        />
        <Section className="flex-col -mt-[90px] xl:-mt-0">
          <div className="w-full aspect-[0.519] relative bg-gray-300">
            <Image
              src="/website/a-plus/collection.png"
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
