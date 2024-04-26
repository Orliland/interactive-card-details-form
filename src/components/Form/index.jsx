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
  // TODO: Agregar indice al acceder a los valores de cada estado
  // TODO: agregar función que active o desactive el true o false
  // TODO: en caso de que sea false, mostrar un mensaje de error
  const [formData, setFormData] = useState({
    cardHolder: ["", null],
    cardNumber: ["", null],
    // TODO: señalizar cual dato falta en caso de aun no haber sido completado
    cardMonth: ["MM", null], //falta
    cardYear: ["YY", null], //falta
    cardCvc: ["", null],
  });

  const handleCardHolderChange = (e) => {
    const cardHolder = removeNotLetters(e.target.value.toUpperCase());
    let nameValidate = false;
    if (cardHolder.length > 0) {
      nameValidate = true;
    }
    setFormData({
      ...formData,
      cardHolder: [cardHolder, nameValidate],
    });
  };

  const handleCardNumberChange = (e) => {
    const removeSpaces = e.target.value.replace(/\s/g, "");

    const isValid = number(Number(Number(removeSpaces))).isPotentiallyValid;

    const formatedNumber = formatCardNumber(removeSpaces);
    setFormData({ ...formData, cardNumber: [formatedNumber, isValid] });
  };

  const handleCardCvcChange = (e) => {
    setFormData({
      ...formData,
      cardCvc: [removeLetters(e.target.value), true],
    });
  };

  const handleOnSelectMonth = (e) => {
    setFormData({ ...formData, cardMonth: [e.target.value, true] });
  };

  const handleOnSelectYear = (e) => {
    setFormData({ ...formData, cardYear: [e.target.value, true] });
  };

  const handleSubmit = () => {};

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <CardholderInput
        value={formData.cardHolder}
        onChange={handleCardHolderChange}
      />
      <CardNumberInput
        value={formData.cardNumber}
        onChange={handleCardNumberChange}
      />
      <div className="form__group">
        <CardDateInput
          value={formData}
          onSelectMonth={handleOnSelectMonth}
          onSelectYear={handleOnSelectYear}
        />
        <CvcInput value={formData.cardCvc} onChange={handleCardCvcChange} />
      </div>

      <Button>Confirm</Button>
    </form>
  );
}

export default Form;
