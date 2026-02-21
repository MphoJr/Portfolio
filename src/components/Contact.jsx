import { FaGithub, FaMailBulk } from "react-icons/fa";

export default function Contact({ id }) {
  return (
    <section
      id={id}
      className="h-screen flex flex-col items-center justify-center text-center px-4"
    >
      <h2 className="text-4xl font-display font-bold mb-8">
        Thank you so much!
      </h2>
      <p className="text-lg font-light">
        Feel free to reach out to start a conversation or discuss future
        projects.
      </p>
      <div className="mt-8 flex space-x-6">
        <a
          href="mailto:junior.maudu16@gmail.com"
          className="font-medium underline underline-offset-4"
        >
          <FaMailBulk className="inline-block mr-1 text-3xl" />
          Email
        </a>
        <a
          href="https://github.com/MphoJr"
          target="_blank"
          className="font-medium underline underline-offset-4"
        >
          <FaGithub className="inline-block mr-1 text-3xl" /> GitHub
        </a>
      </div>
    </section>
  );
}
