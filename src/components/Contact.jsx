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
          href="mailto:hello@reallygreatsite.com"
          className="font-medium underline underline-offset-4"
        >
          Email
        </a>
        <a
          href="https://twitter.com/reallygreatsite"
          target="_blank"
          className="font-medium underline underline-offset-4"
        >
          Twitter
        </a>
      </div>
    </section>
  );
}
