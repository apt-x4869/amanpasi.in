import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="fixed w-full bg-gray-900 bg-opacity-80 backdrop-blur-md z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/next.svg" alt="Logo" width={40} height={40} />
          <span className="text-2xl font-bold glow-text">My Portfolio</span>
        </Link>
        <ul className="flex space-x-6">
          <li>
            <a href="/#about" className="hover:text-primary transition-colors">
              About
            </a>
          </li>
          <li>
            <Link href="/projects" className="hover:text-primary transition-colors">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-primary transition-colors">
              Blogs
            </Link>
          </li>
          <li>
            <a href="/#skills" className="hover:text-primary transition-colors">
              Skills
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

