export default function Skills({ id }) {
  return (
    <section
      id={id}
      className="min-h-screen py-16 flex flex-col items-center px-4 bg-black text-white"
    >
      <h2 className="text-3xl sm:text-5xl md:text-7xl font-display font-bold mb-10 text-center">
        My Personal Skills
      </h2>

      {/* Languages */}
      <h3 className="text-xl sm:text-2xl font-display font-bold mb-6">
        Languages
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl w-full">
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
            className="border border-white/20 p-4 sm:p-6 rounded-lg text-center transition-transform hover:scale-105"
          >
            <h3 className="text-lg sm:text-xl font-semibold">{skill}</h3>
          </div>
        ))}
      </div>

      {/* Frameworks */}
      <h3 className="text-xl sm:text-2xl font-display font-bold mb-6 mt-10">
        Frameworks
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl w-full">
        {["React", "ASP.Net", "Node.js", "Express.js"].map((skill) => (
          <div
            key={skill}
            className="border border-white/20 p-4 sm:p-6 rounded-lg text-center transition-transform hover:scale-105"
          >
            <h3 className="text-lg sm:text-xl font-semibold">{skill}</h3>
          </div>
        ))}
      </div>

      {/* Libraries */}
      <h3 className="text-xl sm:text-2xl font-display font-bold mb-6 mt-10">
        Libraries
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl w-full">
        {["Pandas", "Numpy", "Matplotlib", "Prisma"].map((skill) => (
          <div
            key={skill}
            className="border border-white/20 p-4 sm:p-6 rounded-lg text-center transition-transform hover:scale-105"
          >
            <h3 className="text-lg sm:text-xl font-semibold">{skill}</h3>
          </div>
        ))}
      </div>

      {/* Other IT Skills */}
      <h3 className="text-xl sm:text-2xl font-display font-bold mb-6 mt-10">
        Other IT Skills
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl w-full">
        {[
          "Troubleshooting & Debugging",
          "Networking Fundamentals",
          "Operating Systems",
          "Database Management",
          "UI/UX Integration",
          "Cloud Computing",
          "DevOps Practices",
          "Version Control",
          "Cybersecurity Awareness",
          "Cross-Platform Development",
          "AI & Machine Learning",
          "System Configuration",
        ].map((skill) => (
          <div
            key={skill}
            className="border border-white/20 p-4 sm:p-6 rounded-lg text-center transition-transform hover:scale-105"
          >
            <h3 className="text-lg sm:text-xl font-semibold">{skill}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
