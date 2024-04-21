import { type ComponentPropsWithoutRef } from "react";

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">; // <-- iemerdžojam arī visus pārējos input elementa propus, lai varam iespredot "...props"

export default function Input({ label, id, ...props }: InputProps) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" {...props} name={id} />
    </p>
  );
}
