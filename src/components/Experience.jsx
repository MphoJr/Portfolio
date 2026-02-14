export default function Experience({ id }) {
  const jobs = [
    {
      company: "TEMS 911 EMS",
      dates: "2024 – 2025",
      desc: " Provided first-line support for staff on hardware, software, and connectivity issues.",
      desc2:
        " Assisted in the setup and maintenance of computer systems, including troubleshooting and resolving technical problems.",
      desc3:
        " Collaborated with the IT team to implement security measures and ensure data integrity.",
      desc4:
        " Monitored system performance and flagged potential issues to administrators.",
      desc5:
        " Help maintain shared drives, collaboration tools, and internal platforms. ",
      desc6:
        "Assisted with account creation, user access control, and permission changes.",
    },
    {
      company: "Naume Tech",
      dates: "2025 – Present",
      desc: "Developed and maintained web applications using React, ASP.NET, and Node.js.",
      desc2:
        "Designed and implemented RESTful APIs to support frontend functionality and data management.",
      desc3:
        " Collaborated with the IT team to implement security measures and ensure data integrity.",
      desc4:
        " Monitored system performance and flagged potential issues to administrators.",
      desc5:
        " Help maintain shared drives, collaboration tools, and internal platforms. ",
      desc6:
        "  Applied basic cybersecurity practices, ensuring devices met security standards.",
      desc7:
        "Contributed to IT projects such as system rollouts, software implementations, and upgrades.",
      desc8:
        "Assisted with data extraction, cleaning, and basic analysis for reports.",
      desc9:
        "Participated in team meetings, providing insights and feedback on project progress and technical challenges.",
      desc10:
        "Gained experience in version control, code reviews, and collaborative development workflows.",
    },
  ];

  return (
    <section id={id} className="h-screen py-20 flex flex-col items-center px-4">
      <h2 className="text-7xl font-display font-bold mb-12">
        My Work Experience
      </h2>
      <div className="space-y-8 max-w-5xl w-full">
        {jobs.map((job, i) => (
          <div key={i} className="border-b border-white/20 pb-4">
            <h3 className="text-2xl font-semibold">{job.company}</h3>
            <p className="text-xl font-light">{job.dates}</p>
            <p className="mt-2 text-lg font-light">{job.desc}</p>
            <p className="mt-2 text-lg font-light">{job.desc2}</p>
            <p className="mt-2 text-lg font-light">{job.desc3}</p>
            <p className="mt-2 text-lg font-light">{job.desc4}</p>
            <p className="mt-2 text-lg font-light">{job.desc5}</p>
            <p className="mt-2 text-lg font-light">{job.desc6}</p>
            <p className="mt-2 text-lg font-light">{job.desc7}</p>
            <p className="mt-2 text-lg font-light">{job.desc8}</p>
            <p className="mt-2 text-lg font-light">{job.desc9}</p>
            <p className="mt-2 text-lg font-light">{job.desc10}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
