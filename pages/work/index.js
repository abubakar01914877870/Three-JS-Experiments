import { Suspense } from "react";
import dynamic from "next/dynamic";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import { fetchWorkData } from "../../data/sanity-data-fetch";

const ProjectHero = dynamic(() => import("../../components/ProjectHero"), {
  ssr: false,
});

export async function getServerSideProps() {
  const projects = await fetchWorkData();
  return {
    props: projects,
  };
}

const Work = ({ projects }) => {
  return (
    <div className="flex items-center py-32 bg-primary/30">
      <Circles className="absolute -right-16 -bottom-2 mix-blend-color-dodge" />
      <div className="container mx-auto space-y-16">
        {projects.map((project, index) => (
          <ProjectHero
            key={project._id}
            project={project}
            imagesOnRight={index % 2 === 0}
          />
        ))}
      </div>
      <Bulb className="absolute z-10 -left-36 -bottom-12 mix-blend-color-dodge " />
    </div>
  );
};

export default Work;
