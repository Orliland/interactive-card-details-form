import "./card.css";

import LogoCard from "../../assets/card-logo.svg";
import FrontCardBG from "../../assets/bg-card-front.png";

export function FrontCard() {
  return (
    <div className="card card--front">
      <img src={FrontCardBG} alt="Background Card" className="card__bg" />
      <div className="card__data">
        <img src={LogoCard} alt="Logo Card" />
        <span className="card__number">0000 0000 0000 0000</span>
        <span className="card__holder">JAME APPLESEED</span>
        <span className="card__date">00/00</span>
      </div>
    </div>
  );
}
