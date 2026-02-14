export default function Education({ id }) {
  return (
    <section id={id} className="h-screen py-20 flex flex-col items-center px-4">
      <h2 className="text-7xl font-display font-bold mb-12">My Education</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-7xl">
        <div className="border border-white/20 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-2">
            Nelson Mandela University
          </h3>
          <p>[2020 – 2021]</p>
          <p className="mt-2 text-xl font-light">
            {" "}
            Higher Certificate IT User Support
          </p>
          <p className="mt-2 text-lg font-light">
            {" "}
            I hold a Higher Certificate in IT: User Support, which has equipped
            me with the foundational skills to provide technical and user
            support across a wide range of computing environments. This
            qualification prepares graduates for entry-level positions where
            support personnel are essential to ensuring that systems run
            smoothly and users receive effective assistance. The programme
            emphasizes practical knowledge in troubleshooting, system
            maintenance, and user assistance, enabling me to respond to
            technical challenges with confidence and professionalism. With this
            qualification, I am able to work in diverse IT environments,
            supporting both individuals and organizations by ensuring their
            technology is reliable, secure, and aligned with business needs.
            This training provides a strong platform for career growth in IT
            support, while also opening pathways into broader areas of software
            development and systems analysis. It reflects the growing demand for
            adaptable IT professionals who can bridge the gap between technology
            and users, ensuring that solutions are not only functional but also
            user-friendly and impactful.
          </p>
        </div>
        <div className="border border-white/20 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-2">
            Nelson Mandela University
          </h3>
          <p>[2021 – 2024]</p>
          <p className="mt-2 text-xl font-light">
            Diploma IT Software Development
          </p>
          <p className="mt-2 text-lg font-light">
            hold a Diploma in IT Software Development (NQF Level 6) from Nelson
            Mandela University, where I developed strong knowledge and practical
            skills in programming, systems analysis, networking, and
            cybersecurity. This qualification is designed to equip software
            developers with the ability to create IT solutions that address real
            business needs. The programme emphasizes the use of programming
            languages, data management, and business analysis to design and
            implement software solutions across diverse contexts—from individual
            desktop applications to modern online client-server systems. As a
            software developer, I am trained to write programs that solve
            business problems for both small enterprises and large corporates.
            This qualification provides a solid foundation for careers in
            Software Development and Application Systems Analysis, with a
            particular focus on innovative web and app development. Through this
            training, I have gained the ability to combine technical precision
            with business insight, enabling me to design solutions that are not
            only functional but also scalable, user-friendly, and impactful in
            today’s fast-evolving digital landscape.
          </p>
        </div>
      </div>
    </section>
  );
}
