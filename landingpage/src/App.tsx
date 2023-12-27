import { Container } from "./components/container";
import { NavBar } from "./components/navbar";
import { Hero } from "./components/Hero";
import "./index.css";
import { Services } from "./components/Services";

function App() {
  return (
    <Container>
      <NavBar />
      <main>
        <Hero />
        <Services />
      </main>
    </Container>
  );
}

export default App;
