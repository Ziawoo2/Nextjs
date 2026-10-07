import { Suspense } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface DetailArtikel {
  id: number;
  userId: number;
  title: string;
  body: string;
}

// 1. Komponen ini menerima promise `params`, di-await di dalam, lalu mengambil data dari API
async function KontenDetailBlog({
  paramsPromise,
}: {
  paramsPromise: Promise<{ id: string }>;
}) {
  // Await params di dalam komponen yang terbungkus Suspense
  const { id } = await paramsPromise;

  const respon = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: 'no-store',
  });

  if (!respon.ok) {
    notFound();
  }

  const artikel: DetailArtikel = await respon.json();

  return (
    <article className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl space-y-6">
      <div className="space-y-2 border-b border-slate-800 pb-6">
        <span className="text-xs font-mono text-red-500 font-semibold uppercase tracking-wider">
          Artikel #{artikel.id}
        </span>
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-100 capitalize leading-snug">
          {artikel.title}
        </h1>
      </div>

      <p className="text-slate-300 leading-relaxed capitalize text-base md:text-lg">
        {artikel.body}
      </p>
    </article>
  );
}

// 2. Komponen Utama Halaman (Synchronous/Clean tanpa await di level teratas)
export default function DetailBlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Tombol Kembali */}
      <Link
        href="/portfolio/blog"
        className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-red-400 transition-colors font-medium"
      >
        &larr; Kembali ke Daftar Artikel
      </Link>

      {/* Oper Promise `params` langsung ke dalam Suspense */}
      <Suspense fallback={<p className="text-slate-400">Memuat detail artikel...</p>}>
        <KontenDetailBlog paramsPromise={params} />
      </Suspense>
    </div>
  );
}