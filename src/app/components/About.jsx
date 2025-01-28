import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-5xl font-bold mb-4 glow-text">Hi, I'm Your Name</h1>
          <p className="text-xl mb-6">
            I'm a passionate web developer with experience in building modern, responsive web applications. I love
            learning new technologies and solving complex problems.
          </p>
          <a
            href="#projects"
            className="inline-block bg-primary text-gray-900 px-6 py-3 rounded-full hover:bg-secondary transition-colors duration-300 futuristic-border"
          >
            View My Work
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden futuristic-border">
            <Image
              src="/profile-pic.jpg"
              alt="Your Name"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

