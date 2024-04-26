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

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function formatCardNumber([...value]) {
  let formatedNumber = "";
  let counter = -1;
  value.map((item, index) => {
    if (item in numbers) {
      if (counter === 3) {
        formatedNumber += " " + item;
        counter = 0;
      } else {
        formatedNumber += item;
        counter++;
      }
    }
  });
  return formatedNumber;
}

function removeLetters([...value]) {
  let formatedNumber = "";
  value.map((item) => {
    if (item in numbers) {
      formatedNumber += item;
    }
  });
  return formatedNumber;
}

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ".split("");
function removeNotLetters([...value]) {
  let formatedName = "";
  value.map((item) => {
    if (letters.includes(item)) {
      formatedName += item;
    }
  });
  return formatedName;
}

function Form() {
  const [formData, setFormData] = useState({
    cardHolder: "",
    cardNumber: ["", null],
    cardMonth: "",
    cardYear: "",
    cardCvc: "",
  });

  const handleCardHolderChange = (e) => {
    setFormData({
      ...formData,
      cardHolder: removeNotLetters(e.target.value.toUpperCase()),
    });
  };

  const handleCardNumberChange = (e) => {
    const removeSpaces = e.target.value.replace(/\s/g, "");

    const isValid = number(Number(Number(removeSpaces))).isPotentiallyValid;

    const formatedNumber = formatCardNumber(removeSpaces);
    setFormData({ ...formData, cardNumber: [formatedNumber, isValid] });
  };

  const handleCardCvcChange = (e) => {
    setFormData({ ...formData, cardCvc: removeLetters(e.target.value) });
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
        {/* <CardDateInput value={formData} /> */}
        <CvcInput value={formData.cardCvc} onChange={handleCardCvcChange} />
      </div>

      <Button>Confirm</Button>
    </form>
  );
}

export default Form;
