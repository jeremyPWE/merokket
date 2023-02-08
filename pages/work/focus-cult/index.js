import Image from "next/image";
import BigPicture from "../../../components/BigPicture";
import Header from "../../../components/Header";
import Layout from "../../../components/Layout";
import PictCaption from "../../../components/PictCaption";
import Section from "../../../components/Section";

export default function FocusCult() {
  return (
    <>
      <Header />
      <Layout>
        <BigPicture
          imgSrc="/website/focus-cult/big.png"
          title="FOCUS CULT"
          desc="Focus cult is an initiative answer to lessen the impact of smarphone addiction by making its user close down the phone and record their choosen activity. "
        />
        <Section className="flex-col">
          <PictCaption
            title="PROBLEM CONTEXT"
            desc="In this digital era people are much empowered by convinience. Mobilephone are part of our everyday life, it&lsquo;s undeniable that smartphone has aid our daily activity tremendously. With it&lsquo;s good trait it also come with some bad trait to our daily life. This dependency on smartphone would soon turned into a smartphone addiction, that bring negative impact to our daily life. It&lsquo;s proneness to disrupt both sleep and daily productivity."
          />
          <PictCaption
            bigImg="/website/focus-cult/bigImg1.png"
            title="DESIGN PROCESS"
            desc="To find and formulate the solution, we used double diamond design approach throughout the process to find the solution."
            className="w-full aspect-[1.842] bg-[#141414]"
          />
          <PictCaption
            bigImg="/website/focus-cult/bigImg2.png"
            title="USER RESEARCH"
            desc="I conducted interviews on 15 participants and created empathy maps to understand the user that I designing for and their needs. There are 3 user groups that can be identified from this interviews."
            className="w-full aspect-[4.545] bg-[#141414]"
          />
          <PictCaption
            bigImg="/website/focus-cult/bigImg3.png"
            title="USER PERSONA"
            desc="Based on the user group that I sorted out from the interviewers, I start to build a persona that could represent the common need of the potential users that the platform would base to buid on."
            className="w-full aspect-[0.995] bg-[#141414]"
          />
          <PictCaption
            bigImg="/website/focus-cult/bigImg4.png"
            title="PRODUCT VALUE"
            desc="By synthesizing all the data from user research, insight are generated, groupe, and prioritized. As a result, value propositions for Focus Cult are established."
            className="w-full aspect-[1.692] bg-[#141414]"
          />
          <PictCaption
            bigImg="/website/focus-cult/bigImg5.png"
            title="MAIN USER FLOW"
            className="w-full aspect-[4.120] bg-[#141414]"
          />
          <PictCaption
            bigImg="/website/focus-cult/bigImg6.png"
            title="WIREFRAMES"
            desc="Taking the time to draft iterations of each screens of the app on paper ensured that the element that made it to digital wireframe would be well suited addressing to the user pain points. I prioritized a quick menu load out to streamline the process and esay waty to acces the status overview to help the user."
            className="w-full aspect-[1.767] bg-[#141414]"
          />
          <PictCaption
            bigImg="/website/focus-cult/bigImg7.png"
            title="AFFINITY DIAGRAM"
            desc="I synthesized the data from the previous studies and started categorizing to generate insight and finding the common themes."
            className="w-full aspect-[1.050] bg-[#141414]"
          />
          <PictCaption
            bigImg="/website/focus-cult/bigImg8.png"
            title="High Fidelity Mockups"
            desc="High Fidelity Mockups also known as visual design are the final design element of the process. These design represent how the app finally looks like after developed."
            className="w-full aspect-[1.524] bg-[#141414]"
          />
          <PictCaption
            bigImg="/website/focus-cult/bigImg9.png"
            title="Typography & Colours"
            className="w-full aspect-[0.419] bg-[#141414]"
          />
          <PictCaption
            bigImg="/website/focus-cult/bigImg10.png"
            title="GRID SYSTEM"
            className="w-full aspect-[1.203] bg-[#141414]"
          />
          <PictCaption
            bigImg="/website/focus-cult/bigImg11.png"
            title="ILLUSTRATION"
            className="w-full aspect-[1.145] bg-[#141414]"
          />
          <PictCaption
            bigImg="/website/focus-cult/bigImg12.png"
            title="Light & Dark Mode"
            desc="A dedicated nightmode dashboard for more enjoyable user experiences. From main menu, home, setting, history, summoning pool and achievement."
            className="w-full aspect-[1.405] bg-[#141414]"
          />
        </Section>
        <div className="flex flex-col w-full -mt-[120px] px-[5px] lg:px-[20px]">
          <div className="w-full aspect-[1.156] relative">
            <Image
              src="/website/focus-cult/collection.png"
              fill
              className="object-cover"
              alt="collection"
            />
          </div>
        </div>
      </Layout>
    </>
  );
}
