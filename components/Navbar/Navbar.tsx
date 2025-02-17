import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="Gooyet"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <span className="ml-2 text-xl font-semibold">Gooyet</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-gray-900 hover:text-gray-600">
              About Us
            </Link>
            <Link href="/work" className="text-gray-900 hover:text-gray-600">
              Our Work
            </Link>
            <Link
              href="/services"
              className="text-gray-900 hover:text-gray-600">
              Services
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 rounded-full border border-gray-900 hover:bg-gray-900 hover:text-white transition-colors">
              Contact Us →
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
