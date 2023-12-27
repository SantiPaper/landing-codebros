import {styled} from 'styled-components'



export const StyledServices = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 6rem;
padding: 2rem 2rem 10rem 2rem;

.title-section{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    & > h2{
    font-size: 6rem;
}
}



.services{
    display: flex;
justify-content: space-around;
width: 100%;


& > div{
    width: 20rem;
    height: 10rem;
    background-color: black;
}
}
`