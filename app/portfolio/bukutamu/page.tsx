"use client";

import { useState } from "react";

// Tipe data untuk menyimpan objek pesan (Nama + Isi Pesan)
interface PesanItem {
  nama: string;
  pesan: string;
}

export default function BukuTamuPage() {
  // State untuk menyimpan input nama dan pesan
  const [inputNama, setInputNama] = useState<string>("");
  const [inputPesan, setInputPesan] = useState<string>("");
  
  // State array untuk menyimpan daftar seluruh pesan yang terkirim
  const [daftarPesan, setDaftarPesan] = useState<PesanItem[]>([]);

  // Fungsi saat tombol Kirim diklik
  const tambahPesan = (e: React.FormEvent) => {
    e.preventDefault();

    // Mencegah pengiriman jika nama atau pesan kosong
    if (inputNama.trim() === "" || inputPesan.trim() === "") return;

    // Tambahkan data nama dan pesan baru ke dalam array
    setDaftarPesan([
      ...daftarPesan,
      { nama: inputNama, pesan: inputPesan }
    ]);

    // Kosongkan kembali kotak input
    setInputNama("");
    setInputPesan("");
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-white">Buku Tamu Portofolio</h1>
        <p className="text-slate-400 text-sm mt-1">
          Tinggalkan nama dan pesan Anda setelah mengunjungi portofolio ini.
        </p>
      </div>

      {/* Form Input Nama & Pesan */}
      <form onSubmit={tambahPesan} className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-lg space-y-4">
        {/* Input Nama */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            Nama Pengunjung
          </label>
          <input
            type="text"
            placeholder="Masukkan nama Anda..."
            value={inputNama}
            onChange={(e) => setInputNama(e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all text-sm"
          />
        </div>

        {/* Input Pesan */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            Pesan
          </label>
          <textarea
            placeholder="Tulis pesan di sini..."
            rows={3}
            value={inputPesan}
            onChange={(e) => setInputPesan(e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all text-sm resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 rounded-lg transition-colors duration-200 shadow-lg shadow-red-600/20 active:scale-[0.98] text-sm"
        >
          Kirim Pesan
        </button>
      </form>

      {/* Render Daftar Pesan */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-100">Daftar Pesan ({daftarPesan.length})</h2>

        {daftarPesan.length === 0 ? (
          <p className="text-sm text-slate-500 italic bg-slate-900/50 border border-slate-800/80 rounded-xl p-6 text-center">
            Belum ada pesan. Jadi yang pertama mengisi buku tamu!
          </p>
        ) : (
          <div className="space-y-3">
            {daftarPesan.map((item, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-slate-200 text-sm shadow-md space-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-red-400">{item.nama}</span>
                  <span className="text-xs text-slate-500 font-mono">#{index + 1}</span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">{item.pesan}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}