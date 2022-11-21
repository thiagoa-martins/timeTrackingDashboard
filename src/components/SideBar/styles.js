import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-row: 1 / 3;

  background-color: var(--dark-blue);
  border-radius: 0.5rem;
  color: #fff;

  > div {
    padding: 1.5rem;
    background-color: var(--blue);
    border-radius: 0.5rem;

    > img {
      width: 100px;
      height: 100px;
      border: 2px solid #fff;
      border-radius: 50%;
      box-shadow: 0 1px 5px var(--pale-blue);
    }

    > div {
      margin-top: 2rem;

      span {
        color: var(--pale-blue);
        font-weight: 400;
      }

      h1 {
        font-weight: 300;
      }
    }
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;

    padding: 1.5rem;

    li {
      display: flex;

      button {
        border: none;
        background-color: var(--dark-blue);
        color: var(--pale-blue);
        font-size: 18px;

        &:hover {
          color: #fff;
        }
      }

      .btn-weekly {
        color: ${({ weekly }) => (weekly ? "#fff" : "var(--pale-blue)")};
      }

      .btn-daily {
        color: ${({ daily }) => (daily ? "#fff" : "var(--pale-blue)")};
      }
      .btn-monthly {
        color: ${({ monthly }) => (monthly ? "#fff" : "var(--pale-blue)")};
      }

      & + li {
        margin-top: 1rem;
      }
    }
  }
`;
