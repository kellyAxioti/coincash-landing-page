import "./App.css";

import FooterBox from "./components/footer/FooterBox";
import Hero from "./components/header/Hero";
import InfoBox from "./components/mainpage/InfoBox";
import MainBox from "./components/mainpage/MainBox";
import PageLayout from "./layouts/PageLayout";

function App() {
  return (
    <PageLayout>
      <Hero />

      <InfoBox
        label={"over 200,000+ users have chosen COINCASH for everyday payments"}
      />
      <MainBox />
      <FooterBox />
    </PageLayout>
  );
}

export default App;
