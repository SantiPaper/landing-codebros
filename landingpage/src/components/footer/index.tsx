import { StyledFooter } from "./style";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <StyledFooter>
      <ul>
        <li>© 2024 Codebros. Reservados todos los derechos</li>
        <li>
          <ul>
            <li>
              <a href="">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="">
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </StyledFooter>
  );
};
