import { BriefcaseBusiness, Code, UserRound, Mail } from "lucide-react";
import "./App.css";

function App() {
  return (
    <>
      <header className="sticky z-50 flex min-h-[72px] content-center overflow-x-auto">
        <div className="mx-auto flex max-w-screen-xl items-center justify-between px-6 py-4 md:justify-around">
          <nav className="hidden w-full justify-between md:flex">
            <ul className="flex items-center gap-8 text-sm font-medium">
              <li className="inline-flex items-center justify-center gap-x-2 text-sm font-medium">
                <BriefcaseBusiness />
                <a href="#experience">Experience</a>
              </li>
              <li className="inline-flex items-center justify-center gap-x-2 text-sm font-medium">
                <Code />
                <a href="#projects">Projects</a>
              </li>
              <li className="inline-flex items-center justify-center gap-x-2 text-sm font-medium">
                <UserRound />
                <a href="#about">About</a>
              </li>
              <li className="inline-flex items-center justify-center gap-x-2 text-sm font-medium">
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
