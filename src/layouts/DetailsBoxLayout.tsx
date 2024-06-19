import { ReactNode } from "react";

export default function DetailsBoxLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <div className="hero-details">{children}</div>;
}
