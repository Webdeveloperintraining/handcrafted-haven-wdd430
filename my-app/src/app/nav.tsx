import Image from 'next/image';
import Link from 'next/link';
export default function Nav() {
  return (
    <nav className="nav">
      <Image src="https://i.imghippo.com/files/dljA7368qkk.png" alt="Logo" width={50} height={50} />
      <ul>
        <li>
          <Link href="/">
         Home
          </Link>
        </li>
        <li>
          <Link href="/">
           About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

