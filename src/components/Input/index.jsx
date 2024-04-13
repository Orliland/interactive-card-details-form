import "./input.css";

function Input() {
  return (
    <label className="label">
      <span className="label__text">CARDHOLDER NAME</span>
      <input type="text" className="input" placeholder="e.g. Jane Appleseed" />
    </label>
  );
}

export default Input;
