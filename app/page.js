import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center gap-5   p-24">
      <h1> Fetch data with API in client component </h1>
      <Link href="/productlis"> Go to productlist</Link>
    </main>
  );
}
