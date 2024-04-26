import { useState } from "react";
import { number, expirationDate } from "card-validator";
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

function Form({ setFormValidated }) {
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

    const isValid = number(Number(removeSpaces)).isPotentiallyValid;

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

  const handleSubmit = () => {
    let formValidated = true;
    let cardData = {
      cardHolder: ["", null],
      cardNumber: ["", null],
      cardMonth: ["MM", null],
      cardYear: ["YY", null],
      cardCvc: ["", null],
    };

    // Validar que el CardHolder no este vacío
    cardData.cardHolder = formData.cardHolder;
    if (formData.cardHolder[0].length < 3) {
      cardData.cardHolder = [formData.cardHolder[0], false];
      formValidated = false;
    }

    // Validar que el número de la tarjeta sea correcto
    cardData.cardNumber = formData.cardNumber;
    const removeSpaces = formData.cardNumber[0].replace(/\s/g, "");
    const isValid = number(Number(removeSpaces)).isValid;
    if (isValid === false) {
      cardData.cardNumber = [formData.cardNumber[0], false];
      formValidated = false;
    }

    // Validar que la fecha de vencimiento no se encuentre en blanco
    // Validar que la fecha de vencimiento sea mayor que la actual
    cardData.cardYear = formData.cardYear;
    cardData.cardMonth = formData.cardMonth;
    // Primero se comprueba si se selecciono tanto el mes como el año
    // Después si se selecciono una fecha a partir de la actual
    if (formData.cardMonth[0] === "MM" || formData.cardYear[0] === "YY") {
      if (formData.cardMonth[0] == "MM") {
        cardData.cardMonth = [formData.cardMonth[0], false];
      } else if (formData.cardYear[0] == "YY") {
        cardData.cardYear = [formData.cardYear[0], false];
      }
      formValidated = false;
    } else {
      const isValidDate = expirationDate(
        formData.cardMonth[0] + formData.cardYear[0]
      ).isValid;
      console.log(isValidDate);
      if (!isValidDate) {
        cardData.cardYear = [formData.cardYear[0], false];
        formValidated = false;
      } else {
        cardData.cardYear = [formData.cardYear[0], true];
      }
    }

    // Validar que el CVC tenga 3 números, si no es así, el formulario se invalida
    // y se establece en el estado que el CVC es false
    cardData.cardCvc = formData.cardCvc;
    if (formData.cardCvc[0].length < 3) {
      cardData.cardCvc = [formData.cardCvc[0], false];
      formValidated = false;
    }

    setFormData(cardData);

    if (formValidated === true) {
      setFormValidated(true);
    }
  };

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
