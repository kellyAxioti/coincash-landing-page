import LogoIcon from "../../icons/components/LogoIcon";
import Footer from "./Footer";

export default function FooterBox() {
  return (
    <div
      style={{
        background: `linear-gradient(180deg, #020D1F 0%, #0066FF 163.62%)`,
        padding: "24px",
      }}
    >
      <Footer />
      <div className="footer-container">
        <div style={{ paddingBottom: "5px" }}>
          {" "}
          <LogoIcon color={"white"} />
        </div>
        <div className="footer-link-container">
          <a href={"#"} className="footer-link">
            Privacy Policy
          </a>
          <a href={"#"} className="footer-link">
            Terms and conditions
          </a>
        </div>
      </div>
    </div>
  );
}
