import { ReactNode } from "react";

export default function HeroLayout({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        textAlign: "center",
        width: "100%",
        height: "60%",
        maxWidth: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        gap: "20px",
        background: `linear-gradient(360deg, rgba(0, 102, 255, 0.2) 0%, rgba(255, 255, 255, 0.2) 100%)`,
      }}
    >
      {children}
    </div>
  );
}
