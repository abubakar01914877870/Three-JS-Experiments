import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { fadeIn } from "../../variants";
import { fetchCareersData } from "../../data/sanity-data-fetch";

export async function getServerSideProps() {
  const posts = await fetchCareersData();
  return {
    props: {
      posts,
    },
  };
}

const Careers = ({ posts }) => {
  return (
    <div className="flex flex-col bg-primary/30 py-36">
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="flex flex-col items-center w-full gap-2"
      >
        <h1 className="text-purple-500 h2">We&apos;re growing fast</h1>
        <h3 className="h4">You should join us.</h3>
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="flex flex-col items-center py-12 border-none"
      >
        <div className="flex justify-center w-[80vw] md:h-[40vh] lg:h-[70vh] overflow-hidden">
          <Image
            src="/camera-purple.jpg"
            alt="Careers"
            className="object-cover rounded-lg"
            width={1000}
            height={600}
          />
        </div>
      </motion.div>
      <div className="relative flex flex-col justify-center min-h-0 px-10 pt-24 border-none pb-36">
        <div className="relative flex justify-center w-full">
          <div className="w-full max-w-screen-xl">
            <blockquote>
              <div className="mb-10 text-3xl text-center sm:text-4xl">
                <h2>
                  Being part of this team has been incredible. I always get the
                  feeling that I am geniunely helping people.
                </h2>
              </div>
              <footer>
                <span className="block mb-3 text-2xl text-center text-purple-500 sm:text-3xl">
                  Leslie Romnick
                </span>
                <span className="block text-lg mt-1.5 text-center text-slate-500">
                  Business Risk Advisor
                </span>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-12 pl-4 pr-4 border-none">
        <div className="flex flex-col items-center justify-center w-full gap-10 md:flex-row">
          <div className="w-[300px] md:w-[400px] overflow-hidden h-[500px] rounded-xl">
            <Image
              className="object-cover rounded-xl"
              src={"/career.webp"}
              alt="People in the meeting room"
              height={500}
              width={400}
            />
          </div>
          <div className="w-[300px] md:w-[400px] overflow-hidden h-[500px] rounded-xl">
            <Image
              className="object-cover rounded-xl"
              src={"/career-2.webp"}
              alt="People in the meeting room"
              height={500}
              width={400}
            />
          </div>
        </div>
      </div>
      <div className="px-8 py-16 md:py-32 md:px-32">
        <h4 className="text-3xl font-normal text-teal-500 md:text-4xl">
          Open Roles
        </h4>
        {(!posts || posts.length === 0) && (
          <div className="flex w-full mt-16">
            <p className="text-lg text-left">
              We don&apos;t have any open roles at the moment. Please check back
              later.
            </p>
          </div>
        )}
        {posts &&
          posts.length > 0 &&
          posts.map((jobPost, index) => (
            <div key={index} className="flex flex-col w-full gap-4 mt-16">
              <h5 className="text-2xl font-normal underline">
                {jobPost.title}
              </h5>
              <h6 className="text-xl font-bold underline">
                {jobPost.position}
              </h6>
              <p className="text-left">{jobPost.description}</p>
              <p className="text-left">{jobPost.location}</p>
              <button
                type="button"
                className="text-white transition-colors duration-300 border-2 border-cyan-500 hover:bg-cyan-500 w-[100px] flex items-center rounded-lg p-2 text-semibold font-normal gap-1 justify-center"
              >
                <span>Apply</span>
                <span>
                  <FaArrowRight />
                </span>
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Careers;
