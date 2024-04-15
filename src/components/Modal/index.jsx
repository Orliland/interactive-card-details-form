import "./modal.css";
import IconComplete from "../../assets/icon-complete.svg";
import Button from "../Button";

function Modal() {
  return (
    <div className="modal">
      <img src={IconComplete} alt="Icon Complete" className="modal__icon" />
      <div className="modal__body">
        <h2 className="modal__title">Thank You!</h2>
        <p className="modal__text">We’ve added your card details</p>
      </div>

      <Button>Continue</Button>
    </div>
  );
}

export default Modal;
