export default function KontakPage() {
  const namaSekolah = "SMK TELKOM MAKASSAR";

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl text-center">
        {/* Teks Judul */}
        <h1 className="text-3xl font-bold tracking-tight text-white mb-3">
          Hubungi Kami
        </h1>

        {/* Paragraf Penjelasan */}
        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          Selamat datang di halaman kontak <span className="text-red-500 font-semibold">{namaSekolah}</span>. Silakan kirim pesan Anda di bawah ini.
        </p>

        {/* Form Sederhana & Tombol */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Pesan Anda..."
            className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all text-sm"
          />

          <button className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2.5 rounded-lg transition-colors duration-200 shadow-lg shadow-red-600/20 active:scale-[0.98]">
            Kirim Pesan
          </button>
        </div>
      </div>
    </main>
  );
}