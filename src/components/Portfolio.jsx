import { FaGithub } from "react-icons/fa";

export default function Portfolio({ id }) {
  const projects = [
    {
      title: "VRO FUNREAL WEBSITE",
      description:
        "Full-stack web application to manage funeral and memorial information. Built with React, Node.js + Express, and Postgres.",
      thumbnail: "./images/Firstp.jpg",
      github: "https://github.com/MphoJr/VRO_Funerals",
    },
    {
      title: "NAOG CHURCH WEBSITE",
      description:
        "Digital hub for church activities and community engagement. React frontend, Node.js + Express backend, Postgres database.",
      thumbnail: "./images/Secondp.png",
      github: "https://github.com/MphoJr/NAOG_Frontend",
    },
    {
      title: "Snake Game",
      description:
        "Classic Snake Game recreation using Python + Tkinter. Demonstrates game logic and user input handling.",
      thumbnail: "./images/image.png",
      github: "https://github.com/MphoJr/Snake",
    },
    {
      title: "Weather App",
      description:
        "Another Snake Game variation built with Python + Tkinter, showcasing programming fundamentals and user interaction.",
      thumbnail: "./images/Thirdp.png",
      github: "https://github.com/MphoJr/Weather_app",
    },
  ];

  return (
    <section
      id={id}
      className="min-h-screen py-16 flex flex-col items-center px-4 bg-black text-white"
    >
      <h2 className="text-3xl sm:text-5xl md:text-7xl font-display font-bold mb-10 text-center">
        Project Portfolio
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl w-full">
        {projects.map((p, i) => (
          <div
            key={i}
            className="border border-white/20 rounded-lg overflow-hidden flex flex-col hover:shadow-lg transition-shadow"
          >
            <img
              src={p.thumbnail}
              alt={p.title}
              className="w-full h-48 sm:h-60 object-cover"
            />
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-lg sm:text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm sm:text-base font-light flex-1">
                {p.description}
              </p>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center mt-4 text-indigo-400 hover:text-indigo-300 px-4 py-2 border border-indigo-400 rounded-md text-sm sm:text-base"
              >
                <FaGithub className="mr-2 text-xl sm:text-2xl" />
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
