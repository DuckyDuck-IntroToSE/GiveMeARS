"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-10 md:pt-10 xl:pb-25 xl:pt-10">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
              🎓 Give me a reason why can't IT course be free ?
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                Free IT courses for everyone
              </h1>
              <p>
                Welcome to GIVEMEARs, the website that offers free IT courses for everyone. 
                Whether you are a beginner or an expert, you will find something that suits your needs and interests. 
                You can learn about programming, web development, data science, cybersecurity, and more. 
                All you need is a computer and an internet connection. 
                Join us today and start your IT journey.
              </p>

              <div className="mt-5">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    <button
                      aria-label="get started button"
                      className="flex rounded-full border border-stroke bg-black px-2.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho "
                    >
                      Get Started
                    </button>
                  </div>
                </form>

              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className=" relative aspect-[700/444] w-full">
                  <Image
                    className="shadow-solid-l dark:hidden"
                    src="/images/cover/cover-02.svg"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden shadow-solid-l dark:block"
                    src="/images/cover/cover-02.svg"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
