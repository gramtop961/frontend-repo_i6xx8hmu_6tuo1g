import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FacilitiesGrid from './components/FacilitiesGrid';
import MaintenanceRequestForm from './components/MaintenanceRequestForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <FacilitiesGrid />
        <section id="perawatan" className="py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
              <h3 className="text-xl font-semibold">Ringkas Perawatan</h3>
              <p className="mt-1 text-blue-100">Pantau status perawatan fasilitas Anda secara berkala untuk menjaga kualitas layanan.</p>
            </div>
          </div>
        </section>
        <MaintenanceRequestForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
