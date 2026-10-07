import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'Mading & Portofolio',
  description: 'Proyek Next.js Mading Digital',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-slate-950 text-slate-100 min-h-screen">
        {/* Navbar Global */}
        <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold tracking-wider text-red-500">
              MADING<span className="text-white">TELKOM</span>
            </Link>

            <nav className="flex gap-6 text-sm font-medium">
              <Link href="/" className="hover:text-red-500 transition-colors">
                Beranda
              </Link>
              <Link href="/profil" className="hover:text-red-500 transition-colors">
                Profil
              </Link>
              <Link href="/portofolio" className="hover:text-red-500 transition-colors">
                Portofolio
              </Link>
              <Link href="/kontak" className="hover:text-red-500 transition-colors">
                Kontak
              </Link>
            </nav>
          </div>
        </header>

        {/* Konten Utama */}
        <main className="max-w-5xl mx-auto px-6 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}