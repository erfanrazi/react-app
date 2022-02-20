import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tehran" />

        <footer>
          This project was coded by <em>Elham Akbari</em> and is{" "}
          <a
            href="https://github.com/elhamiakbari/react-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
        </footer>
      </div>
    </div>
  );
}
