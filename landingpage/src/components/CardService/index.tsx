import { StyledCardService } from "./stlye";

type Props = {
  title: string;
};

export const CardService = ({ title }: Props) => {
  return (
    <StyledCardService>
      <h3>{title}</h3>
      <button>Ver mas</button>
    </StyledCardService>
  );
};
