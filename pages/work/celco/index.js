import Image from "next/image";
import BigPicture from "../../../components/BigPicture";
import Header from "../../../components/Header";
import Layout from "../../../components/Layout";
import Section from "../../../components/Section";

export default function Celco() {
  return (
    <>
      <Header />
      <Layout>
        <BigPicture
          imgSrc="/website/celco/big.png"
          title="CELCO"
          desc="Celco Indonesia is a leading brand that processes the best quality of coconut products in the form of charcoal briquettes in Indonesia. Celco Indonesia operates under CV Sulawesi Agung Makmur Bersama and is supported by the Provincial Government of South Sulawesi as well as Bank Indonesia to develop and enhance the export potentials of coconut products from Sulawesi Island."
          link="https://celcoid.com"
        />
        <Section className="flex-col -mt-[90px] xl:-mt-0">
          <div className="w-full aspect-[0.384] relative bg-gray-300">
            <Image
              src="/website/celco/collection.png"
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