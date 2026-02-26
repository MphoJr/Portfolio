export default function Education({ id }) {
  return (
    <section
      id={id}
      className="min-h-screen py-16 flex flex-col items-center px-4 bg-black text-white"
    >
      <h2 className="text-3xl sm:text-5xl md:text-7xl font-display font-bold mb-10 text-center">
        My Education
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl w-full">
        {/* Higher Certificate */}
        <div className="border border-white/20 p-6 rounded-lg">
          <h3 className="text-lg sm:text-2xl font-semibold mb-2">
            Nelson Mandela University
          </h3>
          <p className="text-sm sm:text-base">[2020 – 2021]</p>
          <p className="mt-2 text-base sm:text-xl font-light">
            Higher Certificate IT User Support
          </p>
          <p className="mt-2 text-sm sm:text-lg font-light leading-relaxed">
            I hold a Higher Certificate in IT: User Support, which equipped me
            with foundational skills to provide technical and user support
            across diverse computing environments. The programme emphasized
            practical knowledge in troubleshooting, system maintenance, and user
            assistance, preparing me for entry-level positions where support
            personnel are essential to ensuring systems run smoothly.
          </p>
        </div>

        {/* Diploma */}
        <div className="border border-white/20 p-6 rounded-lg">
          <h3 className="text-lg sm:text-2xl font-semibold mb-2">
            Nelson Mandela University
          </h3>
          <p className="text-sm sm:text-base">[2021 – 2024]</p>
          <p className="mt-2 text-base sm:text-xl font-light">
            Diploma IT Software Development
          </p>
          <p className="mt-2 text-sm sm:text-lg font-light leading-relaxed">
            I hold a Diploma in IT Software Development (NQF Level 6), where I
            developed strong knowledge and practical skills in programming,
            systems analysis, networking, and cybersecurity. This qualification
            emphasizes designing and implementing software solutions across
            diverse contexts—from desktop applications to modern online
            client-server systems—providing a solid foundation for careers in
            Software Development and Application Systems Analysis.
          </p>
        </div>
      </div>
    </section>
  );
}
