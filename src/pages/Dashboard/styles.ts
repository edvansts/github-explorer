import styled, { css } from "styled-components";
import { shade } from "polished";
// Template literals ``

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;

  margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    height: 70px;
    border: 0px;
    padding: 0 24px;
    border-radius: 5px 0px 0px 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;

    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    color: #fff;
    font-weight: bold;
    border: 0px;
    border-radius: 0px 5px 5px 0px;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, "#04d361")};
    }
  }
`;

export const Repositories = styled.div`
  max-width: 700px;
  margin-top: 80px;

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

    img {
      width: 70px;
      height: 70px;
      border-radius: 50%;
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
      /* icone sempre é datado como svg */
    }
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

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;
