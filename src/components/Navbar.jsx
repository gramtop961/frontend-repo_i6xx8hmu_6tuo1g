import { Building2, ClipboardList, Wrench, Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-blue-600 text-white flex items-center justify-center">
              <Building2 className="h-5 w-5" />
            </div>
            <span className="font-semibold text-slate-900">Sarpras</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#fasilitas" className="hover:text-slate-900 flex items-center gap-2"><ClipboardList className="h-4 w-4"/>Fasilitas</a>
            <a href="#perawatan" className="hover:text-slate-900 flex items-center gap-2"><Wrench className="h-4 w-4"/>Perawatan</a>
            <a href="#kontak" className="hover:text-slate-900 flex items-center gap-2"><Phone className="h-4 w-4"/>Kontak</a>
          </nav>
          <a href="#permintaan" className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-white text-sm font-medium shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Ajukan Permintaan
          </a>
        </div>
      </div>
    </header>
  );
}
