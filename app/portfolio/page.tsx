import Card from '../Components/cards';

export default function PortofolioPage() {
  const proyekList = [
    {
      id: 1,
      judul: "Aplikasi Web E-Commerce",
      deskripsi: "Platform toko online dengan fitur keranjang belanja, integrasi payment gateway, dan manajemen produk.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
      link: "https://github.com"
    },
    {
      id: 2,
      judul: "Sistem Manajemen Identitas Digital",
      deskripsi: "Aplikasi registrasi data identitas berbasis web dengan autentikasi aman.",
      techStack: ["React", "JavaScript", "Node.js"],
      link: "https://github.com"
    },
    {
      id: 3,
      judul: "Redesain UI/UX Mobile App",
      deskripsi: "Perancangan ulang antarmuka pengguna aplikasi mobile untuk meningkatkan user experience.",
      techStack: ["Figma", "UI/UX", "Prototyping"],
      link: "https://github.com"
    }
  ];

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-extrabold text-white">Proyek Portofolio</h1>
        <p className="text-slate-400 text-sm mt-1">
          Daftar beberapa proyek web development dan desain yang pernah saya kerjakan.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {proyekList.map((item) => (
          <Card
            key={item.id}
            judul={item.judul}
            deskripsi={item.deskripsi}
            techStack={item.techStack}
            link={item.link}
          />
        ))}
      </div>
    </section>
  );
}