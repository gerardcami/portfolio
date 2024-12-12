import { WorkStatusIndicator } from "./WorkStatusIndicator";
import { SocialLinks } from "./SocialLinks";
import { links } from "../../data/socialLinks";

export const Profile = () => (
  <section className="mt-16 space-y-4 px-12 sm:mt-32">
    <div>
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
      <div className="mt-2 opacity-90">
        <span className="font-header text-2xl font-bold tracking-wide">
          Gerard Camí
        </span>
        <div className="mt-1 opacity-80">
          Desarrollador frontend especializado en React.
          <br />
          Actualmente en busca de empleo.
        </div>
      </div>
    </div>
    <WorkStatusIndicator status="looking" />
    <SocialLinks links={links} />
  </section>
);
