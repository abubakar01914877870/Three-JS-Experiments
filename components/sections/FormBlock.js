import axios from "axios";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import Loader from "../Loader";

export default function FormBlock(props) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const formRef = useRef();

  const formHandler = async (data) => {
    return await axios.post(formActionUrl, data);
  };

  const handleSubmit = async (event) => {
    setSubmitting(true);
    try {
      event.preventDefault();
      const firstHoneypotField = event.target["form-name"];
      const secondHoneypotField = event.target["form-destination"];
      const hiddenField = event.target["zc_gad"];

      if (
        firstHoneypotField.value ||
        secondHoneypotField.value ||
        hiddenField.value
      ) {
        throw new Error("Form submission failed");
      }

      const data = new FormData(formRef.current);
      const value = Object.fromEntries(data.entries());

      setSubmitted(false);
      setError(false);
      delete value["form-name"];
      delete value["form-destination"];
      delete value["zc_gad"];

      await formHandler(value)
        .then(() => {
          setSubmitted(true);
          window.location.href = "/thank-you";
          formRef.current.reset();
        })
        .catch(() => {
          throw new Error("Form submission failed");
        });
    } catch (error) {
      setError(true);
      toast.error("Message failed to send.");
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    if (!submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const formHoneypotName = `${props.elementId}-bot-field`;

  return (
    <form
      className=""
      name={props.elementId}
      id={props.elementId}
      onSubmit={(e) => handleSubmit(e)}
      data-netlify="true"
      ref={formRef}
      data-netlify-honeypot={formHoneypotName}
      data-sb-field-path="data-sb-field-path"
    >
      <div className="flex flex-col w-full">
        <div
          className="grid text-left gap-y-4 sm:grid-cols-2 sm:gap-x-4"
          data-sb-field-path=".fields"
        >
          <input type="hidden" name="form-name" value="" />
          <input type="hidden" name="form-destination" value="" />
          {fields.map((field, index) => {
            const fieldType = field.type;
            if (!fieldType) {
              throw new Error(`form field does not have the 'type' property`);
            }
            const FormControl = getComponent(fieldType);
            if (!FormControl) {
              throw new Error(
                `no component matching the form field type: ${fieldType}`
              );
            }
            return (
              <FormControl
                key={index}
                {...field}
                data-sb-field-path={`.${index}`}
              />
            );
          })}
        </div>
        <div className="mt-8">
          <button
            type="submit"
            className="px-8 py-0 h-[3.125rem] w-[240px] transition duration-150 ease-in-out bg-[#125b9a] border-2 border-[#125b9a] rounded-none shadow-md cursor-pointer hover:bg-[#18446a] hover:border-[#18446a] text-white sb-component sb-component-block sb-component-button sb-component-button-primary"
          >
            {submitting ? (
              <span className="w-6 h-6">
                <Loader />
              </span>
            ) : (
              "Get my quote now!"
            )}
          </button>
          {submitted && (
            <span className="ml-8">Thank you, your message was sent.</span>
          )}
          {error && (
            <span className="ml-8 text-info">
              Something went wrong, please try again.
            </span>
          )}
        </div>
      </div>
      <input type="hidden" id="zc_gad" name="zc_gad" value="" />
    </form>
  );
}

const components = {
  EmailFormControl: dynamic(() => import("./EmailFormControl")),
  // CheckboxFormControl: dynamic(() => import("./CheckboxFormControl")),
  TextFormControl: dynamic(() => import("./TextFormControl")),
  // SelectFormControl: dynamic(() => import("./SelectFormControl")),
};

const getComponent = (type) => {
  return components[type] || null;
};

const formActionUrl = "https://formkeep.com/f/babc8e8419cf";

const fields = [
  {
    type: "TextFormControl",
    name: "firstName",
    label: "First Name",
    hideLabel: false,
    placeholder: "First Name",
    isRequired: true,
    width: "1/2",
  },
  {
    type: "TextFormControl",
    name: "lastName",
    label: "Last Name",
    placeholder: "Last Name",
    isRequired: true,
    width: "1/2",
  },
  {
    type: "EmailFormControl",
    name: "email",
    label: "Email",
    placeholder: "Your email",
    isRequired: true,
    width: "1/2",
  },
  {
    type: "TextFormControl",
    name: "phoneNumber",
    label: "Phone Number",
    placeholder: "Phone Number",
    isRequired: true,
    width: "1/2",
  },
];
