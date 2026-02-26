export default function About({ id }) {
  return (
    <section
      id={id}
      className="min-h-screen py-16 flex flex-col items-center px-4 bg-black text-white"
    >
      <h2 className="text-3xl sm:text-5xl md:text-7xl font-display font-bold mb-8 text-center">
        My Introduction
      </h2>
      <p className="font-light text-base sm:text-lg md:text-2xl leading-relaxed text-center md:text-left max-w-5xl">
        Hello, I’m Mpho, a dedicated software developer with a Diploma in IT
        Software Development from Nelson Mandela University. My journey in
        technology has been shaped by a strong foundation in programming,
        systems analysis, networking, and cybersecurity, and I’ve built hands-on
        expertise in C#, JavaScript, Python, SQL, and CSS. I enjoy working
        across the stack, from crafting polished, responsive frontends with
        React and Tailwind CSS to designing scalable backends with ASP.NET,
        Prisma, and PostgreSQL. I thrive on solving complex challenges—whether
        it’s debugging tricky build issues, refining database schemas, or
        architecting modular routing systems that keep projects clean and
        maintainable.
        <br />
        <br />
        My recent work includes developing a multi-section church/community
        website, where I implemented advanced backend features, authentication
        flows, and inspiring content overlays to create a professional and
        impactful user experience. What drives me is the balance between
        technical precision and human-centered design. I believe that great
        software isn’t just functional—it should be intuitive, visually
        engaging, and meaningful to the people who use it.
        <br />
        <br />
        This mindset pushes me to continuously learn, adopt best practices, and
        expand my skills in both frontend and backend development. Looking
        ahead, my goal is to grow into a full-stack developer who delivers
        scalable, production-ready applications that empower communities and
        organizations. I bring persistence, adaptability, and a collaborative
        spirit to every project, and I’m excited to contribute to teams where
        innovation and impact go hand in hand.
      </p>
    </section>
  );
}
