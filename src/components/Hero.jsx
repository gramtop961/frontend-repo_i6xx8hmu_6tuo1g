import { MapPin, Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900">
              Platform Sarana & Prasarana Modern
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              Kelola fasilitas, jadwalkan peminjaman, dan pantau perawatan dalam satu tempat. Cocok untuk sekolah, kampus, kantor, dan instansi.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#permintaan" className="inline-flex items-center rounded-md bg-blue-600 px-5 py-3 text-white font-medium shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Mulai Ajukan</a>
              <a href="#fasilitas" className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-slate-900 font-medium ring-1 ring-slate-200 hover:bg-slate-50">
                <MapPin className="h-4 w-4"/> Lihat Fasilitas
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-blue-600"/> Penjadwalan cepat</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500"/> Status real-time</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video w-full rounded-xl border border-slate-200 bg-white shadow-sm p-4">
              <div className="h-full w-full rounded-md bg-gradient-to-br from-blue-100 via-white to-emerald-100 flex items-center justify-center text-center">
                <div>
                  <p className="text-sm uppercase tracking-wider text-slate-500">Dashboard Sarpras</p>
                  <p className="mt-2 text-slate-700">Ringkas • Cepat • Terintegrasi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
