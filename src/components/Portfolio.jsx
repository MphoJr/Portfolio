export default function Portfolio({ id }) {
  const projects = [
    {
      title: "First Project",
      description: "A quick summary of the first project",
      thumbnail: "/assets/first.jpg",
    },
    {
      title: "Second Project",
      description: "A quick summary of the second project",
      thumbnail: "/assets/second.jpg",
    },
  ];

  return (
    <section id={id} className="h-screen py-20 flex flex-col items-center px-4">
      <h2 className="text-4xl font-display font-bold mb-12">
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
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm font-light">{p.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
