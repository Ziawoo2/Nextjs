"use client";

import { useState } from "react";

interface CardProps {
  judul: string;
  deskripsi: string;
  techStack?: string[];
  link?: string; // Tambahkan properti link ini
}

export default function Card({ judul, deskripsi, techStack = [], link = "#" }: CardProps) {
  const [jumlahLike, setJumlahLike] = useState<number>(0);
  const [sudahLike, setSudahLike] = useState<boolean>(false);

  const tanganiKlikLike = () => {
    if (!sudahLike) {
      setJumlahLike(jumlahLike + 1);
      setSudahLike(true);
    } else {
      setJumlahLike(jumlahLike - 1);
      setSudahLike(false);
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-lg flex flex-col justify-between">
      <div>
        {jumlahLike >= 5 && (
          <span className="inline-block bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-bold px-2.5 py-1 rounded-full mb-3">
            🔥 Proyek Terpopuler!
          </span>
        )}

        <h2 className="text-xl font-bold text-slate-100 mb-2">{judul}</h2>
        <p className="text-sm text-slate-400 leading-relaxed mb-4">{deskripsi}</p>

        {techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="text-xs font-medium bg-slate-800 text-red-400 border border-slate-700 rounded-md px-2.5 py-1"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-xs font-semibold text-slate-300 hover:text-red-500 transition-colors mb-4"
        >
          Lihat Proyek &rarr;
        </a>
      </div>

      <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
        <span className="text-xs text-slate-400 font-medium">
          ❤️ {jumlahLike} Suka
        </span>

        <button
          onClick={tanganiKlikLike}
          className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
            sudahLike
              ? "bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700"
              : "bg-red-600 text-white hover:bg-red-700 shadow-md shadow-red-600/20"
          }`}
        >
          {sudahLike ? "Batal Suka" : "Suka"}
        </button>
      </div>
    </div>
  );
}