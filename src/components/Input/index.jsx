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

function InpputElement({ type, placeholder }) {
  let { inputType, min, max } = inputTypes[type];
  if (inputType === "number") {
    return (
      <input
        type={inputType}
        className="input"
        placeholder={placeholder}
        min={min}
        max={max}
        required
      />
    );
  } else if (inputType === "text") {
    return (
      <input
        type={inputType}
        className="input"
        placeholder={placeholder}
        minLength={min}
        maxLength={max}
        required
      />
    );
  }
}

function Input({ label = false, placeholder, type }) {
  return (
    <label className={label ? "label" : "label label__blank"}>
      <span className="label__text">{label}</span>
      <InpputElement type={type} placeholder={placeholder} />
    </label>
  );
}

export default Input;
