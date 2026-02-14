export default function Hero({ id }) {
  return (
    <section
      id={id}
      className="h-screen flex flex-col justify-center items-center text-center px-4"
    >
      <h1 className="text-7xl font-display font-bold leading-tight mb-4">
        Mpho Tshawe Maudu
      </h1>
      <p className="text-2xl font-light mb-8">junior.maudu16@gmail.com</p>
      <div className="flex justify-center space-x-6 mb-8 text-2xl">
        <a href="mailto:junior.maudu16@gmail.com">Email</a>
        <a href="https://twitter.com/reallygreatsite" target="_blank">
          Github
        </a>
      </div>
      <p className="text-2xl font-thin">+27 65 858 9419</p>
    </section>
  );
}
