export default function Skills({ id }) {
  return (
    <section
      id={id}
      className="h-screen py-20 flex flex-col items-center px-4 mb-130"
    >
      <h2 className="text-7xl font-display font-bold mb-12">
        My Personal Skills
      </h2>
      <h3 className="text-2xl font-display font-bold mb-12">Languages</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl">
        {[
          "Python",
          "C#",
          "SQL",
          "C/C++",
          "Javascript",
          "HTML",
          "CSS",
          "JAVA",
        ].map((skill) => (
          <div
            key={skill}
            className="border border-white/20 p-6 rounded-lg text-center transition-transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold">{skill}</h3>
          </div>
        ))}
      </div>
      <h3 className="text-2xl font-display font-bold mb-12 mt-5">Frameworks</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl">
        {["React", "ASP.Net", "Node.js", "Express.js"].map((skill) => (
          <div
            key={skill}
            className="border border-white/20 p-6 rounded-lg text-center transition-transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold">{skill}</h3>
          </div>
        ))}
      </div>
      <h3 className="text-2xl font-display font-bold mb-12 mt-5">Libraries</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl">
        {["Pandas", "Numpy", "Matplotlib", "Prisma"].map((skill) => (
          <div
            key={skill}
            className="border border-white/20 p-6 rounded-lg text-center transition-transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold">{skill}</h3>
          </div>
        ))}
      </div>
      <h3 className="text-2xl font-display font-bold mb-12 mt-5">
        OTHER IT SKILLS
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl">
        {[
          "Troubleshooting & Debugging",
          "Networking Fundamentals",
          "Operating Systems",
          "Database Management",
          "UI/UX Integration",
          "Cloud Computing",
          "DevOps Practices ",
          "Version Control",
          "Cybersecurity Awareness",
          "Cross-Platform Development",
          "AI & Machine Learning ",
          "System Configuration ",
        ].map((skill) => (
          <div
            key={skill}
            className="border border-white/20 p-6 rounded-lg text-center transition-transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold">{skill}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
