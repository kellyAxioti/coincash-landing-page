import { ReactNode } from "react";

import DetailsLayout from "../layouts/DetailsLayout";

export default function IconLinkBox({
  icon,
  text,
}: {
  icon: ReactNode;
  text: ReactNode;
}) {
  return (
    <DetailsLayout>
      <div>{icon}</div>
      <div>{text}</div>
    </DetailsLayout>
  );
}
