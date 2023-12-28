import { useEffect } from "react";
import { StyledServices } from "./style";
import Aos from "aos";
import "aos/dist/aos.css";
import { CardService } from "../CardService";
import { Animation } from "../animation";

export const Services = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  //const [service, setService] = useState({});
  return (
    <StyledServices>
      <div className="title-section">
        <h2>Nuestros servicios</h2>
        <p>
          *Para tener una explicacion mas al detalle de cada servicio toque el
          boton ver mas*
        </p>
      </div>
      <div className="services">
        <CardService title="Figma to code" />
        <CardService title="Landing Pages" />
        <CardService title="Look your code" />
      </div>
      <Animation />
    </StyledServices>
  );
};
