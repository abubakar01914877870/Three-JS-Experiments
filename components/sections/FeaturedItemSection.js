import { memo } from "react";
import { cn } from "../../utils/utils";
import FeaturedItem from "./FeaturedItem";

function FeaturedItemsSection(props) {
  const className = props.className || "";
  const featuredItems = props.items || [];
  return (
    <div
      className={cn(
        "sb-component py-12 sb-component-section sb-component-featured-items-section flex flex-col justify-center px-4 min-h-screen",
        className
      )}
    >
      <div className="z-20 flex justify-center w-full">
        <div className="w-full max-w-screen-xl">
          {props.title && <h2 className="text-center h3">{props.title}</h2>}
          {props.subtitle && (
            <p
              className={cn("text-lg text-white sm:text-xl text-center", {
                "mt-6": props.title,
              })}
            >
              {props.subtitle}
            </p>
          )}
          {featuredItems.length > 0 && (
            <div
              className={cn(
                "grid gap-6 lg:gap-8",
                mapColStyles(props?.columns || 3),
                { "mt-12": props.title || props.subtitle }
              )}
            >
              {featuredItems.map((item, index) => (
                <FeaturedItem key={index} {...item} enableHover={true} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function mapColStyles(columns) {
  switch (columns) {
    case 4:
      return "md:grid-cols-4";
    case 3:
      return "md:grid-cols-3";
    case 2:
      return "md:grid-cols-2";
  }
  return null;
}

export default memo(FeaturedItemsSection);
