import Image from "next/image";

function Services() {
  return (
    <div
      className="p-5 sm:px-10 md:px-14 lg:px-20 xl:py-20 flex flex-col gap-10 justify-center items-center"
      id="services"
    >
      <div className="md:max-w-3xl xl:max-w-4xl 2xl:max-w-6xl">
        <div className="md:grid md:grid-cols-2 md:items-center">
          <div className="flex justify-center p-5 md:col-start-2">
            <div className="relative w-48 h-48 md:w-56 md:h-56 xl:w-72 xl:h-72">
              <Image
                className="z-0 object-contain"
                src="/services-1.png"
                alt="services illustration 1"
                layout="fill"
              />
            </div>
          </div>
          <div className="md:col-start-1 md:row-start-1">
            <h3 className="pb-2">
              Create an interactive and user friendly UI/UX
            </h3>
            <p>
              Sit down tight while we customize your online digital branding.
              Get your accurate user experience and personalized design.
            </p>
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 md:items-center">
          <div className="flex justify-center p-5">
            <div className="relative w-48 h-48 md:w-56 md:h-56 xl:w-72 xl:h-72">
              <Image
                className="z-0 object-contain"
                src="/services-2.png"
                alt="services illustration 2"
                layout="fill"
              />
            </div>
          </div>
          <div>
            <h3 className="pb-2">Your code does matter</h3>
            <p>
              Not only we try to give your business a digital advantage in
              design. We also provide a good robust quality code.
            </p>
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 md:items-center">
          <div className="flex justify-center p-5 md:col-start-2">
            <div className="relative w-64 h-48 md:w-72 md:h-56 xl:w-96 xl:h-72">
              <Image
                className="z-0 object-contain"
                src="/services-3.png"
                alt="services illustration 1"
                layout="fill"
              />
            </div>
          </div>
          <div className="md:col-start-1 md:row-start-1">
            <h3 className="pb-2">Beyond design and logo</h3>
            <p>
              Good branding increase the value of your business. Breath a life
              to your brand by giving it a good story telling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
