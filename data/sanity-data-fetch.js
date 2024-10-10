import { client } from "../components/SanityClient";

export const fetchHomepageData = async () => {
  try {
    const query = `*[_type == "homepage"][0]{backgroundImage, heading1, heading2, buttonText}`;
    const { backgroundImage, heading1, heading2, buttonText } =
      await client.fetch(query);
    return {
      backgroundImage,
      heading1,
      heading2,
      buttonText,
    };
  } catch (error) {
    return {
      backgroundImage: "",
      heading1: "",
      heading2: "",
      buttonText: "",
    };
  }
};

export const fetchAboutData = async () => {
  try {
    const query = `*[_type == "about"][0]{heading, description, image, redWords}`;
    const { heading, description, image, redWords } = await client.fetch(query);
    const propHeading = heading || "";
    const propDescription = description || [];
    const propImage = image || "";
    const propRedWords = redWords || [];
    return {
      heading: propHeading,
      description: propDescription,
      image: propImage,
      redWords: propRedWords,
    };
  } catch (error) {
    return {
      heading: propHeading,
      description: propDescription,
      image: propImage,
      redWords: propRedWords,
    };
  }
};

export const fetchServicesData = async () => {
  try {
    const query = `*[_type == "service"] | order(_createdAt desc)`;
    const services = await client.fetch(query);
    return {
      services,
    };
  } catch (error) {
    return {
      services: [],
    };
  }
};

export const fetchContactData = async () => {
  const query = `*[_type == "contact"][0]{heading, description, buttonText}`;
  const { heading, description, buttonText } = await client.fetch(query);
  return {
    heading,
    description,
    buttonText,
  };
};

export const fetchWorkData = async () => {
  try {
    const query = `*[_type == "project"] | order(_createdAt desc)`;
    const projects = await client.fetch(query);
    return {
      projects,
    };
  } catch (error) {
    return {
      projects: [],
    };
  }
};

export const fetchCareersData = async () => {
  try {
    const query = `*[_type == "career"] | order(_createdAt desc)`;
    const posts = await client.fetch(query);
    return {
      posts,
    };
  } catch (error) {
    return {
      posts: [],
    };
  }
};

export const fetchTestimonialsData = async () => {
  try {
    const query = `*[_type == "testimonial"] | order(_createdAt desc)`;
    const testimonials = await client.fetch(query);
    return {
      testimonials,
    };
  } catch (error) {
    return {
      testimonials: [],
    };
  }
};

export const fetchBuildersRiskData = async () => {
  try {
    const query = `*[_type == "builders-risk"][0]{bannerItems, heading, subHeading, redWords, bgImageDesktop, bgImageDesktopUrl, bgImageMobile, bgImageMobileUrl, contactFormTitle, contactFormSubTitle, contactFormImage, contactFormImageUrl, servicesTitle, servicesSubtitle, services, commercialConstructionTitle, commercialConstructionSubTitle, commercialConstructionItems,youtubeVideoHeading, youtubeVideoTitle, youtubeVideoDescription, youtubeVideoUrl, featureHighlightLable, featureHighlightText, featureHighlights2title, featureHighlights2text, featureHighlights2Image, featureHighlights2ImageUrl, testimonialsSectionQuote, testimonialsSectionName, testimonialsSectionPost, testimonialsSectionImage, testimonialsSectionImageUrl, featureHighlightImage, featureHighlightImageUrl}`;
    const builderRiskData = await client.fetch(query);
    return builderRiskData;
  } catch (error) {
    return {};
  }
};
