import { useState } from 'react';
import { Wrench, ClipboardList, Mail, Phone } from 'lucide-react';

export default function MaintenanceRequestForm() {
  const [form, setForm] = useState({ nama: '', email: '', telepon: '', lokasi: '', deskripsi: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tanpa backend: tampilkan status sukses lokal
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ nama: '', email: '', telepon: '', lokasi: '', deskripsi: '' });
  };

  return (
    <section id="permintaan" className="py-16 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-10">
          <div className="mb-8 lg:mb-0">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-200">
              <Wrench className="h-3.5 w-3.5"/> Permintaan Perawatan
            </div>
            <h3 className="mt-3 text-2xl font-bold text-slate-900">Laporkan kerusakan atau ajukan perbaikan</h3>
            <p className="mt-2 text-slate-600">Isi form berikut untuk mengajukan kebutuhan perawatan sarana/prasarana.</p>
            <div className="mt-6 space-y-3 text-slate-700">
              <div className="flex items-center gap-2"><ClipboardList className="h-4 w-4 text-blue-600"/> SLA respons maksimal 1x24 jam kerja</div>
              <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-blue-600"/> Notifikasi via email</div>
              <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-blue-600"/> Dukungan hotline</div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Nama</label>
                  <input name="nama" value={form.nama} onChange={handleChange} required className="mt-1 w-full rounded-md border-slate-200 focus:border-blue-500 focus:ring-blue-500" placeholder="Nama lengkap" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-1 w-full rounded-md border-slate-200 focus:border-blue-500 focus:ring-blue-500" placeholder="nama@instansi.go.id" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Telepon</label>
                  <input name="telepon" value={form.telepon} onChange={handleChange} className="mt-1 w-full rounded-md border-slate-200 focus:border-blue-500 focus:ring-blue-500" placeholder="08xxxxxxxxxx" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Lokasi/Ruangan</label>
                  <input name="lokasi" value={form.lokasi} onChange={handleChange} required className="mt-1 w-full rounded-md border-slate-200 focus:border-blue-500 focus:ring-blue-500" placeholder="Contoh: Gedung A Lantai 2" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-slate-700">Deskripsi Kebutuhan</label>
                  <textarea name="deskripsi" value={form.deskripsi} onChange={handleChange} rows={4} required className="mt-1 w-full rounded-md border-slate-200 focus:border-blue-500 focus:ring-blue-500" placeholder="Jelaskan kerusakan atau kebutuhan perawatan..." />
                </div>
              </div>
              <div className="mt-5 flex items-center gap-3">
                <button type="submit" className="inline-flex items-center rounded-md bg-blue-600 px-5 py-2.5 text-white font-medium shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Kirim Permintaan</button>
                {submitted && (
                  <span className="text-sm text-emerald-700 bg-emerald-50 ring-1 ring-emerald-200 px-2.5 py-1 rounded-full">Permintaan terkirim! Tim kami akan menindaklanjuti segera.</span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
