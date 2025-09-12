import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden font-'TT Norms Pro'">
      <Header />
      <main className="md:pt-16 w-screen overflow-hidden">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center">Schedule</h1>
          <p className="text-center mt-4">This is the schedule page.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
