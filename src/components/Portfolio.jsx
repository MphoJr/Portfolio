import { FaGithub } from "react-icons/fa"; // ← import the icon

export default function Portfolio({ id }) {
  const projects = [
    {
      title: "VRO FUNREAL WEBSITE",
      description:
        "This project was built as a full-stack web application to manage funeral and memorial information, using a modern and scalable technology stack. The frontend was developed with React, providing a responsive and user-friendly interface for users to access funeral details, memorial services, and related information. The backend was implemented using Node.js and Express, creating a RESTful API to handle data management and business logic. Postgres was used as the database to store funeral records, user information, and other relevant data. This project demonstrates my ability to create a complete web application, integrating frontend and backend technologies to deliver a seamless user experience.",
      thumbnail: "./images/Firstp.jpg",
      github: "https://github.com/your-user/first-project", // 👈 NEW
    },
    {
      title: "Second Project",
      description:
        "This project was developed as a full-stack web application to serve as a digital hub for church activities, announcements, and community engagement. The frontend was built using React, providing a responsive and intuitive interface for users to access church-related information, events, and resources. The backend was implemented with Node.js and Express, creating a RESTful API to manage data related to church services, events, and user interactions. Postgres was used as the database to store church records, user profiles, and other relevant data. This project showcases my ability to create a comprehensive web application that integrates frontend and backend technologies to facilitate community engagement and information sharing within a church setting.",
      thumbnail: "./images/Secondp.png",
      github: "https://github.com/your-user/first-project", // 👈 NEW
    },
    {
      title: "Third Project",
      description:
        "This project is a recreation of the classic Snake Game, built to demonstrate programming fundamentals, game logic, and user interaction.Python (with Tkinter for UI) was used to develop the game, allowing for a simple yet engaging gaming experience. The game features a snake that grows in length as it consumes food, with the objective of avoiding collisions with the walls and the snake's own body. This project showcases my ability to implement game mechanics, handle user input, and create an interactive application using Python.",
      thumbnail: "./images/image.png",
      github: "https://github.com/your-user/first-project", // 👈 NEW
    },
    {
      title: "Fourth Project",
      description:
        "This project is a recreation of the classic Snake Game, built to demonstrate programming fundamentals, game logic, and user interaction.Python (with Tkinter for UI) was used to develop the game, allowing for a simple yet engaging gaming experience. The game features a snake that grows in length as it consumes food, with the objective of avoiding collisions with the walls and the snake's own body. This project showcases my ability to implement game mechanics, handle user input, and create an interactive application using Python.",
      thumbnail: "./images/Thirdp.png",
      github: "https://github.com/your-user/first-project", // 👈 NEW
    },
  ];

  return (
    <section
      id={id}
      className="h-screen py-20 flex flex-col items-center px-4 mb-150"
    >
      <h2 className="text-7xl font-display font-bold mb-12">
        Project Portfolio
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-5xl w-full">
        {projects.map((p, i) => (
          <div
            key={i}
            className="border border-white/20 rounded-lg overflow-hidden"
          >
            {/* Placeholder image – replace with real pics */}
            <img
              src={p.thumbnail}
              alt={p.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm font-light">{p.description}</p>
            </div>
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-4 text-indigo-500 hover:underline px-40 py-3"
            >
              <FaGithub className="mr-2 text-3xl" />
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
