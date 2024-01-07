import { Container } from "./components/container";
import { NavBar } from "./components/navbar";
import { Hero } from "./components/Hero";
import "./index.css";
import { Services } from "./components/Services";
import { Clients } from "./components/Clients";
import { Footer } from "./components/footer";

function App() {
  return (
    <>
      <Container>
        <NavBar />
        <main>
          <Hero />
          <Services />
          <Clients />
        </main>
      </Container>
      <Footer />
    </>
  );
}

export default App;
