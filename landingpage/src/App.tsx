import { Container } from "./components/container";
import { NavBar } from "./components/navbar";
import { Hero } from "./components/Hero";
import "./index.css";

function App() {
  return (
    <Container>
      <NavBar />
      <main>
        <Hero />
      </main>
    </Container>
  );
}

export default App;
