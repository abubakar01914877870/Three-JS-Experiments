import ImageBlock from "./ImageBlock";

export default function TestimonialsSection(props) {
  const testimonials = props.testimonials || [];
  return (
    <div className="relative flex flex-col justify-center px-4 pt-24 sb-component pb-36 sb-component-section sb-component-testimonials-section">
      <div className="z-20 flex justify-center w-full">
        <div className="w-full max-w-screen-xl">
          {props.title && <h2 className="text-left h3">{props.title}</h2>}
          {props.subtitle && (
            <p className="mt-6 text-lg text-left sm:text-lg">
              {props.subtitle}
            </p>
          )}
          {testimonials.length > 0 && (
            <div className="mt-12 space-y-12">
              {testimonials.map((testimonial, index) => {
                return testimonialBody(testimonial, index);
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function testimonialBody(testimonial, index) {
  return (
    <blockquote
      key={index}
      className="flex flex-col md:items-center md:flex-row"
    >
      {testimonial.image && (
        <div className="flex-shrink-0 max-w-lg mb-8 md:mb-0 md:mr-8 md:w-2/5">
          <ImageBlock {...testimonial.image} className="w-full rounded-2xl" />
        </div>
      )}
      <div className="flex-grow">
        {testimonial.quote && (
          <p className="text-3xl leading-relaxed text-white sm:text-4xl sm:leading-tight lg:text-5xl lg:leading-tight">
            <q>{testimonial.quote}</q>
          </p>
        )}
        {(testimonial.name || testimonial.title) && (
          <footer className="mt-8 md:mt-12">
            {testimonial.name && (
              <div className="text-xl text-purple-500 sm:text-2xl">
                {testimonial.name}
              </div>
            )}
            {testimonial.title && (
              <div className="mt-2 text-left text-purple-300">
                {testimonial.title}
              </div>
            )}
          </footer>
        )}
      </div>
    </blockquote>
  );
}
