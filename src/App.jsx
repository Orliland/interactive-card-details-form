import "./App.css";

import Form from "./components/Form";
import { FrontCard, BackCard } from "./components/Card";

function App() {
  return (
    <main className="main">
      <section className="section section--cards">
        <FrontCard />
        <BackCard />
      </section>
      <section className="section section--body">
        <Form />
      </section>
    </main>
  );
}

export default App;
