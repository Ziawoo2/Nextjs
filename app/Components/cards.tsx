interface CardProps {
  judul: string;
  deskripsi: string;
  tanggal: string;
}

export default function Card({ judul, deskripsi, tanggal }: CardProps) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-lg hover:border-red-500/50 transition-all duration-300">
      <span className="text-xs font-semibold text-red-500 uppercase tracking-wider">
        {tanggal}
      </span>
      <h2 className="text-xl font-bold text-slate-100 mt-2 mb-2">
        {judul}
      </h2>
      <p className="text-sm text-slate-400 leading-relaxed">
        {deskripsi}
      </p>
    </div>
  );
}