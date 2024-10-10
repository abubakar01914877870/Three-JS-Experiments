import ImageUrlBuilder from "@sanity/image-url";
import { client } from "../components/SanityClient";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { RiAdvertisementFill, RiLiveFill } from "react-icons/ri";
import { FaCameraRetro, FaTv, FaLaptopCode } from "react-icons/fa";
import { MdVideoLibrary } from "react-icons/md";
import { PiTelevisionSimpleFill } from "react-icons/pi";

export const sanitizeString = (str) => {
  return str.replace(/[\u200B-\u200D\uFEFF]/g, "");
};

const builder = ImageUrlBuilder(client);

export const extractImageUrlFor = (source) => {
  return builder.image(source).url();
};

export const getRandomWordFrom = ({ exactTill, targetWord }) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return targetWord
    .split("")
    .map((letter, index) => {
      if (letter === " ") {
        return " ";
      }
      if (index <= exactTill) {
        return targetWord[index];
      }
      return letters[Math.floor(Math.random() * 26)];
    })
    .join("");
};

export const getPageTitleByPath = (path) => {
  switch (path) {
    case "/":
      return "Homepage | Sovereign Apex";
    case "/about":
      return "About | Sovereign Apex";
    case "/contact":
      return "Contact | Sovereign Apex";
    case "/work":
      return "Works | Sovereign Apex";
    case "/services":
      return "Services | Sovereign Apex";
    case "/testimonial":
      return "Testimonials | Sovereign Apex";
    case "/thank-you":
      return "Contact | Sovereign Apex";
    case "/builders-risk":
      return "Builders Risk | Sovereign Apex";

    default:
      return "Homepage | Sovereign Apex";
  }
};

export const transformVideoURL = (url) => {
  const youTubeRegex =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(youTubeRegex);

  if (match && match[2].length === 11) {
    const videoId = match[2];
    return `https://www.youtube.com/embed/${videoId}?modestbranding=1&autohide=1&showinfo=0&controls=0`;
  }

  return url;
};

export const getVideoIdFromUrl = (url) => {
  if (!url) return null;
  const videoIdRegex =
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/;
  const match = url.match(videoIdRegex);
  return match ? match[1] : null;
};

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getImageSource(image, url) {
  if (process.env.IMAGE_SOURCE === "sanity") {
    return extractImageUrlFor(image);
  }
  return url ? sanitizeString(url) : "";
}

export const appendStateName = (heading, stateName) => {
  return (heading || "").replace(/["']?\b[Yy]our [Ss]tate\b["']?/g, stateName);
};

export const getServiceIcon = (service) => {
  switch (service) {
    case "web":
      return <FaLaptopCode />;
    case "advertisments":
      return <RiAdvertisementFill />;
    case "event":
      return <RiLiveFill />;
    case "shorts":
      return <FaCameraRetro />;
    case "remix":
      return <MdVideoLibrary />;
    case "series":
      return <PiTelevisionSimpleFill />;
    default:
      return <FaTv />;
  }
};

export function transformWordsInString({ str, stateName, redWords = [] }) {
  if (!stateName) return str;
  const stateNameWords =
    stateName !== null
      ? stateName.split(" ").map((word) => word.toLowerCase())
      : [];

  return str.split(" ").map((word, index, arr) => {
    const sanitizedWord = sanitizeString(word).toLowerCase();
    const redWordsInLowerCase = redWords.map((word) =>
      sanitizeString(word).toLowerCase()
    );

    const isState = stateNameWords.includes(sanitizedWord);
    const isRedWord = redWordsInLowerCase.includes(sanitizedWord) || isState;
    return (
      <span key={index} className={isRedWord ? "text-accent" : ""}>
        {word}
        {index !== arr.length - 1 && " "}
      </span>
    );
  });
}
