import { ReactNode, useState, useEffect } from "react";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useSidebar } from "@/contexts/SidebarContext";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { ArrowUp } from "lucide-react";

export function Layout({ children }: { children: ReactNode }) {
  const { isOpen } = useSidebar();
  const [location] = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll ke atas setiap kali pindah halaman
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex bg-background text-foreground font-sans selection:bg-primary/30 selection:text-primary">
      <Sidebar />
      <div 
        className={`flex-1 flex flex-col min-h-screen transition-all duration-300 ease-in-out ${
          isOpen ? "md:ml-64" : "md:ml-16"
        }`}
      >
        <Navbar />
        <main className="flex-1 overflow-x-hidden relative flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={location}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="flex-1 flex flex-col"
            >
              <div className="container mx-auto p-4 md:p-8 max-w-7xl flex-1 flex flex-col">
                {children}
              </div>
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer />
      </div>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-colors z-50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
