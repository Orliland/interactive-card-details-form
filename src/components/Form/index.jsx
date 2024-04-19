import { useState } from "react";
import { number } from "card-validator";
import "./form.css";

import Button from "../Button";
import {
  CardholderInput,
  CardNumberInput,
  CardDateInput,
  CvcInput,
} from "../Input";

function formatCardNumber([...value]) {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  let formatedNumber = "";
  let counter = 0;
  value.map((item, index) => {
    if (item in numbers) {
      if (counter === 3) {
        formatedNumber += item + " ";
        counter = 0;
      } else {
        formatedNumber += item;
        counter++;
      }
    }
  });
  return formatedNumber;
}

function Form() {
  const [formData, setFormData] = useState({
    cardHolder: "",
    cardNumber: "",
    cardMonth: "",
    cardYear: "",
    cardCvc: "",
  });

  const handleCardHolderChange = (e) => {
    setFormData({ ...formData, cardHolder: e.target.value });
  };

  const handleCardNumberChange = (e) => {
    // console.log(number(Number(e.target.value)).isPotentiallyValid);
    // console.log(formatCardNumber("1234567891234567"));
    const removeSpaces = e.target.value.replace(/\s/g, "");

    const formatedNumber = formatCardNumber(removeSpaces);
    setFormData({ ...formData, cardNumber: formatedNumber });
  };

  return (
    <form className="form">
      <CardholderInput
        value={formData.cardHolder}
        onChange={handleCardHolderChange}
      />
      <CardNumberInput
        value={formData.cardNumber}
        onChange={handleCardNumberChange}
      />
      <div className="form__group">
        <CardDateInput value={formData} />
        <CvcInput value={formData.cardCvc} />
      </div>

      <Button>Confirm</Button>
    </form>
  );
}

export default Form;
