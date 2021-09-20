import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Merokket.id</title>
        <meta
          name="description"
          content="we are a group of web developers and UI/UX designers"
        />
        <link rel="icon" href="/icon.png" />
      </Head>
      <nav>
        <h2 className="p-5 xl:pl-10 xl:text-lg font-sans">Merokket.id</h2>
      </nav>
      <main className="flex flex-col items-center p-20 xl:p-40 xl:text-center">
        <div>
          <h2 className="text-xl xl:text-4xl font-semibold mb-2">
            Under Construction
          </h2>
          <p className="xl:text-base">
            for any inquiries, please send an email to:{" "}
            <a href="mailto:jpwijanto@merokket.id">jpwijanto@merokket.id</a>
          </p>
        </div>
        <div className="w-64 h-64 xl:w-96 xl:h-96 relative">
          <Image
            className="z-0 object-contain"
            src="/hero.png"
            alt="hero-image"
            layout="fill"
          />
        </div>
      </main>
    </div>
  );
}
