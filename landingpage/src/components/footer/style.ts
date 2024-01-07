import styled from "styled-components";

export const StyledFooter = styled.footer`
background-color: #19192F;
height: 25rem;
display: flex;
justify-content: center;
align-items: center;

& > ul{
  display: flex;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 3rem;
  flex-direction: column;
  
  & > li{
    display: flex;
    justify-content: center;
    min-width: 40rem  ;
    list-style: none;
    & > ul{
      display: flex ;
      gap: 3rem;
      
      li{
        font-size: 2.4rem;
        list-style: none;

        a{
          color: var(--color);
        }
      }
    }
  }
}
`