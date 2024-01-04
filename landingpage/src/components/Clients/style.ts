import {styled} from "styled-components"

export const StyledClients = styled.article`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 4rem;
padding: 10rem 2rem 10rem 2rem;
color: var(--color);

h2{
  font-size: 6rem;
}


& > div{
  display: flex;
  gap: 4rem;
}

`