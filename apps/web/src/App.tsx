import React, { useEffect, useState } from "react";
import { Link } from "ui";
import "./App.css";
import type { AxiosResponse } from "axios";
import client from "./client";

function App(): JSX.Element {
  const [visits, setVisits] = useState("");

  const visit = (): void => {
    const res = client.get("http://localhost:4000");
    res
      .then((v: AxiosResponse<string>) => {
        setVisits(v.data);
      })
      .catch(() => {
        setVisits("");
      });
  };

  useEffect(() => {
    visit();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header">
          {visits}
          <div className="Turborepo">Turborepo Example</div>
        </h1>
        <button onClick={visit} type="button">
          방문
        </button>
        <div>
          <Link className="App-link" href="https://turbo.build/repo">
            Turborepo Docs
          </Link>
          <span> | </span>
          <Link className="App-link" href="https://reactjs.org">
            React Docs
          </Link>
        </div>
      </header>
    </div>
  );
}

export default App;
