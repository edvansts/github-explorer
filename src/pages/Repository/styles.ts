import styled from "styled-components";
import { shade } from "polished";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 960px;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.3s;

    &:hover {
      color: ${shade(0.3, "#A8A8B3")};
    }
  }
`;
//Manter somente 2 niveis de complexidade no maximo para styled componentes, facilitando na manuntenabilidade do codigo
export const RepositoryInfo = styled.div`
  margin-top: 70px;
  max-width: 700px;

  header {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;

    img {
      width: 84px;
      height: 84px;
      border-radius: 50%;
    }

    div {
      flex: 1;
      margin-left: 24px;

      strong {
        font-size: 26px;
        color: #3d3d4d;
      }

      p {
        font-size: 16px;
        margin-top: 4px;
        color: #a8a8b3;
      }
    }
  }

  ul {
    margin-top: 34px;
    list-style: none;
    display: flex;

    li {
      & + li {
        margin-left: 60px;
      }
      strong {
        /* display block quebra a linha */
        display: block;
        font-size: 26px;
        color: #3d3d4d;
      }

      span {
        /* display block para conseguir dar o margin-top */
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 50px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: 0.2s;

    & + a {
      margin-top: 12px;
    }

    &:hover {
      transform: translateX(10px);
    }

    div {
      margin-left: 20px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }
      p {
        font-size: 16px;
        margin-top: 4px;
        color: #a8a8b3;
      }
    }
    /* icone sempre é datado como svg */
    svg {
      margin-left: auto;
      color: #c9c9d4;
      cursor: pointer;

      &:hover {
        color: ${shade(0.3, "#c9c9d4")};
      }
    }
  }
`;
