import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Section from "../../components/Section";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const services = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-[20px] lg:gap-0 justify-around w-full">
      <Link
        href={{ pathname: "/work", query: { type: "website" } }}
        className="md:w-1/2"
      >
        <div className="flex flex-col items-center pt-[15px] pb-[50px] ">
          <h1>WEBSITES</h1>
          <p className="hidden lg:flex w-[320px] text-center xl:text-left xl:w-[476px] pt-[50px]">
            By combining strategy, design, and technology we enable brands to
            share their story and connect with their customers
          </p>
          <div className="flex pt-[20px] xl:pt-[50px]">
            <div className="2xl:w-[368px] lg:h-[231px] relative">
              <Image
                src="/website/icon/al.png"
                fill
                className="object-contain"
                alt=""
              />
            </div>
            <div className="w-[280px] md:w-[300px] xl:w-[368px] aspect-[1.593] relative">
              <Image
                src="/website/icon/betu.png"
                fill
                className="object-contain"
                alt=""
              />
            </div>
          </div>
          <p className="lg:hidden w-[280px] pt-[10px] text-center border-b md:border-0 md:pb-0 pb-[40px]">
            By combining strategy, design, and technology we enable brands to
            share their story and connect with their customers
          </p>
        </div>
      </Link>
      <div className="w-[1px] bg-white" />
      <Link
        href={{ pathname: "/work", query: { type: "branding" } }}
        className="lg:w-1/2"
      >
        <div className="flex flex-col items-center pt-[15px] pb-[50px]">
          <h1>BRANDING</h1>
          <p className="hidden lg:flex w-[320px] text-center xl:text-left xl:w-[476px] pt-[50px]">
            Turning your complex business idea into a design that will leave an
            impression on every future potential customer.
          </p>
          <div className="flex pt-[20px] lg:pt-[40px] xl:pt-[50px]">
            <div className="w-[280px] md:w-[300px] xl:w-[368px] 2xl:w-[512px] aspect-[1.593] 2xl:aspect-[2.216] relative">
              <Image
                src="/branding/icon/mr.png"
                fill
                className="object-cover"
                alt=""
              />
            </div>
          </div>
          <p className="lg:hidden w-[280px] pt-[10px] text-center">
            Turning your complex business idea into a design that will leave an
            impression on every future potential customer.
          </p>
        </div>
      </Link>
    </div>
  );
};

