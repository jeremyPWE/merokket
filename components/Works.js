import Image from "next/dist/client/image";
import Link from "next/link";

const Works = () => {
  return (
    <div className="p-5 pt-14 sm:px-10 md:px-14 lg:px-20 flex flex-col items-center">
      <h2 className="text-center">Our Works</h2>
      <div className="flex flex-col py-5 xl:py-10 gap-5 xl:gap-8 w-full md:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl">
        <Link href="/our-works?category=design-challenge" passHref>
          <div className="bg-workico1 rounded-xl py-5 xl:pt-10 shadow-md hover:shadow-2xl hover:p-14 hover:pb-5 transition-all duration-200 ease-out xl:grid xl:grid-cols-3 xl:justify-center px-5 xl:px-14 cursor-pointer">
            <div className="text-center xl:text-left xl:flex xl:flex-col justify-center gap-2">
              <h3>Redefining landing page</h3>
              <p>The first thing your consumer sees.</p>
              <div className="hidden xl:flex gap-3 pt-5 justify-start">
                <p className="p-2 ring-1 ring-textPrimary rounded-lg">
                  UI/UX design
                </p>
                <p className="p-2 ring-1 ring-textPrimary rounded-lg">
                  Design challenge
                </p>
              </div>
            </div>
            <div className="py-5 flex xl:-mb-5 justify-center xl:col-span-2">
              <div className="relative w-72 h-48 xl:w-102 xl:h-96 2xl:w-112 2xl:h-98 xl:-mb-5">
                <Image
                  className="z-0 object-fill"
                  src="/work-ico1.png"
                  alt="our works image 1"
                  layout="fill"
                />
                <div className="w-72 h-48 xl:w-102 xl:h-80 2xl:w-112 2xl:h-88 rounded-t-xl shadow-xl xl:shadow-2xl" />
              </div>
            </div>
            <div className="flex flex-wrap gap-3 justify-center xl:hidden">
              <p className="p-2 ring-1 ring-textPrimary rounded-lg">
                UI/UX design
              </p>
              <p className="p-2 ring-1 ring-textPrimary rounded-lg">
                Design challenge
              </p>
            </div>
          </div>
        </Link>
        <Link href="/our-works?category=design-challenge" passHref>
          <div className="bg-workico2 rounded-xl py-5 xl:pt-10 shadow-md hover:shadow-2xl hover:p-14 hover:pb-5 transition-all duration-200 ease-out xl:grid xl:grid-cols-3 xl:justify-center px-5 xl:px-14 cursor-pointer">
            <div className="text-center xl:text-left xl:flex xl:flex-col justify-center gap-2">
              <h3>Mobile design challenge</h3>
              <p>
                So your customer on any platform can access your digital
                product.
              </p>
              <div className="hidden xl:flex flex-wrap gap-3 pt-5 justify-start">
                <p className="p-2 ring-1 ring-textPrimary rounded-lg">
                  UI/UX design
                </p>
                <p className="p-2 ring-1 ring-textPrimary rounded-lg">
                  Mobile design
                </p>
                <p className="p-2 ring-1 ring-textPrimary rounded-lg">
                  Design challenge
                </p>
              </div>
            </div>
            <div className="p-5 flex xl:hidden justify-center">
              <div className="relative w-72 h-48">
                <Image
                  className="z-0 object-contain"
                  src="/work-ico2.png"
                  alt="our works image 2"
                  layout="fill"
                />
              </div>
            </div>
            <div className="p-5 xl:p-0 hidden xl:flex xl:col-span-2 justify-center xl:-mb-5">
              <div className="relative xl:w-102 xl:h-96 2xl:w-112 2xl:h-98">
                <Image
                  className="z-0 object-contain"
                  src="/work-ico2.png"
                  alt="our works image 2"
                  layout="fill"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-3 justify-center xl:hidden">
              <p className="p-2 ring-1 ring-textPrimary rounded-lg">
                UI/UX design
              </p>
              <p className="p-2 ring-1 ring-textPrimary rounded-lg">
                Mobile design
              </p>
              <p className="p-2 ring-1 ring-textPrimary rounded-lg">
                Design challenge
              </p>
            </div>
          </div>
        </Link>
        <Link href="/our-works?category=recent-project" passHref>
          <div className="bg-workico3 rounded-xl py-5 xl:pt-10 shadow-md hover:shadow-2xl hover:p-14 hover:pb-5 transition-all duration-200 ease-out xl:grid xl:grid-cols-3 xl:justify-center px-5 xl:px-14 cursor-pointer">
            <div className="text-center xl:text-left xl:flex xl:flex-col justify-center gap-2">
              <h3>Full web design challenge</h3>
              <p>
                Good design sells and first web impression are 94% design
                related.
              </p>
              <div className="hidden xl:flex flex-wrap gap-3 pt-5 justify-start">
                <p className="p-2 ring-1 ring-textPrimary rounded-lg">
                  UI/UX design
                </p>
                <p className="p-2 ring-1 ring-textPrimary rounded-lg">
                  Branding
                </p>
                <p className="p-2 ring-1 ring-textPrimary rounded-lg">
                  Design challenge
                </p>
              </div>
            </div>
            <div className="p-5 flex xl:col-span-2 justify-center xl:-mb-5">
              <div className="relative w-72 h-48 xl:w-102 xl:h-96 2xl:w-112 2xl:h-98 xl:-mb-5">
                <Image
                  className="z-0 object-fill"
                  src="/work-ico3.png"
                  alt="our works image 3"
                  layout="fill"
                />
                <div className="w-72 h-48 xl:w-102 xl:h-96 2xl:w-112 2xl:h-98 rounded-t-xl shadow-xl xl:shadow-2xl" />
              </div>
            </div>
            <div className="xl:hidden flex flex-wrap gap-3 justify-center">
              <p className="p-2 ring-1 ring-textPrimary rounded-lg">
                UI/UX design
              </p>
              <p className="p-2 ring-1 ring-textPrimary rounded-lg">Branding</p>
              <p className="p-2 ring-1 ring-textPrimary rounded-lg">
                Design challenge
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Works;
