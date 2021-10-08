import Image from "next/image";

function DesignChallenge() {
  return (
    <div className="pt-14 flex flex-col">
      <div className="bg-workico1 w-full p-5 sm:py-10 md:pb-20 sm:px-10 md:px-14 lg:px-20 flex justify-center items-center">
        <div className="md:px-14 lg:px-20 md:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl flex flex-col items-center justify-center gap-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl xl:text-5xl font-bold py-7">
              Redefining Landing Page
            </h1>
            <p className="text-textSecondary">
              Landing Page is a web page that consumer can land on, but in the
              marketing realm, it’s usually a stand alone page that serves a
              single and focused purpose. That’s why in this challege we tried
              to create a stand alone landing page in our own creative way.{" "}
            </p>
          </div>
          <div className="relative w-80 h-1000 sm:w-96 sm:h-1280 md:w-140 md:h-2000 xl:w-800 xl:h-3000 2xl:w-1000 2xl:h-3200">
            <Image
              className="z-0 object-contain"
              src="/betunicahome.png"
              alt="redefining landing page image"
              layout="fill"
            />
          </div>
        </div>
      </div>
      <div className="bg-workico2 w-full p-5 sm:px-10 md:px-14 lg:px-20 flex justify-center items-center">
        <div className="md:px-14 lg:px-20 md:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl flex flex-col items-center justify-center gap-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl xl:text-5xl font-bold py-7">
              Mobile Design Challenge
            </h1>
            <p className="text-textSecondary">
              The customer field for mobile devices is constantly increasing
              worldwilde and becoming more popular. In this challenge we create
              a responsive mobile design to your product, so customer on any
              platform can access your digital product.{" "}
            </p>
          </div>
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-140 md:h-140 xl:w-1000 xl:h-1000 2xl:w-1280 2xl:h-1280">
            <Image
              className="z-0 object-contain"
              src="/gallery3.png"
              alt="redefining landing page image"
              layout="fill"
            />
          </div>
        </div>
      </div>
      <div className="bg-galleryPink w-full p-5 sm:px-10 md:px-14 lg:px-20 flex justify-center items-center">
        <div className="md:px-14 lg:px-20 md:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl flex flex-col items-center justify-center gap-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl xl:text-5xl font-bold py-7">
              Full Web Design Challenge
            </h1>
            <p className="text-textSecondary">
              Good web design sells and first web impression are 94% design
              related. It impact how your audience perceives your brand . In
              this challenge we want to show case one of our full web design
              that we created.{" "}
            </p>
          </div>
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-140 md:h-140 xl:w-1000 xl:h-1000 2xl:w-1280 2xl:h-1280">
            <Image
              className="z-0 object-contain"
              src="/gallery4.png"
              alt="redefining landing page image"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesignChallenge;
