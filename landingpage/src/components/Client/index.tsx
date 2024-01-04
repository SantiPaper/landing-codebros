import { StyledClient } from "./style";
import comilla from "../../assets/cita.png";

export const Client = () => {
  return (
    <StyledClient>
      <div>
        <img width={40} src={comilla} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eius sunt
          perspiciatis, reprehenderit repellendus quasi facere ullam, debitis
          repudiandae modi consectetur ut error hic fugit, culpa mollitia earum
          labore voluptates!
        </p>
        <div>
          <img
            width={70}
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt="Profile pic"
          />
          <h3>Santiago</h3>
        </div>
      </div>
    </StyledClient>
  );
};
