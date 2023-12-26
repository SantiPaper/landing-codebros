import { StyledNavbar } from "./style";
import image from "../../assets/1005141.png";

export const NavBar = () => {
  return (
    <StyledNavbar>
      <img src={image} alt="icon" />
      <ul>
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#">Sobre nosotros</a>
        </li>
        <li>
          <a href="#">Referencias</a>
        </li>
      </ul>
    </StyledNavbar>
  );
};
