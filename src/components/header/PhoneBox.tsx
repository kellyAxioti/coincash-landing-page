import "./PhoneBox.css";
import { ReactComponent as IphoneLogo } from "../../icons/iphone mockup 1.svg";
import { ReactComponent as Eclipse1 } from "../../icons/Ellipse 1.svg";
import { ReactComponent as Eclipse2 } from "../../icons/Ellipse 2.svg";

export default function PhoneBox() {
  return (
    <div className="svg-container">
      <div className="element1">
        <Eclipse1 />
      </div>
      <div className="element2">
        <Eclipse2 />
      </div>
      <div className="element3">
        <IphoneLogo />
      </div>
    </div>
  );
}
