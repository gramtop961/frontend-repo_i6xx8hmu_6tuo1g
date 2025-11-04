import { Building2, MapPin, CheckCircle, Users, Wifi, Tv, DoorClosed } from 'lucide-react';

const facilities = [
  {
    name: 'Ruang Rapat A',
    location: 'Lantai 2, Gedung Utama',
    capacity: 20,
    features: ['AC', 'Proyektor', 'WiFi'],
    status: 'Tersedia',
  },
  {
    name: 'Aula Serbaguna',
    location: 'Lantai 1, Gedung Serbaguna',
    capacity: 120,
    features: ['Sound System', 'LED Screen', 'WiFi'],
    status: 'Tersedia',
  },
  {
    name: 'Lab Komputer',
    location: 'Lantai 3, Gedung TI',
    capacity: 30,
    features: ['AC', 'PC 30 unit', 'WiFi'],
    status: 'Digunakan',
  },
  {
    name: 'Ruang Kelas 204',
    location: 'Lantai 2, Gedung Pendidikan',
    capacity: 40,
    features: ['AC', 'TV', 'WiFi'],
    status: 'Tersedia',
  },
];

function FeatureBadge({ label }) {
  const icon = label.toLowerCase().includes('ac')
    ? <DoorClosed className="h-3.5 w-3.5" />
    : label.toLowerCase().includes('tv') || label.toLowerCase().includes('led')
    ? <Tv className="h-3.5 w-3.5" />
    : <Wifi className="h-3.5 w-3.5" />;
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-2 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200">
      {icon}
      {label}
    </span>
  );
}

function FacilityCard({ item }) {
  const available = item.status === 'Tersedia';
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-blue-600 text-white flex items-center justify-center">
            <Building2 className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">{item.name}</h3>
            <div className="mt-1 flex items-center gap-2 text-sm text-slate-600">
              <MapPin className="h-4 w-4 text-blue-600" />
              {item.location}
            </div>
          </div>
        </div>
        <span className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium ${available ? 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200' : 'bg-amber-50 text-amber-700 ring-1 ring-amber-200'}`}>
          <CheckCircle className={`h-3.5 w-3.5 ${available ? 'text-emerald-600' : 'text-amber-600'}`} />
          {item.status}
        </span>
      </div>
      <div className="mt-4 flex items-center gap-4 text-sm text-slate-600">
        <div className="flex items-center gap-2"><Users className="h-4 w-4 text-blue-600" /> Kapasitas {item.capacity}</div>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {item.features.map((f) => (
          <FeatureBadge key={f} label={f} />
        ))}
      </div>
      <div className="mt-5 flex gap-3">
        <button className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white text-sm font-medium shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50" disabled={!available}>
          Pesan
        </button>
        <button className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-slate-900 text-sm font-medium ring-1 ring-slate-200 hover:bg-slate-50">
          Detail
        </button>
      </div>
    </div>
  );
}

export default function FacilitiesGrid() {
  return (
    <section id="fasilitas" className="py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Fasilitas Unggulan</h2>
            <p className="mt-1 text-slate-600">Pilih ruang dan sarana sesuai kebutuhan Anda.</p>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((item) => (
            <FacilityCard key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
