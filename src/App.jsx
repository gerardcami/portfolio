import { ReactLenis, useLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import {
  BriefcaseBusiness,
  Code,
  UserRound,
  Mail,
  Linkedin,
  Github,
  Scroll,
} from "lucide-react";
import "./App.css";

function App() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  return (
    <ReactLenis>
      {/* <header className="sticky z-50 flex min-h-[72px] content-center overflow-x-auto text-white">
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
      </header> */}
      <main>
        <section className="mt-16 sm:mt-32 sm:px-8">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-full">
                <div className="max-w-xl">
                  <header>
                    <h1 className="sr-only">Gerard Camí</h1>
                    <div className="block w-16 rounded-full bg-zinc-100 object-cover p-0.5 dark:bg-zinc-800">
                      <img
                        className="w-16 rounded-full bg-zinc-100 object-cover dark:bg-zinc-800"
                        src="/avatar.svg"
                        alt="Gerard Camí's Avatar"
                      />
                    </div>
                  </header>
                  <div className="mt-2 text-base text-neutral-700 dark:text-white/80">
                    <span className="text-2xl font-bold text-neutral-900 dark:text-white">
                      Gerard Camí
                    </span>
                    <br />
                    Desarrollador frontend especializado en React.
                    <br />
                    Actualmente en busca de empleo.
                  </div>
                  <div className="mt-4 text-neutral-900 dark:text-white">
                    <span className="inline-flex items-center rounded-md border border-[#FFFFFF1A] px-2 py-0 text-xs font-semibold">
                      <span className="mr-1.5 flex h-3 w-3 items-center">
                        <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-lime-400 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-400"></span>
                      </span>
                      Disponible para trabajar
                    </span>
                  </div>
                  <div className="mt-4">
                    <ul className="flex items-center justify-start gap-4">
                      <li className="group relative rounded-lg p-2 hover:bg-[#292524]">
                        <a
                          href=""
                          target="_blank"
                          className="text-foreground/80 hover:bg-accent hover:text-accent-foreground/80 rounded-lg transition duration-200"
                        >
                          <Linkedin color="#a1a1aa" />
                        </a>
                        <span className="absolute left-1/2 top-full mt-2 w-max -translate-x-1/2 rounded bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          LinkedIn
                          <span className="absolute bottom-full left-1/2 mt-1 h-0 w-0 -translate-x-1/2 border-b-4 border-l-4 border-r-4 border-transparent border-b-black"></span>{" "}
                          {/* Flecha hacia arriba */}
                        </span>
                      </li>
                      <li className="group relative rounded-lg p-2 hover:bg-[#292524]">
                        <a href="">
                          <Github color="#a1a1aa" />
                        </a>
                        <span className="absolute left-1/2 top-full mt-2 w-max -translate-x-1/2 rounded bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          GitHub
                          <span className="absolute bottom-full left-1/2 mt-1 h-0 w-0 -translate-x-1/2 border-b-4 border-l-4 border-r-4 border-transparent border-b-black"></span>{" "}
                          {/* Flecha hacia arriba */}
                        </span>
                      </li>
                      <li className="group relative rounded-lg p-2 hover:bg-[#292524]">
                        <a href="">
                          <Mail color="#a1a1aa" />
                        </a>
                        <span className="absolute left-1/2 top-full mt-2 w-max -translate-x-1/2 rounded bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          Email
                          <span className="absolute bottom-full left-1/2 mt-1 h-0 w-0 -translate-x-1/2 border-b-4 border-l-4 border-r-4 border-transparent border-b-black"></span>{" "}
                          {/* Flecha hacia arriba */}
                        </span>
                      </li>
                      <li className="group relative rounded-lg p-2 hover:bg-[#292524]">
                        <a href="">
                          <Scroll color="#a1a1aa" />
                        </a>
                        <span className="absolute left-1/2 top-full mt-2 w-max -translate-x-1/2 rounded bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          Read.cv
                          <span className="absolute bottom-full left-1/2 mt-1 h-0 w-0 -translate-x-1/2 border-b-4 border-l-4 border-r-4 border-transparent border-b-black"></span>{" "}
                          {/* Flecha hacia arriba */}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="experience">{/* Experience */}</section>
        <section id="projects">{/* Projects */}</section>
        <section id="about">{/* About */}</section>
        <section id="contact">{/* Contact */}</section>
      </main>
    </ReactLenis>
  );
}

export default App;
