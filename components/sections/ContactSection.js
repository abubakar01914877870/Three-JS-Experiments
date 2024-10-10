import { memo } from "react";
import FormBlock from "./FormBlock";
import ImageBlock from "./ImageBlock";
import { cn } from "../../utils/utils";

const ContactSection = (props) => {
  return (
    <div className="my-4 md:my-20">
      <div className="max-w-screen-xl px-4 py-12">
        <div className="flex justify-center w-full">
          <div className="w-full max-w-screen-xl">
            <div className="flex flex-col items-center space-y-8 md:flex-row lg:space-y-0 lg:space-x-8">
              <div className="z-20 flex-1 w-full p-8 bg-black rounded-lg bg-opacity-90">
                <h2
                  className="text-4xl font-medium text-left"
                  data-sb-field-path=".title"
                >
                  {props.title}
                </h2>
                {props.text && (
                  <p
                    className={cn("text-left p", { "mt-4": props.title })}
                    data-sb-field-path=".text"
                  >
                    {props.text}
                  </p>
                )}
                <div className="mt-12">
                  <FormBlock
                    elementId="contact-form"
                    className="inline-block w-full max-w-screen-sm"
                  />
                </div>
              </div>
              {props.image && (
                <div className="z-20 flex-1 w-full" style={{ opacity: 1 }}>
                  <div>
                    <ImageBlock {...props.image} data-sb-field-path=".media" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ContactSection);
