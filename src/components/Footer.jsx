import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="kontak" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-slate-900">Sarpras</h4>
            <p className="mt-2 text-sm text-slate-600">Sistem pengelolaan sarana dan prasarana untuk institusi modern.</p>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-slate-900">Kontak</h5>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-blue-600"/> admin@sarpras.id</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-blue-600"/> +62 811-2222-333</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-blue-600"/> Jakarta, Indonesia</li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-slate-900">Tautan</h5>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#fasilitas" className="hover:text-slate-900">Fasilitas</a></li>
              <li><a href="#permintaan" className="hover:text-slate-900">Permintaan</a></li>
              <li><a href="#perawatan" className="hover:text-slate-900">Perawatan</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-200 pt-6 text-sm text-slate-500">
          © {new Date().getFullYear()} Sarpras. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
