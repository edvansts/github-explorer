import React from "react";
import { FiChevronRight} from 'react-icons/fi'

import { Title, Form, Repositories } from "./styles";
import logoImg from "./../../assets/logo.svg";

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github.</Title>
      <Form>
        <input placeholder='Digite o nome do repositório...'></input>
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href='teste'>
          <img src="https://avatars0.githubusercontent.com/u/53586642?s=460&u=66ac9f0aeeae4ce207056643273308559abd79d7&v=4" 
          alt="Edvan Santos"/>
          <div>
            <strong>typescript_initial</strong>
            <p>Repository with learnings for Typescript</p>
          </div>
          <FiChevronRight size={24} />
        </a>
        <a href='teste'>
          <img src="https://avatars0.githubusercontent.com/u/53586642?s=460&u=66ac9f0aeeae4ce207056643273308559abd79d7&v=4" 
          alt="Edvan Santos"/>
          <div>
            <strong>typescript_initial</strong>
            <p>Repository with learnings for Typescript</p>
          </div>
          <FiChevronRight size={24} />
        </a>
        <a href='teste'>
          <img src="https://avatars0.githubusercontent.com/u/53586642?s=460&u=66ac9f0aeeae4ce207056643273308559abd79d7&v=4" 
          alt="Edvan Santos"/>
          <div>
            <strong>typescript_initial</strong>
            <p>Repository with learnings for Typescript</p>
          </div>
          <FiChevronRight size={24} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
