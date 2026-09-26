import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b h-20 bg-green-200">
      Header
      <br />
      <Link href="/">Home</Link>
      <br />
      <Link href="/profile">Profile</Link>
    </header>
  );
}
