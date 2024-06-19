import { ReactNode } from "react";

export default function FlexLayout({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {children}
    </div>
  );
}
