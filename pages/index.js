import Link from 'next/link';
export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-cyan-100 to-white dark:from-cyan-900 dark:to-black">
      <h1 className="text-4xl font-bold mb-4">Selamat Datang</h1>
      <p className="mb-6">Mulai belanja sekarang!</p>
      <Link href="/auth/login">
        <button className="px-6 py-2 bg-cyan-500 text-white rounded">Mulai Gratis</button>
      </Link>
    </div>
  );
}
