import Image from "next/image";

const ThankYouPage = () => {
  return (
    <div className="bg-primary/30 flex  flex-col items-center justify-center h-[100vh] gap-8">
      <Image src="/laptop.png" alt="Thank you" width={300} height={100} />
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-2xl font-bold text-white capitalize md:3xl lg:text-4xl">
          Thank you!
        </p>
        <p className="text-sm font-normal text-white/50 md:text-base lg:text-lg">
          Your message has been sent.
        </p>
      </div>
    </div>
  );
};

export default ThankYouPage;
