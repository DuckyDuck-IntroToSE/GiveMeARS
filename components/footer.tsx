"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import NextLink from "next/link";
import { Logo } from "@/components/icons";


const Footer = () => {
  return (
    <div>
      <footer className="border-t border-stroke dark:border-strokedark dark:bg-blacksection">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* <!-- Footer Top --> */}
          <div className="py-20 lg:py-25">
            <div className="flex gap-10 lg:justify-between lg:gap-4">
              <motion.div variants={{ hidden: { opacity: 0, y: -20, }, visible: { opacity: 1, y: 0, }, }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="animate_top md:w-1/3"
              >
                <NextLink className="flex justify-start items-center gap-1" href="/">
                  <p className="font-bold text-inherit text-2xl">GIVEMEARs</p>
                </NextLink>

                <p className="mb-10 mt-5">
                  GIVEMEARs is a website for sharing and learning IT courses. 
                </p>

                <a
                  href="#"
                  className="text-itemtitle font-medium text-black dark:text-white"
                >
                  givemears@outlook.com
                </a>
              </motion.div>

              <motion.div variants={{ hidden: { opacity: 0, y: -20, }, visible: { opacity: 1, y: 0, }, }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top md:w-1/3"
                >
                  <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                    Quick Links
                  </h4>

                  <ul>
                    <li>
                      <a
                        href="#"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="/about"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Categories
                      </a>
                    </li>
                  </ul>
                </motion.div>

                <motion.div variants={{ hidden: { opacity: 0, y: -20, }, visible: { opacity: 1, y: 0, }, }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top md:w-1/3"
                >
                  <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                    Note:
                  </h4>
                  <p className="mb-4 w-[90%]">
                    This website is a project for the course Introduction to Software Engineering at the University of Science, Ho Chi Minh National Univerisity.
                  </p>
                  <p className="mb-4 w-[90%]">
                    The website is not for commercial purposes.
                  </p>
                </motion.div>
            
            </div>
          </div>
          {/* <!-- Footer Top --> */}

          {/* <!-- Footer Bottom --> */}
          <div className="flex items-center justify-center gap-5 border-t border-stroke py-7 dark:border-strokedark">
            <motion.div variants={{ hidden: { opacity: 0, y: -20, }, visible: { opacity: 1, y: 0, }, }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <p>
                &copy; {new Date().getFullYear()} GIVEMEARs. All rights reserved
              </p>
            </motion.div>

      
          </div>
          {/* <!-- Footer Bottom --> */}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
