import { experiences } from "../../data/workExperiences";
import { ArrowUpRight } from "lucide-react";

function capitalizeFirstLetter(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export const Experience = () => (
  <section id="experience" className="px-12">
    <h2 className="font-header inline-flex w-full items-center text-pretty text-2xl font-semibold opacity-85">
      <span>Dónde he trabajado</span>
      <span className="bg-raisin-black ml-[0.6em] mt-1 h-0.5 grow translate-y-full"></span>{" "}
    </h2>
    <div>
      <ul>
        {experiences.map((experience, index) => (
          <li key={index}>
            <a href={experience.companyLink} target="_blank">
              <div>{/* Indicator */}</div>
              <div>
                <article>
                  <header>
                    <h3>
                      <span>{experience.title}</span>
                      <span>·</span>
                      <span>{experience.company}</span>
                      <ArrowUpRight className="inline-block" color="#fafaf9" />
                    </h3>
                    <div>
                      <span>{experience.location}</span>
                      <span>|</span>
                      <span>
                        <time dateTime={experience.startDate}>
                          {capitalizeFirstLetter(
                            new Intl.DateTimeFormat("es-ES", {
                              month: "long",
                              year: "numeric",
                            }).format(new Date(experience.startDate)),
                          )}
                        </time>
                        <span> - </span>
                        <time dateTime={experience.endDate}>
                          {experience.endDate
                            ? capitalizeFirstLetter(
                                new Intl.DateTimeFormat("es-ES", {
                                  month: "long",
                                  year: "numeric",
                                }).format(new Date(experience.endDate)),
                              )
                            : "Actualidad"}
                        </time>
                      </span>
                    </div>
                  </header>
                </article>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
