/* This example requires Tailwind CSS v2.0+ */
import Image from "next/image";
import About from "./about";
import Slider from "./slider";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Banner() {
  return (
      <div className="relative">
        <div className="absolute inset-x-0 bottom-0 h-1/2" />
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <Slider />
        </div>
      </div>
  );
}
