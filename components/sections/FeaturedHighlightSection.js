import { memo } from "react";
import { mapStylesToClassNames as mapStyles } from "../../utils/MapStylesToClassname";
import { cn } from "../../utils/utils";
import Action from "./Action";
import Badge from "./Badge";
import ImageBlock from "./ImageBlock";

function FeatureHighlightSection(props) {
  const colors = props.colors || "colors-a";
  const bgSize = props.backgroundSize || "full";
  const sectionStyles = props.styles?.self || {};
  const zIndex = sectionStyles.zIndex || "";

  return (
    <div
      className={cn(
        "sb-component sb-component-section sb-component-feature-highlight-section my-4 md:my-24",
        bgSize === "inset" ? "flex" : null,
        bgSize === "inset" ? "justify-center" : null,
        sectionStyles.margin
      )}
    >
      <div
        className={cn(
          colors,
          "flex flex-col justify-center relative px-8 md:px-16 py-16",
          bgSize === "inset" ? "w-full" : null,
          bgSize === "inset" ? "max-w-screen-xl" : null,
          zIndex === "auto" ? "" : "z-20",
          sectionStyles.borderRadius
            ? mapStyles({ borderRadius: sectionStyles.borderRadius })
            : null
        )}
      >
        <div
          className={cn(
            "relative w-full",
            bgSize === "full" ? "flex" : null,
            bgSize === "full" ? "justify-center" : null
          )}
        >
          <div
            className={cn(
              "w-full",
              bgSize === "full" ? "max-w-screen-xl" : null
            )}
          >
            <div className="flex flex-col items-center space-y-8 md:flex-row lg:space-y-0">
              <div className="z-20 flex-1 w-full">
                <div
                  className={cn({
                    "lg:pr-1/4": props.media,
                  })}
                >
                  {featureHighlightBody(props)}
                  {featureHighlightActions(props)}
                </div>
              </div>
              {props.media && (
                <div className="z-20 justify-center flex-1 w-full">
                  <ImageBlock {...props.media} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function featureHighlightBody(props) {
  const styles = props.styles || {};
  return (
    <>
      {props.badge && <Badge {...props.badge} />}
      {props.title && (
        <h2
          className={cn("h3 text-left", {
            "mt-4": props.badge?.label,
          })}
        >
          {props.title}
        </h2>
      )}
      {props.subtitle && (
        <p
          className={cn("text-xl sm:text-2xl text-left", {
            "mt-4": props.title,
          })}
        >
          {props.subtitle}
        </p>
      )}
      {props.text && (
        <p
          className={cn("text-white sm:text-lg text-left", {
            "mt-6": props.title || props.subtitle,
          })}
        >
          {props.text}
        </p>
      )}
    </>
  );
}

function featureHighlightActions(props) {
  return (
    <div
      className={cn("overflow-x-hidden", {
        "mt-8": props.title || props.subtitle || props.text || props.badge,
      })}
    >
      <div className="flex flex-wrap items-center -mx-2">
        {actions.map((action, index) => (
          <Action
            key={index}
            {...action}
            contactRef={props.contactRef || null}
            className="mx-2 mb-3 lg:whitespace-nowrap"
          />
        ))}
      </div>
    </div>
  );
}

const actions = [
  {
    type: "Button",
    label: "Get Started",
    url: "/signup",
    style: "primary",
    altText: "Contractors Insurance",
    elementId: "Contractors Insurance",
  },
  {
    type: "Link",
    label: "Call 713-589-4072",
    altText: "Contractors Insurance",
    url: "tel:713-589-4072",
    showIcon: true,
    icon: "send",
    iconPosition: "right",
    style: "secondary",
    elementId: "Contractors Insurance",
  },
];

export default memo(FeatureHighlightSection);
