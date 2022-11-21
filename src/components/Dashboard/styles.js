import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 1rem;

  @media screen and (max-width: 900px) {
    display: block;
    padding: 8rem 1rem;
  }

  @media screen and (max-width: 672px) {
    height: auto;
  }
`;

export const Content = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 1.5rem;
  max-width: 1120px;

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;
