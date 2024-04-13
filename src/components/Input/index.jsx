import "./input.css";

const inputTypes = {
  name: {
    inputType: "text",
    min: 3,
    max: 30,
  },
  card: {
    inputType: "number",
    min: 1000000000000000,
    max: 9999999999999999,
  },
  month: {
    inputType: "number",
    min: 1,
    max: 12,
  },
  year: {
    inputType: "number",
    min: 21,
    max: 99,
  },
  cvc: {
    inputType: "number",
    min: 100,
    max: 999,
  },
};

function Label({ label, children }) {
  return (
    <label className="label">
      <span className="label__text">{label}</span>
      {children}
    </label>
  );
}

export function CardholderInput() {
  return (
    <Label label="CARDHOLDER NAME">
      <input
        type="text"
        className="input"
        placeholder="e.g. Jane Appleseed"
        minLength={3}
        maxLength={30}
      />
    </Label>
  );
}

export function CardNumberInput() {
  return (
    <Label label="CARD NUMBER">
      <input
        type="number"
        className="input"
        placeholder="e.g. 1234 5678 9123 0000"
        min={1000000000000000}
        max={9999999999999999}
      />
    </Label>
  );
}

export function CardDateInput() {
  return (
    <Label label="Exp. Date (MM/YY)">
      <div className="form__date">
        <input
          type="number"
          className="input"
          placeholder="MM"
          min={1}
          max={12}
        />
        <input
          type="number"
          className="input"
          placeholder="YY"
          min={21}
          max={99}
        />
      </div>
    </Label>
  );
}

export function CvcInput() {
  return (
    <Label label="CVC">
      <input
        type="number"
        className="input"
        placeholder="e.g. 123"
        min={100}
        max={999}
      />
    </Label>
  );
}
