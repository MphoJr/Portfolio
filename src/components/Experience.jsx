export default function Experience({ id }) {
  const jobs = [
    {
      company: "TEMS 911 EMS",
      dates: "2024 – 2025",
      tasks: [
        "Provided first-line support for staff on hardware, software, and connectivity issues.",
        "Assisted in the setup and maintenance of computer systems, including troubleshooting and resolving technical problems.",
        "Collaborated with the IT team to implement security measures and ensure data integrity.",
        "Monitored system performance and flagged potential issues to administrators.",
        "Helped maintain shared drives, collaboration tools, and internal platforms.",
        "Assisted with account creation, user access control, and permission changes.",
      ],
    },
    {
      company: "Naume Tech",
      dates: "2025 – Present",
      tasks: [
        "Developed and maintained web applications using React, ASP.NET, and Node.js.",
        "Designed and implemented RESTful APIs to support frontend functionality and data management.",
        "Collaborated with the IT team to implement security measures and ensure data integrity.",
        "Monitored system performance and flagged potential issues to administrators.",
        "Helped maintain shared drives, collaboration tools, and internal platforms.",
        "Applied basic cybersecurity practices, ensuring devices met security standards.",
        "Contributed to IT projects such as system rollouts, software implementations, and upgrades.",
        "Assisted with data extraction, cleaning, and basic analysis for reports.",
        "Participated in team meetings, providing insights and feedback on project progress and technical challenges.",
        "Gained experience in version control, code reviews, and collaborative development workflows.",
      ],
    },
  ];

  return (
    <section
      id={id}
      className="min-h-screen py-16 flex flex-col items-center px-4 bg-black text-white"
    >
      <h2 className="text-3xl sm:text-5xl md:text-7xl font-display font-bold mb-10 text-center">
        My Work Experience
      </h2>

      <div className="space-y-8 max-w-5xl w-full">
        {jobs.map((job, i) => (
          <div key={i} className="border-b border-white/20 pb-6">
            <h3 className="text-lg sm:text-2xl font-semibold">{job.company}</h3>
            <p className="text-sm sm:text-base font-light">{job.dates}</p>
            <ul className="mt-4 space-y-2 list-disc list-inside text-sm sm:text-lg font-light leading-relaxed">
              {job.tasks.map((task, idx) => (
                <li key={idx}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
