import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  border-radius: 0.50rem 0.50rem 1rem 1rem;
  padding-top: 2rem;
  height: 100%;

  > img {
    position: absolute;
    top: 0;
    right: 1rem;
    width: 3rem;
    height: 3rem;
  }

  article {
    position: relative;
    background-color: var(--dark-blue);
    color: #fff;
    padding: 1.5rem;
    border-radius: 0.50rem;
    width: 100%;
    height: 100%;
    transition: background-color 200ms;

    &:hover {
      filter: brightness(1.7);
      cursor: pointer;
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      @media screen and (min-width: 900px) {
        width: 11rem;
      }
        
      strong {
        font-weight: 500;
      }

      button {
        background-color: var(--dark-blue);
        border: none;

        &:hover img {
          color: #fff;
        }

        > img {
          transition:  200ms;
        }
      }
    }     
    
    h2 {
      font-size: 3rem;
      font-weight: 300;
      margin-top: 1rem;
    }

    span {
      font-size: 0.8rem;
      width: 1.1667rem;
      height: 0.2778rem;
      color: var(--pale-blue);
    }
  }
`;