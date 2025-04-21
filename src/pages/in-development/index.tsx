import Link from "next/link";

export default function InDevelopment() {
  return (
    <main className="w-full h-screen flex flex-col justify-center items-center gap-3">
      <p className="text-white text-2xl">Functionality in development</p>
      <Link href={"/"} className="text-white bg-blue-400 px-6 py-2 rounded-xl">Back</Link>
    </main>
  );
}
