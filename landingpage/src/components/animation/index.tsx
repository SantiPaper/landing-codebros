import { StyledAnimation } from "./style";
import Aos from "aos";

type Props = {
  title?: string;
  description?: string;
};

export const Animation = ({ title, description }: Props) => {
  Aos.init();
  return (
    <StyledAnimation data-aos="fade-down">
      <h3>{title}</h3>
      <p>{description}</p>
    </StyledAnimation>
  );
};
