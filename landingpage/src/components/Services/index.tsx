import { useEffect, useState } from "react";
import { StyledServices } from "./style";
import Aos from "aos";
import "aos/dist/aos.css";
import { Animation } from "../animation";
import { CardService } from "../CardService";
import { obj } from "../../types/cardservice";

export const Services = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const [service, setService] = useState<obj>({});

  const handleService = (obj: obj) => {
    setService(obj);
  };

  return (
    <StyledServices>
      <div className="title-section">
        <h2>Nuestros servicios</h2>
        <p>
          *Para tener una explicacion mas al detalle de cada servicio toque el
          boton ver mas*
        </p>
      </div>
      <div className="services" data-aos="zoom-in">
        <CardService
          handleService={handleService}
          obj={{
            title: "Figma to code",
            description:
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis exercitationem eius perferendis, aperiam aliquid, fugiat ut facilis, laborum pariatur quis nostrum suscipit recusandae ipsum voluptates. Porro nam soluta velit at?",
          }}
        />
        <CardService
          handleService={handleService}
          obj={{
            title: "Landing pages",
            description:
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis exercitationem eius perferendis, aperiam aliquid, fugiat ut facilis, laborum pariatur quis nostrum suscipit recusandae ipsum voluptates. Porro nam soluta velit at?",
          }}
        />
        <CardService
          handleService={handleService}
          obj={{
            title: "Check your code",
            description:
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis exercitationem eius perferendis, aperiam aliquid, fugiat ut facilis, laborum pariatur quis nostrum suscipit recusandae ipsum voluptates. Porro nam soluta velit at?",
          }}
        />
      </div>
      {service.title !== undefined ? (
        <Animation title={service?.title} description={service?.description} />
      ) : null}
    </StyledServices>
  );
};
