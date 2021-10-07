import Image from "next/image";

function UiuxResearch() {
  return (
    <div className="py-14 flex flex-col">
      <div className="w-full p-5 sm:px-10 md:px-14 lg:px-20 flex justify-center items-center">
        <div>
          <h1 className="text-center text-4xl xl:text-5xl font-bold py-7">
            Coming Soon
          </h1>
          <div className="relative w-60 h-28 sm:w-80 sm:h-40 2xl:w-96 2xl:h-48">
            <Image
              className="z-0 object-contain"
              src="/hero.png"
              alt="hero-image"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UiuxResearch;
