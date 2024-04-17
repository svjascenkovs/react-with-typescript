import { type ReactNode } from "react";

type HintBoxProps = {
  mode: "hint";
  children: ReactNode;
};

type WarningBoxProps = {
  mode: "warning";
  severity: "low" | "medium" | "high";
  children: ReactNode;
};

type InfoBoxProps = HintBoxProps | WarningBoxProps;

// type InfoBoxProps = {
//   mode: "hint" | "warning";
//   severity?: "low" | "medium" | "high"; // <-- ?: means optional prop.
//   children: ReactNode;
// };

export default function InfoBox(props: InfoBoxProps) {
  // Severity cant be destructured, because of different possible types
  // "info" version and "warning" version
  const { children, mode } = props;

  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }

  const { severity } = props;
  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
}
