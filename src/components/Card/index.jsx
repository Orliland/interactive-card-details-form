import "./card.css";

import LogoCard from "../../assets/card-logo.svg";
import FrontCardBG from "../../assets/bg-card-front.png";
import BackCardBG from "../../assets/bg-card-back.png";

export function FrontCard({ formData }) {
  return (
    <div className="card card--front">
      <img src={FrontCardBG} alt="Background Card" className="card__bg" />
      <div className="card__data">
        <img src={LogoCard} alt="Logo Card" />
        <span className="card__number">
          {formData.cardNumber[0] === ""
            ? "0000 0000 0000 0000"
            : formData.cardNumber[0]}
        </span>
        <span className="card__holder">
          {formData.cardHolder[0] === ""
            ? "JANE APPLESEED"
            : formData.cardHolder[0].slice(0, 15)}
        </span>
        <span className="card__date">
          {formData.cardMonth[0] === "MM" ? "00" : formData.cardMonth[0]}/
          {formData.cardYear[0] === "YY" ? "00" : formData.cardYear[0]}
        </span>
      </div>
    </div>
  );
}

export function BackCard({ formData }) {
  return (
    <div className="card card--back">
      <img src={BackCardBG} alt="Background Card" className="card__bg" />
      <span className="card__cvc">
        {formData.cardCvc[0] === "" ? "000" : formData.cardCvc[0]}
      </span>
    </div>
  );
}
