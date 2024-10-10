import { mapStylesToClassNames as mapStyles } from "../../utils/MapStylesToClassname";
import { cn } from "../../utils/utils";

export default function Badge(props) {
  const { label } = props;
  if (!label) {
    return null;
  }
  const cssClasses = props.className || null;
  const styles = props.styles?.self || {};
  return (
    <div
      className={cn(
        "sb-component sb-component-block sb-component-badge",
        cssClasses,
        styles ? mapStyles(styles) : null
      )}
    >
      <span>{label}</span>
    </div>
  );
}
