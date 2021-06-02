/* This example requires Tailwind CSS v2.0+ */
import Image from "next/image";
import About from "./about";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Banner() {
  return (
        <div className="relative">
          <div className="absolute inset-x-0 bottom-1/2 h-1/2 bg-white" />
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
              <div className="absolute inset-0">
                <img
                  className="w-full object-cover"
                  src="/images/top/home1.png"
                  alt="people participate in car driving experiment"
                />
                <div className="absolute inset-0 bg-gray-400 mix-blend-multiply" />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <Image
                    className="block lg:hidden h-8 w-auto"
                    src="/playful.svg"
                    height="80"
                    width="auto"
                    alt="Playful Laboratory Logo"
                  />
                  <span className="block text-yellow-500">Playful</span>
                  <span className="block text-white">Laboratory</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
  );
}
