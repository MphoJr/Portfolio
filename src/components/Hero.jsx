export default function Hero({ id }) {
  return (
    <section
      id={id}
      className="h-screen flex flex-col md:flex-row items-center justify-center px-8 bg-black text-white"
    >
      {/* Left side: photo */}
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img
          src="./images/ProfPic.jpg"
          alt="Profile"
          className="rounded-lg shadow-lg max-h-[80vh] object-cover"
        />
      </div>

      {/* Right side: text */}
      <div className="w-full md:w-1/2 text-center md:text-left md:pl-12">
        <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-4">
          Mpho Tshawe Maudu
        </h1>
        <p className="text-xl md:text-2xl font-light mb-6">
          Full Stack Developer | Passionate about building impactful digital
          experiences. Let's create something amazing together!
        </p>

        <div className="flex justify-center md:justify-start space-x-6 mb-6 text-lg">
          <a
            href="mailto:junior.maudu16@gmail.com"
            className="hover:underline"
          ></a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          ></a>
        </div>

        <p className="text-lg md:text-2xl font-thin mb-8"></p>

        {/* Buttons */}
        <div className="flex space-x-4 justify-center md:justify-start">
          <button className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200">
            <a
              href="https://github.com/MphoJr"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </button>
          <button className="bg-transparent border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black">
            <a
              href="https://www.linkedin.com/in/mpho-tshawe-maudu-5a433a241"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </button>
          <button className="bg-transparent border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black">
            <a
              href="mailto:junior.maudu16@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}
