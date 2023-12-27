import {styled, keyframes} from 'styled-components'

const fadeIn = keyframes`
0%{
  opacity: 0;
}
100%{
  opacity: 1;
}
`;

export const StyledHero = styled.section`
min-height: 90vh;
min-width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-content: center;
padding: 4rem;
gap: 2rem;


h1{
    text-transform: uppercase;
    font-size: 8rem;
    animation: ${fadeIn} 600ms forwards;
    
}

p{
    width: 100%;
    max-width: 75ch;
    font-size: 1.4rem;
    margin-bottom: 4rem;
    animation: ${fadeIn} 1200ms forwards;
}

a{
    background-color: var(--color);
    padding: 1.5rem 3rem;
    border-radius: 0.5rem;
    color: black;
    font-size: 1.4rem;
    text-decoration: none;
    cursor: pointer;
    animation: ${fadeIn} 1500ms forwards;

    
}

`