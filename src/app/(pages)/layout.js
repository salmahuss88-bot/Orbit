import Footer from "@/app/components/layout/Footer";
import Header from "@/app/components/layout/Header";
import Sidebar from "@/app/components/layout/Sidebar";

export default function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      
      <Sidebar />

      <div className="flex-1 flex flex-col bg-[#F8FAFC]">
        
        <header className="p-8 pb-0">
          <Header />
        </header>

        <main className="flex-1 p-8">
          {children}
        </main>

        <Footer />
      </div>
    </div>
  );
}
