// "use client"; this line will make this a client side only component
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <Link href="/">
        <button>Click me to go to home page</button>
      </Link>
      <br />
      <Link href="/experience">
        <button>Click me to go to experience page</button>
      </Link>
      <br />
      <Link href="/projects">
        <button>Click me to go to project page</button>
      </Link>
      <br />
    </nav>
  );
};

export default Navbar;
