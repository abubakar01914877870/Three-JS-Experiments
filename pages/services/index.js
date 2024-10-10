import { motion } from "framer-motion";
import Circles from "../../components/Circles";
import ServiceItem from "../../components/ServiceItem";
import { fadeIn } from "../../variants";
import { fetchServicesData } from "../../data/sanity-data-fetch";

export async function getServerSideProps() {
  const services = await fetchServicesData();
  return {
    props: services,
  };
}

const Services = ({ services }) => {
  return (
    <div className="flex items-center py-32 bg-primary/30">
      <Circles className="absolute -right-16 -bottom-2 mix-blend-color-dodge" />
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-y-8">
          <div className="flex flex-col w-full mb-4 text-center">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              Our Services <span className="text-accent">.</span>
            </motion.h2>
          </div>
          <div className="grid grid-cols-12">
            {services && services.length > 0
              ? services.map((service, index) => (
                  <motion.div
                    variants={fadeIn("up", 0.6)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    key={index}
                    className="col-span-12 p-4 md:col-span-4"
                  >
                    <ServiceItem service={service} />
                  </motion.div>
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
