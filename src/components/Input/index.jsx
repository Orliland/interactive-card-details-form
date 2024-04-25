import "./input.css";

function Label({ label, children }) {
  return (
    <label className="label">
      <span className="label__text">{label}</span>
      {children}
    </label>
  );
}

export function CardholderInput({ value, onChange }) {
  return (
    <Label label="CARDHOLDER NAME">
      <input
        type="text"
        className="input"
        placeholder="e.g. Jane Appleseed"
        minLength={3}
        maxLength={30}
        value={value}
        onChange={(e) => onChange(e)}
      />
    </Label>
  );
}

export function CardNumberInput({ value, onChange }) {
  const LabelAlert = () => {
    return <span className="label__alert">Wrong format, invalid number</span>;
  };
  return (
    <Label label="CARD NUMBER">
      <input
        type="text"
        className="input"
        placeholder="e.g. 1234 5678 9123 0000"
        maxLength={23}
        value={value[0]}
        onChange={(e) => onChange(e)}
      />
      {value[1] === false && <LabelAlert />}
    </Label>
  );
}

export function CardDateInput({ value }) {
  return (
    <Label label="Exp. Date (MM/YY)">
      <div className="form__date">
        <input
          type="number"
          className="input"
          placeholder="MM"
          min={1}
          max={12}
          value={value.cardMonth}
        />
        <input
          type="number"
          className="input"
          placeholder="YY"
          min={21}
          max={99}
          value={value.cardYear}
        />
      </div>
    </Label>
  );
}

export function CvcInput({ value, onChange }) {
  return (
    <Label label="CVC">
      <input
        type="text"
        className="input"
        placeholder="e.g. 123"
        maxLength={3}
        value={value}
        onChange={(e) => onChange(e)}
      />
    </Label>
  );
}
