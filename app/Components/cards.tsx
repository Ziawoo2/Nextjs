interface CardProps {
  judul: string;
  deskripsi: string;
  techStack: string[];
  link?: string;
}

export default function Card({ judul, deskripsi, techStack, link = "#" }: CardProps) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-lg hover:border-red-500/50 transition-all duration-300 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold text-slate-100 mb-2">{judul}</h2>
        <p className="text-sm text-slate-400 leading-relaxed mb-4">{deskripsi}</p>
      </div>

      <div>
        {/* Tech Stack Badges */}
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

        {/* Link Proyek */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-xs font-semibold text-slate-300 hover:text-red-500 transition-colors"
        >
          Lihat Proyek &rarr;
        </a>
      </div>
    </div>
  );
}