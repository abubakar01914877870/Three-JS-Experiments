import dynamic from "next/dynamic";
import { Suspense, useEffect, useRef, useState } from "react";
import ContactSection from "../../components/sections/ContactSection";
import { fetchBuildersRiskData } from "../../data/sanity-data-fetch";
import { getImageSource, sanitizeString } from "../../utils/utils";
import FeaturedItemsSection from "../../components/sections/FeaturedItemSection";
import FeatureHighlightSection from "../../components/sections/FeaturedHighlightSection";
import TestimonialsSection from "../../components/sections/TestimonialSection";
import HeroSection from "../../components/sections/HeroSection";
import ServicesSection from "../../components/sections/ServicesSection";
import Banners from "../../components/Banners";
import ProjectHero from "../../components/ProjectHero";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Particles = dynamic(() => import("../../components/ParticlesContainer"), {
  ssr: false,
});
const ParticlesMobile = dynamic(
  () => import("../../components/ParticlesContainerMobile"),
  {
    ssr: false,
  }
);
const Bulb = dynamic(() => import("../../components/Bulb"), {
  ssr: false,
});
const Circles = dynamic(() => import("../../components/Circles"), {
  ssr: false,
});

export async function getServerSideProps() {
  const builderRiskData = await fetchBuildersRiskData();

  return {
    props: builderRiskData,
  };
}

