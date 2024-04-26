import "./input.css";

function Label({ label, children }) {
  return (
    <label className="label">
      <span className="label__text">{label}</span>
      {children}
    </label>
  );
}

function LabelAlert({ children }) {
  return <span className="label__alert">{children}</span>;
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
        value={value[0]}
        onChange={(e) => onChange(e)}
      />
      {value[1] === false && <LabelAlert>Can’t be blank</LabelAlert>}
    </Label>
  );
}

export function CardNumberInput({ value, onChange }) {
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
      {value[1] === false && (
        <LabelAlert>Wrong format, invalid number</LabelAlert>
      )}
    </Label>
  );
}

export function CardDateInput({ value, onSelectMonth, onSelectYear }) {
  return (
    <Label label="Exp. Date (MM/YY)">
      <div className="form__date">
        <select
          className={
            value.cardMonth === "MM" ? "input input--placeholder" : "input"
          }
          defaultValue={value.cardMonth[0]}
          onChange={(e) => onSelectMonth(e)}
        >
          <option value="MM" disabled>
            MM
          </option>
          <option value={"01"}>01</option>
          <option value={"02"}>02</option>
          <option value={"03"}>03</option>
          <option value={"04"}>04</option>
          <option value={"05"}>05</option>
          <option value={"06"}>06</option>
          <option value={"07"}>07</option>
          <option value={"08"}>08</option>
          <option value={"09"}>09</option>
          <option value={"10"}>10</option>
          <option value={"11"}>11</option>
          <option value={"12"}>12</option>
        </select>

        <select
          className={
            value.cardYear === "YY" ? "input input--placeholder" : "input"
          }
          defaultValue={value.cardYear[0]}
          onChange={(e) => onSelectYear(e)}
        >
          <option value="YY" disabled>
            YY
          </option>
          <option value={"24"}>24</option>
          <option value={"25"}>25</option>
          <option value={"26"}>26</option>
          <option value={"27"}>27</option>
          <option value={"28"}>28</option>
          <option value={"29"}>29</option>
          <option value={"30"}>30</option>
          <option value={"31"}>31</option>
          <option value={"32"}>32</option>
          <option value={"33"}>33</option>
          <option value={"34"}>34</option>
          <option value={"35"}>35</option>
        </select>
      </div>
      {value.cardMonth[1] === false || value.cardYear[1] === false ? (
        <LabelAlert>Can’t be blank</LabelAlert>
      ) : (
        ""
      )}
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
        value={value[0]}
        onChange={(e) => onChange(e)}
      />
      {value[1] === false && <LabelAlert>Wrong input</LabelAlert>}
    </Label>
  );
}
