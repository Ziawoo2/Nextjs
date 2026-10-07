import { Suspense } from 'react';
import Link from 'next/link';

interface Artikel {
  id: number;
  title: string;
  body: string;
}

// 1. Buat komponen khusus untuk mengambil & menampilkan daftar artikel
async function DaftarArtikel() {
  const respon = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store',
  });
  const daftarArtikel: Artikel[] = await respon.json();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {daftarArtikel.slice(0, 10).map((artikel) => (
        <article
          key={artikel.id}
          className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-lg flex flex-col justify-between hover:border-red-500/50 transition-all duration-300"
        >
          <div>
            <span className="text-xs font-mono text-red-500 font-semibold uppercase tracking-wider block mb-2">
              Artikel #{artikel.id}
            </span>

            <Link href={`/portfolio/blog/${artikel.id}`}>
              <h2 className="text-lg font-bold text-slate-100 capitalize mb-3 leading-snug hover:text-red-500 transition-colors cursor-pointer">
                {artikel.title}
              </h2>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed capitalize line-clamp-3">
              {artikel.body}
            </p>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-800">
            <Link
              href={`/portfolio/blog/${artikel.id}`}
              className="text-xs font-semibold text-red-400 hover:text-red-300 transition-colors inline-flex items-center gap-1"
            >
              Baca Selengkapnya &rarr;
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}

// 2. Halaman Utama yang membungkus komponen tadi dengan Suspense
export default function HalamanBlog() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-white">Kumpulan Artikel Blog</h1>
        <p className="text-slate-400 text-sm mt-1">
          Klik judul artikel untuk membaca detail selengkapnya.
        </p>
      </div>

      <Suspense fallback={<p className="text-slate-400">Memuat artikel...</p>}>
        <DaftarArtikel />
      </Suspense>
    </div>
  );
}