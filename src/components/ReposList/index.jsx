import { useEffect, useState } from "react";

import styles from "./ReposList.module.css";

// eslint-disable-next-line react/prop-types
const ReposList = ({ nomeUsuario }) => {
  const [repos, setRepos] = useState([]);
  const [estaCarregando, setEstaCarregando] = useState(true);

  useEffect(() => {
    setEstaCarregando(true);
    fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
      .then((res) => res.json())
      .then((resJson) => {
        setTimeout(() => {
          setEstaCarregando(false);
          console.log(resJson);
          setRepos(resJson);
        }, 3000);
      });
  }, [nomeUsuario]);

  return (
    <div className="container">
      {estaCarregando ? (
        <h1>Carregando...</h1>
      ) : (
        <ul className={styles.list}>
          {/* {repos.map(repositorio => ( */}
          {repos.map(({ id, name, language, html_url }) => (
            <li key={id} className={styles.listItem}>
              <div className={styles.ItemName}>
                <b>Nome:</b> {name} <br />
              </div>
              <div className={styles.ItemLanguange}>
                <b>Linguagem:</b> {language} <br />
              </div>
              <a
                target="_blank"
                href={html_url}
                rel="noreferrer"
                className={styles.ItemLink}
              >
                Visitar no Github
              </a>{" "}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReposList;
