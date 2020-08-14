import React, { useState, useEffect, FormEvent } from "react";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import api from "./../../services/api";
import { Title, Form, Repositories, Error } from "./styles";
import logoImg from "./../../assets/logo.svg";

// interface Owner {
//   login: string,
//   id: number,
//   avatar_url: string,
//   url: string,
//   type: string,
// }

interface Repository {
  full_name: string;
  url: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem(
      "@Github-explorer:repositories"
    );

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    } else return [];
  });
  const [newRepositorio, setNewRepositorio] = useState("");
  const [inputError, setInputError] = useState("");

  useEffect(() => {
    localStorage.setItem(
      "@Github-explorer:repositories",
      JSON.stringify(repositories)
    );
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    // Adição de um novo repositório
    // Consumir api do github
    // Salvar novo repositório no estado
    event.preventDefault();

    if (!newRepositorio) {
      setInputError("Digite autor/repositorio para realizar a busca.");
      return;
    }

    try {
      const response = await api.get<Repository>(`/repos/${newRepositorio}`);
      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewRepositorio("");
      setInputError("");
    } catch (error) {
      setInputError("Erro na busca por esse repositório");
    }
  }

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github.</Title>
      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepositorio}
          onChange={(e) => setNewRepositorio(e.target.value)}
          placeholder="Digite o nome do repositório..."
        ></input>
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map((repository) => (
          <Link
            key={repository.full_name}
            to={`repository/${repository.full_name}`}
          >
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={24} />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
