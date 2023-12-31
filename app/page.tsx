import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen bg-black">
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <Image
          width={900}
          height={355}
          src="/logo.png"
          alt="Platforms on Vercel"
        />
        <div className="text-center max-w-screen-sm mb-10">
          <h1 className="text-stone-200 font-bold text-2xl">
            Blockchain project homepage
          </h1>
          <p className="text-stone-400 mt-5">
            This is the homepage of our blockchain project. It is a static page meant to redirect you to the different parts of the app. The whole app is web-based and can be accessed from any device with a browser. It is supported by CI/CD and  deployed on Vercel.
          </p>
        </div>
        <div className="flex space-x-3">
          <Link
            href="/protected"
            prefetch={false} // workaround until https://github.com/vercel/vercel/pull/8978 is deployed
            className="text-stone-400 underline hover:text-stone-200 transition-all"
          >
            Login Page
          </Link>
          <p className="text-white">·</p>
          <a
            href="https://github.com/lcereser6/nextjs-postgres-auth-starter"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-400 underline hover:text-stone-200 transition-all"
          >
           GitHub website project folder
          </a>
          <p className="text-white">·</p>
          <a
            href="https://github.com/lcereser6/nextjs-postgres-auth-starter"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-400 underline hover:text-stone-200 transition-all"
          >
           GitHub smart contracts folder
          </a>
        </div>
      </div>
    </div>
  );
}
