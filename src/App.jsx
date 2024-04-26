import { useState } from "react";
import "./App.css";

import Form from "./components/Form";
import Modal from "./components/Modal";
import { FrontCard, BackCard } from "./components/Card";

function App() {
  const [formValidated, setFormValidated] = useState(false);
  const [formData, setFormData] = useState({
    cardHolder: ["", null],
    cardNumber: ["", null],
    // TODO: señalizar cual dato falta en caso de aun no haber sido completado
    cardMonth: ["MM", null], //falta
    cardYear: ["YY", null], //falta
    cardCvc: ["", null],
  });
  return (
    <main className="main">
      <section className="section section--cards">
        <div className="wrapper">
          <FrontCard formData={formData} />
          <BackCard formData={formData} />
        </div>
      </section>
      <section className="section section--body">
        {formValidated ? (
          <Modal />
        ) : (
          <Form
            setFormValidated={setFormValidated}
            formData={formData}
            setFormData={setFormData}
          />
        )}
      </section>
    </main>
  );
}

export default App;
