// Interface untuk tipe data artikel dari JSONPlaceholder
interface Artikel {
  id: number;
  title: string;
  body: string;
}

// Langkah 1: Jadikan Komponen Asynchronous (async)
export default async function HalamanBlog() {
  // Langkah 2: Lakukan Fetch Data dari API JSONPlaceholder
  const respon = await fetch('https://jsonplaceholder.typicode.com/posts');

  // Langkah 3: Konversi respon menjadi format JSON
  const daftarArtikel: Artikel[] = await respon.json();

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-white">Kumpulan Artikel Blog</h1>
        <p className="text-slate-400 text-sm mt-1">
          Data artikel diambil secara otomatis dari API JSONPlaceholder.
        </p>
      </div>

      {/* Langkah 3 (Lanjutan): Looping (petakan) data artikel menggunakan .map() */}
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
              
              {/* Tampilkan judul artikel (title) */}
              <h2 className="text-lg font-bold text-slate-100 capitalize mb-3 leading-snug">
                {artikel.title}
              </h2>

              {/* Tampilkan isi artikel (body) */}
              <p className="text-sm text-slate-400 leading-relaxed capitalize">
                {artikel.body}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}