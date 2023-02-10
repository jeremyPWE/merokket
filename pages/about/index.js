import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Section from "../../components/Section";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Header />
      <Layout>
        <Section className="pt-[50px] xl:pt-[100px] flex-col md:gap-[20px] xl:gap-[50px]">
          <div className="flex flex-col xl:flex-row justify-between w-full">
            <Link href="/">
              <div className="flex items-center">
                <svg
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[16px] h-[16px] xl:w-[24px] xl:h-[24px] md:mt-[4px] mr-[5px]"
                >
                  <path
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <p className="xl:text-[24px]"> BACK TO HOME</p>
              </div>
            </Link>
            <div className="xl:w-[940px] mr-[15px] pt-[40px] pb-[10px] xl:pt-0 md:pb-0">
              <h2>
                Elevate your brand by creating an impending waves of changes.
              </h2>
            </div>
          </div>
          <div>
            <video playsInline loop autoPlay muted>
              <source src="/vid/370kb.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="flex justify-between w-full pt-[15px] md:pt-0">
            <div className="hidden xl:flex w-1/4" />
            <div className="xl:w-[940px] mr-[15px] flex flex-col">
              <h4 className="font-medium pb-[10px] md:pb-[25px] xl:pr-[70px]">
                One team, many talents. Our dedicated and skilled professionals
                will work closely with you to bring your brand to life, bridging
                the gap between vision and execution.
              </h4>
              <p className="xl:pr-[70px] 2xl:text-[24px]">
                Design and logo are just the first impression of your business.
                Elevate your brand value by investing in good branding and
                design. Give life to your brand by crafting a compelling story.
                <br />
                <br />
                At the core of our online experiences, we always put the user
                first. We use a data-driven approach to make informed decisions
                and deliver results that matter.
              </p>
            </div>
          </div>
        </Section>
      </Layout>
    </>
  );
}
