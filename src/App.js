import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center">Live Weather</h1>
        <Weather defaultCity="New York" />
        <footer>
          <p>
            Coded by Danielle Casa and open-sourced on{" "}
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
