import { ReactNode } from "react";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden",
      }}
    >
      {children}
    </div>
  );
}
