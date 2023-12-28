import { obj } from "../../types/cardservice";
import { StyledCardService } from "./stlye";

type Props = {
  obj: obj;
  handleService: (obj: obj) => void;
};

export const CardService = ({ obj, handleService }: Props) => {
  return (
    <StyledCardService>
      <h3>{obj.title}</h3>
      <button onClick={() => handleService(obj)}>Ver mas</button>
    </StyledCardService>
  );
};
