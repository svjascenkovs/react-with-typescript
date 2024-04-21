import { ComponentPropsWithoutRef } from "react";

type ButtonProps = {
  el?: "button";
} & ComponentPropsWithoutRef<"button">;

// type ButtonProps = ComponentPropsWithoutRef<"button"> & { href?: never };

type AnchorProps = {
  el: "anchor";
} & ComponentPropsWithoutRef<"a">;

// type AnchorProps = ComponentPropsWithoutRef<"a"> & { href?: string };

// type predicate:
// function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
//   return "href" in props;
// }

export default function Button(props: ButtonProps | AnchorProps) {
  if (props.el === "anchor") {
    return <a className="button" {...props}></a>;
  }
  // if (isAnchorProps(props)) {
  //   return <a className="button" {...props}></a>;
  // }

  return <button className="button" {...props}></button>;
}
