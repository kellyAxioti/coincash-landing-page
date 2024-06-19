import { ReactNode } from "react";

export default function MainPageLayout({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "64px",
        gap: "50px",
      }}
    >
      {children}
    </div>
  );
}
