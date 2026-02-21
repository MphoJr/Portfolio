export default function Portfolio({ id }) {
  const projects = [
    {
      title: "First Project",
      description: "A quick summary of the first project",
      thumbnail: "./images/Firstp.jpg",
    },
    {
      title: "Second Project",
      description: "A quick summary of the second project",
      thumbnail: "./images/Secondp.png",
    },
    {
      title: "Third Project",
      description: "A quick summary of the third project",
      thumbnail: "./images/image.png",
    },
    {
      title: "Fourth Project",
      description: "A quick summary of the fourth project",
      thumbnail: "./images/Thirdp.png",
    },
  ];

  return (
    <section id={id} className="h-screen py-20 flex flex-col items-center px-4">
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
          </div>
        ))}
      </div>
    </section>
  );
}
