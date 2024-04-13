import "./form.css";

import Button from "../Button";
import Input from "../Input";

function Form() {
  return (
    <form className="form">
      <Input
        label="cardholder name"
        placeholder="e.g. Jane Appleseed"
        type="name"
      />
      <Input
        label="card number"
        placeholder="e.g. 1234 5678 9123 0000"
        type="card"
      />
      <div className="form__group">
        <Input label="Exp. Date (MM/YY)" placeholder="MM" type="month" />
        <Input label="" placeholder="YY" type="year" />
        <Input label="CVC" placeholder="e.g. 123" type="cvc" />
      </div>
      <Button>Confirm</Button>
    </form>
  );
}

export default Form;
