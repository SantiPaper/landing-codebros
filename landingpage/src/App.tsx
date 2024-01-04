import { Container } from "./components/container";
import { NavBar } from "./components/navbar";
import { Hero } from "./components/Hero";
import "./index.css";
import { Services } from "./components/Services";
import { Clients } from "./components/Clients";

function App() {
  return (
    <Container>
      <NavBar />
      <main>
        <Hero />
        <Services />
        <Clients />
      </main>
    </Container>
  );
}

export default App;
