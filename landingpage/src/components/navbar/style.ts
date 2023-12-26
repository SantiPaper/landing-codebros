import styled from "styled-components";

export const StyledNavbar = styled.header`
display: flex;
justify-content: space-between;
min-height: 15vh;
align-items: center;


img{
    width: 7rem;
    padding: 0;
}

ul{
    display: flex;
    gap: 1rem;

    li{
        font-size: 1.8rem;
        list-style: none;
        padding: 0 2rem;

        a{
            text-decoration: none;
            color: var(--color);
        }
    }
}
`