import { ReactNode } from "react";

export default function DetailsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div style={{ display: "flex", flexDirection:"column", justifyContent:"space-evenly" }}>
      {children}
    </div>
  );
}
