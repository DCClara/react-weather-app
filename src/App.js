import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center">Live Weather</h1>
        <h6 className="text-center">
          <i class="fa-brands fa-react"></i> with React
        </h6>
        <Weather defaultCity="New York" />
        <footer>
          <p>
            Coded by{" "}
            <a href="https://www.shecodes.io/graduates/91341-danielle-casa">
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
