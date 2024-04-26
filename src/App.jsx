import { useState } from "react";
import "./App.css";

import Form from "./components/Form";
import Modal from "./components/Modal";
import { FrontCard, BackCard } from "./components/Card";

function App() {
  const [formValidated, setFormValidated] = useState(false);

  return (
    <main className="main">
      <section className="section section--cards">
        <div className="wrapper">
          <FrontCard />
          <BackCard />
        </div>
      </section>
      <section className="section section--body">
        {formValidated ? (
          <Modal />
        ) : (
          <Form setFormValidated={setFormValidated} />
        )}
      </section>
    </main>
  );
}

export default App;
