import { StyledClients } from "./style";
import { Client } from "../Client";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

export const Clients = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <StyledClients>
      <h2>Clientes</h2>
      <div data-aos="zoom-in">
        <Client />
        <Client />
        <Client />
      </div>
    </StyledClients>
  );
};
