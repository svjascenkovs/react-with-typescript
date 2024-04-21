import { forwardRef, type ComponentPropsWithoutRef } from "react";

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">; // <-- iemerdžojam arī visus pārējos input elementa propus, lai varam iespredot "...props"

const InputWithRef = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, id, ...props },
  ref
) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" {...props} ref={ref} />
    </p>
  );
});

export default InputWithRef;
