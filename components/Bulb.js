import Image from "next/image";
import { cn } from "../utils/utils";

const Bulb = ({ className }) => {
  return (
    <div
      className={cn("rotate-12 animate-pulse duration-75 w-[250px]", className)}
    >
      <Image
        src={"/bulb.png"}
        width={260}
        height={200}
        alt="bulb"
        className="w-full h-full"
        // priority
      />
    </div>
  );
};

export default Bulb;
