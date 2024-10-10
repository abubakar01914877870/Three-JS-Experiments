import Image from "next/image";
import { cn } from "../../utils/utils";
export default function ImageBlock(props) {
  const { url, altText, className, priority = false } = props;
  if (!url) {
    return null;
  }

  return (
    <Image
      className={cn(
        "sb-component sb-component-block sb-component-image-block",
        className
      )}
      src={url}
      alt={altText || ""}
      width={700}
      height={475}
      loading={priority ? "eager" : "lazy"}
      priority={priority}
    />
  );
}
