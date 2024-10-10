import Image from "next/image";
import { cn } from "../utils/utils";

const Circles = ({ className }) => {
  return (
    <div className={cn("w-[250px] animate-pulse duration-75 z-10", className)}>
      <Image
        src={"/circles.png"}
        width={260}
        height={200}
        className="w-full h-full"
        alt="circle"
        // priority
      />
    </div>
  );
};

export default Circles;
