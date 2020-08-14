import React, { useState, useEffect } from "react";
import { useRouteMatch, Link } from "react-router-dom";

import { Header, RepositoryInfo, Issues } from "./styles";
import logoImg from "./../../assets/logo.svg";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import api from "./../../services/api";

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  html_url: string;
  title: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<Repository | null>(null);
  const [openIssues, setOpenIssues] = useState<Issue[]>([]);
  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    api
      .get<Repository>(`/repos/${params.repository}`)
      .then((response) => {
        const repository = response.data;

        setRepository(repository);
      })
      .catch(() => window.location.assign(window.location.origin));

    api.get<Issue[]>(`/repos/${params.repository}/issues`).then((response) => {
      const openIssues = response.data;
      setOpenIssues(openIssues);
    });
    // Fazendo a chamada via função assincrona
    // async function loadData(): Promise<void> {
    //   const [repository, openIssues] = await Promise.all([
    //     api.get<Repository>(`/repos/${params.repository}`),
    //     api.get<Issue[]>(`/repos/${params.repository}/issues`),
    //   ]);
    //   console.log(repository)
    //   console.log(openIssues)
    // }
    // loadData();
  }, [params.repository]);

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={22} />
          Voltar
        </Link>
      </Header>

      {repository && (
        <RepositoryInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues abertas</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}

      <Issues>
        {openIssues &&
          openIssues.map((issue) => (
            <a key={issue.id} href={issue.html_url}>
              <div>
                <strong>{issue.title}</strong>
                <p>{issue.user.login}</p>
              </div>
              <FiChevronRight size={24} />
            </a>
          ))}
      </Issues>
    </>
  );
};

export default Repository;
