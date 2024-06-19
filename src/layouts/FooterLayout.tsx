import { ReactNode } from "react";

export default function FooterLayout({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "50%",
        padding: "24px 4px 24px 4px",
        justifyContent: "center",
        color: "white",
      }}
    >
      {children}
    </div>
  );
}
