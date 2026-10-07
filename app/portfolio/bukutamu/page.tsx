"use client";

import { useState } from "react";

export default function BukuTamuPage() {
  // Langkah 1: Siapkan Dua State
  // 1. State string untuk menyimpan teks input
  const [inputTeks, setInputTeks] = useState<string>("");
  
  // 2. State array untuk menyimpan daftar seluruh pesan yang terkirim
  const [daftarPesan, setDaftarPesan] = useState<string[]>([]);

  // Langkah 3: Fungsi Tombol Kirim
  const tambahPesan = (e: React.FormEvent) => {
    e.preventDefault();

    // Mencegah pengiriman jika input cuma spasi kosong
    if (inputTeks.trim() === "") return;

    // Ambil isi array lama + tambahkan teks baru
    setDaftarPesan([...daftarPesan, inputTeks]);

    // Kosongkan kembali kotak input
    setInputTeks("");
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-white">Buku Tamu Portofolio</h1>
        <p className="text-slate-400 text-sm mt-1">
          Tinggalkan pesan atau jejak Anda setelah mengunjungi portofolio ini.
        </p>
      </div>

      {/* Langkah 2: Buat Form Input */}
      <form onSubmit={tambahPesan} className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-lg space-y-4">
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            Pesan Anda
          </label>
          <input
            type="text"
            placeholder="Tulis pesan di sini..."
            value={inputTeks} // Tautkan nilai ke state
            onChange={(e) => setInputTeks(e.target.value)} // Tautkan onChange ke setInputTeks
            className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all text-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 rounded-lg transition-colors duration-200 shadow-lg shadow-red-600/20 active:scale-[0.98] text-sm"
        >
          Kirim Pesan
        </button>
      </form>

      {/* Langkah 4: Render List dengan .map() */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-100">Daftar Pesan ({daftarPesan.length})</h2>

        {daftarPesan.length === 0 ? (
          <p className="text-sm text-slate-500 italic bg-slate-900/50 border border-slate-800/80 rounded-xl p-6 text-center">
            Belum ada pesan. Jadi yang pertama mengirim pesan!
          </p>
        ) : (
          <div className="space-y-3">
            {daftarPesan.map((pesan, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-slate-200 text-sm shadow-md flex items-center justify-between"
              >
                <span>{pesan}</span>
                <span className="text-xs text-slate-500 font-mono">#{index + 1}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}