const Home = ({
  bannerItems,
  heading,
  subHeading,
  redWords,
  bgImageDesktop,
  bgImageDesktopUrl,
  bgImageMobile,
  bgImageMobileUrl,
  contactFormTitle,
  contactFormSubTitle,
  contactFormImage,
  contactFormImageUrl,
  servicesTitle,
  servicesSubtitle,
  services,
  commercialConstructionTitle,
  commercialConstructionSubTitle,
  commercialConstructionItems,
  youtubeVideoHeading,
  youtubeVideoTitle,
  youtubeVideoDescription,
  youtubeVideoUrl,
  featureHighlightLable,
  featureHighlightText,
  featureHighlights2title,
  featureHighlights2text,
  featureHighlights2Image,
  featureHighlights2ImageUrl,
  testimonialsSectionQuote,
  testimonialsSectionName,
  testimonialsSectionPost,
  testimonialsSectionImage,
  testimonialsSectionImageUrl,
  featureHighlightImage,
  featureHighlightImageUrl,
}) => {
  const [bgImage, setBgImage] = useState("");
  const [stateName, setStateName] = useState("");
  const contactRef = useRef(null);
  const contactImage = getImageSource(contactFormImage, contactFormImageUrl);
  const contactFormData = {
    title: sanitizeString(contactFormTitle),
    text: sanitizeString(contactFormSubTitle),
    image: contactImage
      ? {
          url: contactImage,
          altText: "Contact Image",
        }
      : null,
  };

  const commercialConstructionData = {
    title: sanitizeString(commercialConstructionTitle),
    subtitle: sanitizeString(commercialConstructionSubTitle),
    items: (commercialConstructionItems || []).map(
      (commercialConstructionItem) => ({
        type: "FeaturedItem",
        title: sanitizeString(
          commercialConstructionItem.constructionTitle || ""
        ),
        text: sanitizeString(
          commercialConstructionItem.constructionShortDescription || ""
        ),
        featuredImage: {
          type: "ImageBlock",
          url: commercialConstructionItem.imageConfig || "",
          altText: commercialConstructionItem.constructionTitle || "",
        },
        styles: {
          self: {
            textAlign: "center",
          },
          title: {
            textAlign: "center",
          },
          subtitle: {
            textAlign: "center",
          },
        },
      })
    ),
  };

  const featureHighImage = getImageSource(
    featureHighlightImage,
    featureHighlightImageUrl
  );
  const featureHighlightData = {
    contactRef: contactRef,
    title: sanitizeString(featureHighlightLable),
    text: sanitizeString(featureHighlightText),
    ...(featureHighImage && {
      media: {
        type: "ImageBlock",
        url: featureHighImage,
        altText: sanitizeString(featureHighlightLable || "highlights1"),
      },
    }),
    styles: {
      self: {
        height: "auto",
        width: "wide",
        borderRadius: "x-large",
      },
    },
    backgroundSize: "inset",
  };

  const featureHigh2Image = getImageSource(
    featureHighlights2Image,
    featureHighlights2ImageUrl
  );

  const featureHighlights2Data = {
    contactRef: contactRef,
    title: sanitizeString(featureHighlights2title),
    text: sanitizeString(featureHighlights2text),
    ...(featureHigh2Image && {
      media: {
        type: "ImageBlock",
        url: featureHigh2Image,
        altText: sanitizeString(featureHighlights2title || "highlights2"),
      },
    }),
    styles: {
      self: {
        height: "auto",
        width: "wide",
        zIndex: "auto",
      },
    },
  };

  const testimonialImage = getImageSource(
    testimonialsSectionImage,
    testimonialsSectionImageUrl
  );

  const testimonialsPropsData = {
    title: "",
    subtitle: "",
    testimonials: [
      {
        quote: sanitizeString(testimonialsSectionQuote),
        name: sanitizeString(testimonialsSectionName),
        title: sanitizeString(testimonialsSectionPost),
        ...(testimonialImage && {
          image: {
            type: "ImageBlock",
            url: testimonialImage,
            altText: "Contractors Insurance",
            elementId: "Contractors Insurance",
          },
        }),
      },
    ],
  };

  useEffect(() => {
    const fetchLocationData = async () => {
      try {
        const response = await fetch("/api/location", {
          cache: "no-store",
          next: { revalidate: 0 },
        });
        const data = await response.json();
        if (data.location && data.location.names) {
          setStateName(data.location.names?.en);
        }
      } catch (error) {}
    };
    const bgImageLarge = getImageSource(bgImageDesktop, bgImageDesktopUrl);
    const bgImageSmall = getImageSource(bgImageMobile, bgImageMobileUrl);
    const responsiveBgImage =
      typeof window !== "undefined" && window.innerWidth > 768
        ? bgImageLarge
        : bgImageSmall;
    setBgImage(responsiveBgImage);
    fetchLocationData();
  }, []);

  return (
    <div className="relative flex flex-col ">
      {bannerItems && (
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="absolute z-40 flex justify-center w-full top-[66px] md:top-4"
        >
          <Banners bannerList={bannerItems || []} />
        </motion.div>
      )}

      <div
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
        className="relative min-h-[1000px] md:min-h-[100vh] flex flex-col items-center bg-center bg-cover z-20"
      >
        <HeroSection
          heading={heading}
          subHeading={subHeading}
          redWords={redWords}
          stateName={stateName}
          contactRef={contactRef}
        />
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
      <Bulb
        id="bulb"
        className="fixed left-0 z-10 hidden pointer-events-none md:block -bottom-10 -translate-x-44 mix-blend-hard-light bg-inherit md:-translate-x-36"
      />
      <Circles
        id="circles"
        className="fixed bottom-0 right-0 z-10 hidden pointer-events-none md:block translate-x-36 mix-blend-hard-light bg-inherit md:translate-x-16"
      />
      <div className="flex flex-col items-center w-full">
        <div ref={contactRef} className="flex justify-center ">
          <ContactSection {...contactFormData} />
        </div>
        <ServicesSection
          services={services}
          servicesTitle={servicesTitle}
          servicesSubtitle={servicesSubtitle}
        />
        <FeaturedItemsSection {...commercialConstructionData} />
        {youtubeVideoUrl && (
          <ProjectHero
            project={{
              heading: sanitizeString(youtubeVideoHeading || ""),
              title: sanitizeString(youtubeVideoTitle || ""),
              content: youtubeVideoDescription,
              youtubeVideoUrl,
              // url: "https://customer-151rigpbx07gsivg.cloudflarestream.com/060e984a94692e8385ff7c3073f1e043/iframe?poster=https%3A%2F%2Fcustomer-151rigpbx07gsivg.cloudflarestream.com%2F060e984a94692e8385ff7c3073f1e043%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600",
              images: [],
            }}
          />
        )}
        <FeatureHighlightSection {...featureHighlightData} />
        <FeatureHighlightSection {...featureHighlights2Data} />
        <TestimonialsSection {...testimonialsPropsData} />
      </div>
    </div>
  );
};

export default Home;
