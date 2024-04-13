import "./form.css";

import Button from "../Button";
import {
  CardholderInput,
  CardNumberInput,
  CardDateInput,
  CvcInput,
} from "../Input";

function Form() {
  return (
    <form className="form">
      <CardholderInput />
      <CardNumberInput />
      <div className="form__group">
        <CardDateInput />
        <CvcInput />
      </div>

      <Button>Confirm</Button>
    </form>
  );
}

export default Form;
