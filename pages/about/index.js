import { motion } from "framer-motion";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import Circles from "../../components/Circles";
import { RichTextComponents } from "../../components/RichTextComponents";
import { sanitizeString } from "../../utils/utils";
import { fadeIn } from "../../variants";
import { fetchAboutData } from "../../data/sanity-data-fetch";

export async function getServerSideProps() {
  const { heading, description, image, redWords } = await fetchAboutData();
  return {
    props: {
      heading,
      description,
      image,
      redWords,
    },
  };
}

const About = ({ heading, description, image, redWords }) => {
  const renderHeading = () => {
    const sanitizedHeading = sanitizeString(heading);
    return sanitizedHeading.split(" ").map((word, index) => {
      const redWordsInLowerCase = redWords.map((word) =>
        sanitizeString(word).toLowerCase()
      );
      const isRedWord = redWordsInLowerCase.includes(word.toLowerCase());
      return (
        <span key={index} className={isRedWord ? "text-accent" : ""}>
          {word}
          {index !== heading.split(" ").length - 1 && " "}
        </span>
      );
    });
  };

  return (
    <div className="h-full py-32 text-center bg-black md:bg-primary/30 xl:text-left">
      <Circles className="absolute -right-16 -bottom-2 mix-blend-color-dodge" />
      <div className="container flex flex-col items-center h-full mx-auto gap-x-6">
        <div className="flex flex-col items-center justify-center flex-1 gap-4 md:gap-6">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-center h2"
          >
            {renderHeading()}
            <span className="text-accent">.</span>
          </motion.h2>
          <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
            <div className="rounded w-[400px] h-full">
              <Image
                src={image ? sanitizeString(image) : "/camera-purple.jpg"}
                alt="About"
                className="object-contain rounded-lg"
                width={400}
                height={300}
                priority={true}
              />
            </div>
            <div className="flex flex-col flex-1 px-4 mb-24 space-y-8 md:px-0">
              <div className="flex flex-col space-y-2 text-center md:text-left">
                <PortableText
                  value={description}
                  components={RichTextComponents}
                />
              </div>
              <div className="">
                <Link
                  href="/contact"
                  className="px-4 py-3 text-base font-semibold text-white transition-all duration-300 rounded-md bg-gradient-to-r from-cyan-800 to-purple-800 hover:from-purple-900 hover:to-purple-800 hover:shadow-xl"
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full xl:max-w-[48%] h-[480px]"></div>
      </div>
    </div>
  );
};

export default About;
