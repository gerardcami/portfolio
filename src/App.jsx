import { ReactLenis, useLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import "./App.css";
import { StatusIndicator } from "./components/StatusIndicator";
import { SocialLinks } from "./components/SocialLinks";
import { links } from "./data/socialLinks";

function App() {
  const lenis = useLenis(({ scroll }) => {});

  return (
    <ReactLenis>
      <main className="min-h-screen max-w-[1120px] lg:mx-auto">
        <section className="mt-16 px-12 sm:mt-32">
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
          <StatusIndicator text="Disponible para trabajar" />
          <div className="mt-4">
            <SocialLinks links={links} />
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
