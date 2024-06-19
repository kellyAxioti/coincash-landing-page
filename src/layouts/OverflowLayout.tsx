import { ReactNode } from "react";

export default function OverflowLayout({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        width: "100%",
        overflow: "auto",
        display: "flex",
        justifyContent: "space-evenly",
        gap: "10px",
        padding: "64px",
      }}
    >
      {children}
    </div>
  );
}
