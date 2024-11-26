import { useState } from "react";

import { BriefcaseBusiness, FolderCode, UserRound, Mail } from "lucide-react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <div>
          <nav>
            <ul>
              <li>
                <BriefcaseBusiness />
                <a href="#experience">Experience</a>
              </li>
              <li>
                <FolderCode />
                <a href="#projects">Projects</a>
              </li>
              <li>
                <UserRound />
                <a href="#about">About</a>
              </li>
              <li>
                <Mail />
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section>{/* Experience */}</section>
        <section>{/* Projects */}</section>
        <section>{/* About */}</section>
        <section>{/* Contact */}</section>
      </main>
    </>
  );
}

export default App;
