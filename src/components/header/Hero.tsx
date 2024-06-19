import DetailsBoxLayout from "../../layouts/DetailsBoxLayout";
import HeroLayout from "../../layouts/HeroLayout";
import DescriptionBox from "./DescriptionBox";
import TopNavBar from "./TopNavbar";

import PhoneBox from "./PhoneBox";

export default function Hero() {
  return (
    <HeroLayout>
      <TopNavBar />
      <DetailsBoxLayout>
        <DescriptionBox />
        <PhoneBox />
      </DetailsBoxLayout>
    </HeroLayout>
  );
}
