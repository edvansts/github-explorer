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
  url: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  watchers_count: number;
  issues_url: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  body: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<Repository>();
  const [openIssues, setOpenIssues] = useState<Issue[]>([]);
  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    api
      .get<Repository>(`/repos/${params.repository}`)
      .then((response) => {
        const repository = response.data;

        setRepository(repository);
      })
      .catch((error) => {
        console.log(error);
        window.location.assign(window.location.origin);
      });
  }, [params]);

  useEffect(() => {
    api
      .get<Issue[]>(`/repos/${params.repository}/issues`)
      .then((response) => {
        const openIssues = response.data;
        setOpenIssues(openIssues);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params]);
  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={22} />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img
            src={repository?.owner.avatar_url}
            alt={repository?.owner.login}
          />
          <div>
            <strong>{repository?.full_name}</strong>
            <p>{repository?.description}</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>{repository?.stargazers_count}</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>{repository?.forks_count}</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>{repository?.open_issues_count}</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        {openIssues &&
          openIssues.map((issue) => (
            <Link key={issue.id} to="">
              <div>
                <strong>{issue.title}</strong>
                <p>{issue.user.login}</p>
              </div>
              <FiChevronRight size={24} />
            </Link>
          ))}
      </Issues>
    </>
  );
};

export default Repository;
