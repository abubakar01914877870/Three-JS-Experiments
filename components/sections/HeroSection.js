import { motion } from "framer-motion";
import Link from "next/link";
import {
  appendStateName,
  sanitizeString,
  transformWordsInString,
} from "../../utils/utils";
import { fadeIn } from "../../variants";

function HeroSection(props) {
  const { stateName, subHeading, contactRef, heading, redWords } = props;

  const renderHeading = () => {
    const sanitizedHeading = sanitizeString(heading);
    // const headingWithStateName = appendStateName(sanitizedHeading, stateName);
    // const stateNameWords =
    //   stateName !== null
    //     ? stateName.split(" ").map((word) => word.toLowerCase())
    //     : [];

    return sanitizedHeading.split(" ").map((word, index, arr) => {
      const wordInLowerCase = sanitizeString(word).toLowerCase();
      const redWordsInLowerCase = redWords.map((word) =>
        sanitizeString(word).toLowerCase()
      );

      const isRedWord = redWordsInLowerCase.includes(wordInLowerCase);

      // const isState = stateNameWords.includes(sanitizedWord);
      // const isRedWord = redWordsInLowerCase.includes(sanitizedWord) || isState;

      return (
        <span key={index} className={isRedWord ? "text-accent" : ""}>
          {word}
          {index !== arr.length - 1 && " "}
          {index === 1 && <br />}
        </span>
      );
    });
  };

  const renderTitleAndButtons = () => (
    <>
      <div className="flex flex-col w-full space-y-32 md:space-y-44 lg:flex-grow">
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="font-bold text-center text-white leading-tight tracking-tight md:tracking-wide text-[35px] md:text-[55px]"
        >
          {renderHeading()}
        </motion.h2>

        <div className="text-left sb-markdown sm:text-lg">
          <h3
            // variants={fadeIn("up", 0.2)}
            // initial="hidden"
            // animate="show"
            // exit="hidden"
            className="font-bold text-left text-shadow shadow-black md:shadow-transparent text-white text-[25px] leading-tight md:text-[45px] italic underline"
          >
            {transformWordsInString({
              str: appendStateName(sanitizeString(subHeading), stateName),
              stateName,
              redWords,
            })}
          </h3>
        </div>
      </div>

      <div
        // variants={fadeIn("left", 0.2)}
        // initial="hidden"
        // animate="show"
        // exit="hidden"
        className="flex flex-col flex-wrap items-start justify-start w-full gap-3 md:items-center md:flex-row lg:flex-nowrap"
      >
        {renderButtons()}
      </div>
    </>
  );

  // Render buttons
  const renderButtons = () => (
    <>
      <button
        aria-label="Contractors Insurance"
        id="Contractors Insurance"
        className="w-[240px] md:w-auto inline-flex items-center justify-center py-3 font-medium tracking-normal text-center text-white no-underline rounded-md transition-all duration-150 ease-in-out bg-[#125b9a] cursor-pointer hover:bg-[#18446a] px-7 text-transform-none"
        onClick={() => {
          contactRef.current.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        <span>Get My Quote Now</span>
      </button>

      <Link
        href="tel:713-589-4072"
        aria-label="Contractors Insurance"
        id="Contractors Insurances"
        className="w-[240px] md:w-auto inline-flex items-center justify-center py-3 font-medium tracking-normal text-center text-white no-underline transition-all duration-300 ease-in-out bg-[#125b9a] rounded-md cursor-pointer hover:bg-[#18446a] px-7 text-transform-none"
      >
        <span>
          Click to Call <br className="md:hidden" /> (713)-589-4072
        </span>
      </Link>
    </>
  );

  return (
    <div className="z-40 flex md:min-h-[50vh] mt-44 flex-col items-center justify-start md:justify-center max-w-screen-lg pl-4 pr-4 space-y-12 md:space-y-16 overflow-auto scrollbar-hide border-none">
      {stateName !== null && renderTitleAndButtons()}
    </div>
  );
}

export default HeroSection;
