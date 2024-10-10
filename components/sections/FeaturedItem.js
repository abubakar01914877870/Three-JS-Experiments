import { memo } from "react";
import { mapStylesToClassNames as mapStyles } from "../../utils/MapStylesToClassname";
import { cn } from "../../utils/utils";
import ImageBlock from "./ImageBlock";

function FeaturedItem(props) {
  const styles = props.styles || {};
  return (
    <article
      className={cn(
        "sb-component pb-6 sb-component-block sb-component-item-hover sb-component-item hover:bg-gray-400",
        mapStyles(styles.self?.textAlign)
      )}
    >
      {props.featuredImage && (
        <div className="flex justify-center mb-6">
          <div className="w-12 h-12">
            <ImageBlock
              {...props.featuredImage}
              className="inline-block"
              height={50}
              width={50}
            />
          </div>
        </div>
      )}
      {props.title && (
        <h3
          className={cn(
            styles.title ? mapStyles(styles.title) : null,
            "font-semibold underline text-3xl tracking-tighter"
          )}
        >
          {props.title}
        </h3>
      )}
      {props.subtitle && (
        <p
          className={cn(
            "text-lg text-white",
            styles.subtitle ? mapStyles(styles.subtitle) : null,
            { "mt-1": props.title }
          )}
        >
          {props.subtitle}
        </p>
      )}
      {props.text && (
        <p
          className={cn(
            "text-white mt-4 font-normal leading-normal",
            mapStyles(styles.self)
          )}
        >
          {props.text}
        </p>
      )}
    </article>
  );
}

export default memo(FeaturedItem);
