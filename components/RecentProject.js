import Image from "next/image";

function RecentProject() {
  return (
    <div className="pt-14 flex flex-col">
      <div className="bg-gray-200 w-full p-5 sm:px-10 md:px-14 lg:px-20 flex justify-center items-center py-7">
        <div className="md:px-14 lg:px-20 md:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl flex flex-col items-center justify-center gap-10">
          <div className="max-w-4xl xl:grid xl:grid-cols-3 items-center">
            <div>
              <h1 className="text-4xl xl:text-5xl font-bold pt-7 pb-3">
                Composure Magazine
              </h1>
              <p className="text-textSecondary text-lg">
                Visit{" "}
                <span>
                  <a
                    className="font-medium text-textPrimary"
                    href="https://composuremagazine.com"
                    target="_blank"
                  >
                    composure magazine
                  </a>
                </span>
              </p>
            </div>
            <p className="text-textSecondary pt-7 xl:col-span-2">
              We did a website redesign for Composure Magazine, an online
              magazine based in USA. Composure Magazine is a publication that
              celebrates current fashion and beauty trends, while showcasing the
              style and lives of celebrities.{" "}
            </p>
          </div>
          <div className="relative w-80 h-1400 sm:w-102 sm:h-2500 md:w-140 md:h-3200 xl:w-800 xl:h-4000">
            <Image
              className="z-0 object-contain"
              src="/composuremagazine.png"
              alt="composure magazine homepage"
              layout="fill"
            />
          </div>
        </div>
      </div>

      <div className="bg-workico3 w-full p-5 sm:px-10 md:px-14 lg:px-20 flex justify-center items-center py-7">
        <div className="md:px-14 lg:px-20 md:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl flex flex-col items-center justify-center gap-10">
          <div className="max-w-4xl xl:grid xl:grid-cols-3 items-center">
            <div>
              <h1 className="text-4xl xl:text-5xl font-bold pt-7 pb-3">
                Avaterra Living
              </h1>
              <p className="text-textSecondary">
                Visit{" "}
                <span>
                  <a
                    className="font-medium text-textPrimary"
                    href="https://avaterraliving.com"
                    target="_blank"
                  >
                    avaterra living
                  </a>
                </span>
              </p>
            </div>
            <p className="text-textSecondary pt-7 xl:col-span-2">
              We teamed up with the people from Avaterra Living to design and
              create their first ever website. Avaterra living is a company with
              a mission and vision to promote the best handicrafts from local
              Indonesian artisans.{" "}
            </p>
          </div>
          <div className="relative w-80 h-102 sm:w-102 sm:h-800 md:w-140 md:h-1000 xl:w-1280 xl:h-1280 ">
            <Image
              className="z-0 object-contain"
              src="/avaterrahome.png"
              alt="avaterra living homepage"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentProject;
