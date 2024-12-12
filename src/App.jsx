import { ReactLenis, useLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import "./App.css";
import { Profile } from "./components/Profile/Profile";
import { Experience } from "./components/Experience/Experience";

function App() {
  const lenis = useLenis(({ scroll }) => {});

  return (
    <ReactLenis>
      <main className="min-h-screen max-w-[1120px] space-y-36 lg:mx-auto lg:space-y-48 dark:text-[#fafaf9]">
        <Profile />
        <Experience />
        <section id="projects">{/* Projects */}</section>
        <section id="about">{/* About */}</section>
        <section id="contact">{/* Contact */}</section>
      </main>
    </ReactLenis>
  );
}

export default App;
