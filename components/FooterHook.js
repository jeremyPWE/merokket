import Image from "next/image";

function FooterHook({ toggleC }) {
  return (
    <div className="px-5 py-14">
      <h2 className="text-center pb-5">Start your project with us.</h2>
      <div className="pb-8 flex justify-center">
        <button
          type="button"
          className="inline-flex justify-center py-3 px-10 md:px-14 hover:font-semibold hover:shadow-xl animate-all duration-200 ease-out border border-transparent shadow text-base font-medium rounded-2xl text-white bg-textPrimary"
          onClick={toggleC}
        >
          Contact us
        </button>
      </div>
      <div className="flex justify-center -mt-10 px-5">
        <div className="relative w-80 h-36 md:w-96 md:h-48">
          <Image
            className="z-0 object-contain"
            src="/footer-illus.png"
            alt="services illutstration 1"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
}

export default FooterHook;
