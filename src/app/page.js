import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-6xl font-bold tracking-tight text-center text-gray-900 dark:text-white sm:text-left">
          {/* write about me  */}
          Hi, I am <span className="text-blue-600">Amirul</span> . I am a
          software engineer and a designer. I love to build things that people
          love. I&apos;m currently working on{" "}
        </h1>
      </main>
    </div>
  );
}
