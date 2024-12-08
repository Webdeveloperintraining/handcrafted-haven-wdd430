import Image from 'next/image';
import Link from 'next/link';
export default function Nav() {
  return (
    <nav className="nav">
      <Link href="/">
        <Image src="https://i.imghippo.com/files/dljA7368qkk.png" alt="Logo" width={50} height={50} />
      </Link>
      <ul>
        <li>
          <Link href="/profile">
         Seller Profile
          </Link>
        </li>

        <li>
          <Link href="/products">
           Products
          </Link>
        </li>
        <li>
          <Link href="/about">
           About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

