import Image from 'next/image';

export default function Nav() {
  return (
    <nav className="nav">
      <Image src="https://i.imghippo.com/files/dljA7368qkk.png" alt="Logo" width={50} height={50} />
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
}

