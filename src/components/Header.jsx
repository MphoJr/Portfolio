export default function Header() {
  return (
    <nav className="bg-black/70 fixed top-0 left-0 right-0 z-10 backdrop-blur-sm flex justify-between items-center px-6 py-3">
      <a className="font-display text-xl text-white" href="#hero">
        Mpho Tshawe Maudu
      </a>
      <ul className="flex space-x-6 ">
        {[
          "home",
          "about",
          "education",
          "skills",
          "experience",
          "portfolio",
          "contact",
        ].map((name) => (
          <li key={name}>
            <a
              href={`#${name}`}
              className="text-xl font-medium hover:underline underline-offset-4"
            >
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
