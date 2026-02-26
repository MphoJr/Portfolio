export default function Hero({ id }) {
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 sm:px-8 bg-black text-white"
    >
      {/* Left side: photo */}
      <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
        <img
          src="./images/ProfPic.jpg"
          alt="Profile"
          className="rounded-lg shadow-lg w-3/4 sm:w-2/3 md:w-full max-h-[70vh] object-cover"
        />
      </div>

      {/* Right side: text */}
      <div className="w-full md:w-1/2 text-center md:text-left md:pl-12">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-bold leading-tight mb-4">
          Mpho Tshawe Maudu
        </h1>
        <p className="text-base sm:text-xl md:text-2xl font-light mb-6">
          Full Stack Developer | Passionate about building impactful digital
          experiences. Let's create something amazing together!
        </p>

        {/* Social links */}
        <div className="flex justify-center md:justify-start space-x-6 mb-6 text-lg">
          <a href="mailto:junior.maudu16@gmail.com" className="hover:underline">
            Email
          </a>
          <a
            href="https://github.com/MphoJr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mpho-tshawe-maudu-5a433a241"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="https://github.com/MphoJr"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 text-center"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mpho-tshawe-maudu-5a433a241"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black text-center"
          >
            LinkedIn
          </a>
          <a
            href="mailto:junior.maudu16@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black text-center"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
