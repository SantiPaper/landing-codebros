import {styled} from 'styled-components'

export const StyledCardService = styled.article`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 3rem;
width: 30rem;
height: 20rem;
border-radius: 1rem;
color: var(--bg);
background-color: var(--color);

h3{
font-size: 2.5rem;
}

button{
    padding: 1rem 2rem;
    border-radius: 1rem;
    color: var(--color);
    background-color: var(--bg);
    border: none;
    border-bottom: 2px solid #5F4721;
    cursor: pointer;
}
`