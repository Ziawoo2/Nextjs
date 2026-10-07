import Card from './Components/cards';

export default function Home() {
  const beritaMading = [
    {
      id: 1,
      judul: "Pendaftaran Digitalent Scholarship 2026",
      deskripsi: "Program beasiswa digital bagi siswa yang ingin mendalami teknologi cloud dan web development.",
      tanggal: "07 OKTOBER 2026"
    },
    {
      id: 2,
      judul: "Lomba Desain UI/UX Tingkat Sekolah",
      deskripsi: "Tunjukkan kreativitas kalian dalam merancang antarmuka aplikasi modern dan elegan.",
      tanggal: "05 OKTOBER 2026"
    },
  ];

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-extrabold text-white">Mading Digital</h1>
        <p className="text-slate-400 text-sm mt-1">Informasi dan berita terbaru seputar sekolah.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {beritaMading.map((item) => (
          <Card 
            key={item.id}
            judul={item.judul}
            deskripsi={item.deskripsi}
techStack={["Next.js", "TypeScript"]}
          />
        ))}
      </div>
    </section>
  );
}