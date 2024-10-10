import { cn } from "../../utils/utils";

export default function TextFormControl(props) {
  return (
    <div className={cn("sb-form-control", props.className)}>
      {props.label && (
        <label
          id={props.labelId}
          className={cn("sb-label", { "sr-only": props.hideLabel })}
          htmlFor={props.name}
        >
          {props.label}
        </label>
      )}
      <input
        id={props.name}
        className="sb-input"
        type="text"
        name={props.name}
        {...(props.placeholder ? { placeholder: props.placeholder } : null)}
        aria-labelledby={props.labelId}
        required={props.isRequired ? true : false}
      />
    </div>
  );
}
