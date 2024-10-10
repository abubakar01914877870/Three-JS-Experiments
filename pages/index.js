import dynamic from "next/dynamic";
import { Suspense } from "react";

const Particles = dynamic(() => import("../components/ParticlesContainer"), {
  ssr: false,
});

const Home = () => {
  const ParticlesMobile = dynamic(
    () => import("../components/ParticlesContainerMobile"),
    {
      ssr: false,
    }
  );

  return (
    <div className="relative pt-28 md:pt-20 h-[100vh] bg-center bg-cover">
      <div className="absolute bottom-0 right-0 z-30 w-full h-full">
        {typeof window !== "undefined" && window.innerWidth > 768 ? (
          <Suspense fallback={null}>
            <Particles />
          </Suspense>
        ) : (
          <Suspense fallback={null}>
            <ParticlesMobile />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default Home;
