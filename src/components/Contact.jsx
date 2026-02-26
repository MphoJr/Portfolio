import { FaGithub, FaMailBulk } from "react-icons/fa";

export default function Contact({ id }) {
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-black text-white"
    >
      <h2 className="text-3xl sm:text-5xl md:text-7xl font-display font-bold mb-6">
        Thank you so much!
      </h2>
      <p className="text-lg sm:text-2xl md:text-5xl font-light max-w-3xl">
        Feel free to reach out to start a conversation or discuss future
        projects.
      </p>

      {/* Links */}
      <div className="mt-8 flex flex-col sm:flex-row gap-6">
        <a
          href="mailto:junior.maudu16@gmail.com"
          className="font-medium underline underline-offset-4 flex items-center justify-center text-lg sm:text-xl"
        >
          <FaMailBulk className="mr-2 text-2xl sm:text-4xl" />
          Email
        </a>
        <a
          href="https://github.com/MphoJr"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium underline underline-offset-4 flex items-center justify-center text-lg sm:text-xl"
        >
          <FaGithub className="mr-2 text-2xl sm:text-4xl" />
          GitHub
        </a>
      </div>
    </section>
  );
}
