// components/Header.js
import Link from "next/link";

const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/work">Our Work</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
