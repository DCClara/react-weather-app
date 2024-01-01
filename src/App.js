import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Fort Lauderdale" />
        <footer>
          <p>
            Coded by{" "}
            <a
              href="https://www.shecodes.io/graduates/91341-danielle-casa"
              target="blank"
              rel="noreferrer"
            >
              Danielle Casa
            </a>{" "}
            and open-sourced on{" "}
            <a
              href="https://github.com/DCClara/react-weather-app"
              target="blank"
              rel="noreferrer"
            >
              Github
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