const allProject = () => {
  const all = brandingData.content.concat(websiteData.content);
  return (
    <div className="flex flex-col w-full">
      <h1>All Project</h1>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[30px] 2xl:gap-[50px] pt-[35px] lg:pt-[90px]">
        {all.map((item, index) => (
          <Link href={item.link} key={index}>
            <div className="">
              <div className="relative w-full 2xl:w-[728px] aspect-[1.596]">
                <Image
                  src={item.imgSrc}
                  fill
                  className="object-contain"
                  alt={`${item.imgTitle} image`}
                />
              </div>
              <div className="pt-[10px] lg:pt-[30px] 2xl:w-[624px]">
                <h1 className="pb-[5px] lg:pb-[20px]">{item.imgTitle}</h1>
                <p>{item.imgDesc}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const brandingData = {
  title: "Featured Branding",
  content: [
    {
      imgSrc: "/branding/icon/mr.png",
      imgTitle: "Morning Rooster",
      imgDesc:
        "Morning Rooster is a small roastery, where it intends to expand their businesses by selling a high quality coffee beans and coffee drip product.",
      link: "/work/morning-rooster",
    },
    {
      imgSrc: "/branding/icon/scru.png",
      imgTitle: "Scruffy",
      imgDesc:
        "Our first exploration with a goal to learn about brand & logo design. Scruffy is a brand that provide sustainable pet care product for your fur buddy.",
      link: "/work/scruffy",
    },
  ],
};

const websiteData = {
  title: "Featured Websites",
  content: [
    {
      imgSrc: "/website/icon/gk.png",
      imgTitle: "GALERI KERAMIK",
      imgDesc:
        "Bringing together Galeri Keramik different products category, sevices, contact into an unified website experience.",
      link: "/work/galeri-keramik",
    },
    {
      imgSrc: "/website/icon/cm.png",
      imgTitle: "COMPOSURE MAGAZINE",
      imgDesc:
        "We did a website redesign for Composure Magazine, an online magazine based in USA. Composure Magazine is a publication that celebrates current fashion and beauty trends, while showcasing the style and lives of celebrities.",
      link: "/work/composure-magazine",
    },
    {
      imgSrc: "/website/icon/fc.png",
      imgTitle: "FOCUS CULT",
      imgDesc:
        "Focus cult is an initiative answer to lessen the impact of smarphone addiction by making its user close down the phone and record their choosen activity. (UI/UX Research)",
      link: "/work/focus-cult",
    },
    {
      imgSrc: "/website/icon/al.png",
      imgTitle: "AVATERRA LIVING",
      imgDesc:
        "We teamed up with the people from Avaterra Living to design and create their first ever website. Avaterra living is a company with a mission and vision to promote the best handicrafts from local Indonesian artisans.",
      link: "/work/avaterra-living",
    },
    {
      imgSrc: "/website/icon/gate.png",
      imgTitle: "GATE KEEPING",
      imgDesc:
        "This section is our take on how art gallery should adapt during pandemic, and that adaptation is to utilize online platform to make sure that people could visit or see the art on their offline gallery. ",
      link: "/work/gate-keeping",
    },
    {
      imgSrc: "/website/icon/betu.png",
      imgTitle: "BETUNICA",
      imgDesc:
        "Creating fictional website for a luxury dinner type restaurant. We design everything from start to finish.(Logo, typography, color template, web design)",
      link: "/work/betunica",
    },
  ],
};

const featuredWork = (data) => {
  return (
    <div className="flex flex-col w-full">
      <h1>{data.title}</h1>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[30px] lg:gap-[50px] pt-[35px] lg:pt-[90px]">
        {data.content.map((item, index) => (
          <Link href={item.link} key={index}>
            <div className="">
              <div className="relative w-full 2xl:w-[728px] aspect-[1.596]">
                <Image
                  src={item.imgSrc}
                  fill
                  className="object-contain"
                  alt={`${item.imgTitle} image`}
                />
              </div>
              <div className="pt-[10px] lg:pt-[30px] 2xl:w-[624px]">
                <h1 className="pb-[5px] lg:pb-[20px]">{item.imgTitle}</h1>
                <p>{item.imgDesc}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default function Work() {
  const router = useRouter();
  const pathName = router.query;
  return (
    <>
      <Header />
      <Layout>
        <Section className="flex-col gap-[50px] pt-[30px] lg:pt-[90px] pb-[40px]">
          <div className="border-t border-b py-[10px] lg:py-[30px] border-white w-full">
            {pathName.type === "website" || pathName.type === "branding" ? (
              <div className="flex gap-[15px] lg:gap-[35px]">
                <Link
                  href={{ pathname: "/work", query: { type: "website" } }}
                  className={`${
                    pathName.type === "website" ? "font-bold border-b" : null
                  }`}
                >
                  <p>FEATURED WEBSITES </p>
                </Link>
                <Link
                  href={{ pathname: "/work", query: { type: "branding" } }}
                  className={`${
                    pathName.type === "branding" ? "font-bold border-b" : null
                  }`}
                >
                  <p>FEATURED BRANDING</p>
                </Link>
              </div>
            ) : (
              <div className="flex gap-[15px] lg:gap-[35px]">
                <Link
                  href={{ pathname: "/work", query: { type: "services" } }}
                  className={`${
                    pathName.type === "services" || !pathName.type
                      ? "font-bold border-b"
                      : null
                  }`}
                >
                  <p>SERVICES </p>
                </Link>
                <Link
                  href={{ pathname: "/work", query: { type: "all" } }}
                  className={`${
                    pathName.type === "all" ? "font-bold border-b" : null
                  }`}
                >
                  <p>ALL WORKS</p>
                </Link>
              </div>
            )}
          </div>
          {pathName.type === "website"
            ? featuredWork(websiteData)
            : pathName.type === "branding"
            ? featuredWork(brandingData)
            : pathName.type === "services"
            ? services()
            : pathName.type === "all"
            ? allProject()
            : services()}
        </Section>
      </Layout>
    </>
  );
}
