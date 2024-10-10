import ServiceItem from "../ServiceItem";
import { useRef } from "react";
function ServicesSection(props) {
  const ref = useRef(null);
  const { services, servicesTitle, servicesSubtitle } = props;

  return (
    <div ref={ref} className="relative flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-y-8">
          <div className="flex flex-col w-full mb-4 text-center">
            <h2 className="h2 xl:mt-8">
              {servicesTitle} <span className="text-accent">.</span>
            </h2>
            <p className="text-lg text-center text-white sm:text-xl">
              {servicesSubtitle}
            </p>
          </div>
          {services && services.length > 0 && (
            <div className="grid grid-cols-12">
              {services.map((service, index) => (
                <div key={index} className="col-span-12 p-4 md:col-span-4">
                  <ServiceItem service={service} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
