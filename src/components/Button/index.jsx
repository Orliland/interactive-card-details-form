import "./button.css";

function Button({ children = "Continue" }) {
  // TODO: Add an onClick event to the button
  return <button className="button">{children}</button>;
}

export default Button;
