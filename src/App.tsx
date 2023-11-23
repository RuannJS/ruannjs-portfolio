import { useState } from "react";
import { brand } from "./data/brand";
import { colors } from "./data/gradients";
import { Project, projects } from "./data/projects";
import { socials } from "./data/socials";

function App() {
  const [gradientCounter, setGradientCounter] = useState(0);
  const [gradient, setGradient] = useState(colors[gradientCounter]);

  const changeGradient = () => {
    if (gradientCounter < 3) {
      setGradientCounter((currentState) => {
        const newState = currentState + 1;
        setGradient(colors[newState]);
        return newState;
      });
    } else {
      setGradientCounter(() => {
        const newState = 0;
        setGradient(colors[newState]);
        return newState;
      });
    }
  };

  const changeColor = () => {
    if (isProject) {
      setIsProject(false);
    }

    changeGradient();
  };

  const [isProject, setIsProject] = useState<boolean>(false);
  const [currentProject, setCurrentProject] = useState<Project>();

  const changeProject = (project: Project) => {
    setIsProject(true);
    setCurrentProject(project);
    changeGradient();
  };

  return (
    <main className="text-gray-200 font-light p-5 flex flex-col gap-5 md:gap-10">
      <div className="flex flex-row justify-between">
        <img
          onClick={changeColor}
          className={`${gradient} md:w-32`}
          src={brand.src}
          width={brand.width}
          alt="RuannJS Logo"
        />
        <div className="flex flex-row gap-10 md:gap-20 items-center mr-2">
          {socials.map((social) => {
            if (social.name === "gmail") {
              return (
                <a
                  key={social.name}
                  className=""
                  target="_blank"
                  href={`mailto:${social.link}`}
                >
                  <img
                    className="md:w-16"
                    width={30}
                    src={social.icon}
                    alt="social"
                  />
                </a>
              );
            }
            return (
              <a
                key={social.name}
                className=""
                target="_blank"
                href={social.link}
              >
                <img
                  className="md:w-16"
                  width={30}
                  src={social.icon}
                  alt="social"
                />
              </a>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <span className="text-gray-200 font-black text-5xl md:text-7xl">
          Welcome.
        </span>
        <div className="flex flex-row items-start gap-3">
          <span className={`${gradient} pb-56 animate-pulse`}></span>
          <div className="flex flex-col gap-5 text-sm text-gray-200 font-light md:pe-96">
            {isProject ? (
              <div className="flex flex-col text-base gap-5 text-slate-200 sm:text-lg md:text-xl">
                <span>{currentProject?.description}</span>
                {currentProject?.type === "front" ? (
                  <>
                    <a
                      target="_blank"
                      className={`${gradient} bg-[length:100%_1px] bg-no-repeat bg-bottom max-w-max hover:text-xl cursor-pointer font-bold sm:text-2xl md:text-3xl`}
                      href={currentProject.link}
                    >
                      View Site
                    </a>
                    <div className="flex flex-row gap-5 md:gap-10">
                      {currentProject.stack.map((stack) => {
                        return (
                          <span
                            key={stack}
                            className={`${gradient} bg-[length:100%_1px] bg-no-repeat bg-bottom max-w-max text-xs font-bold sm:text-base md:text-lg`}
                          >
                            {stack}
                          </span>
                        );
                      })}
                    </div>
                  </>
                ) : (
                  <>
                    <a
                      target="_blank"
                      className={`${gradient} bg-[length:100%_1px] bg-no-repeat bg-bottom max-w-max hover:text-xl cursor-pointer font-bold sm:text-2xl md:text-3xl`}
                      href={currentProject?.link}
                    >
                      View Repository
                    </a>
                    <div className="flex flex-row gap-5 flex-wrap md:gap-10 md:flex-nowrap">
                      {currentProject?.stack.map((stack) => {
                        return (
                          <span
                            key={stack}
                            className={`${gradient} bg-[length:100%_1px] bg-no-repeat bg-bottom max-w-max text-xs font-bold sm:text-base md:text-lg`}
                          >
                            {stack}
                          </span>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className="flex flex-col gap-5 text-sm text-gray-200 font-light sm:text-lg md:text-xl">
                <span>
                  My name is Ruann Fagundes. I'm a full-stack developer based in
                  Brazil.
                </span>
                <span>
                  I'm eagerly looking for opportunities in the tech industry as
                  a trainee or junior developer to kickstart my career.
                </span>
                <span>
                  While I may not have formal work experience, I've dedicated
                  three years to self-study and practical projects, building a
                  strong foundation in front and backend development.
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="">
        <span className="text-4xl font-bold text-gray-200 md:text-5xl">
          Projects
        </span>

        <div className="flex flex-col bg-slate-800 mt-5 gap-5 text-gray-200 font-light text-base sm:text-xl md:text-2xl">
          {projects.map((project) => {
            if (project.type === "front") {
              return (
                <div
                  key={project.name}
                  onClick={() => changeProject(project)}
                  className="flex flex-col"
                >
                  <span className="text-xs text-slate-400 sm:text-sm">
                    Frontend
                  </span>
                  <span
                    className={`${gradient} bg-[length:100%_1px] bg-no-repeat bg-bottom max-w-max   cursor-pointer`}
                  >
                    {project.name}
                  </span>
                </div>
              );
            } else {
              return (
                <div
                  key={project.name}
                  onClick={() => changeProject(project)}
                  className="flex flex-col"
                >
                  <span className="text-xs text-slate-400 sm:text-sm">
                    Backend
                  </span>
                  <span
                    className={`${gradient} bg-[length:100%_1px] bg-no-repeat bg-bottom max-w-max   cursor-pointer`}
                  >
                    {project.name}
                  </span>
                </div>
              );
            }
          })}
        </div>
      </div>
    </main>
  );
}

export default App;
