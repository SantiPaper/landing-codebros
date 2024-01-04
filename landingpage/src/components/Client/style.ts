import {styled} from "styled-components"

export const StyledClient = styled.article`
background-color: beige;
width: 35em;
display: flex;
align-items: flex-end;
color: var(--color);

& > div{
  background-color: #1F2065;
  display: flex;
  flex-direction: column;
  padding: 4rem;
  justify-content: center;
  gap: 4rem;
  align-items: center;

  & > div{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    font-size: 1.3rem;
  }

  p{
    font-size: 1.3rem;
    line-height: 1.6;
    text-align: center;
  }

  img{
    border-radius: 99rem;
  }
}
`