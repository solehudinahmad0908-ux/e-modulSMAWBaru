import { useSidebar } from "@/contexts/SidebarContext";
import { Link, useLocation } from "wouter";
import { 
  Home, 
  Info, 
  BookOpen, 
  CheckSquare, 
  FileText, 
  Library, 
  Flame,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

export function Sidebar() {
  const { isOpen, toggleSidebar, setIsOpen } = useSidebar();
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home", icon: Home },
    { href: "/pendahuluan", label: "Pendahuluan", icon: Info },
    { href: "/materi", label: "Materi", icon: BookOpen, startsWith: "/materi" },
    { href: "/evaluasi", label: "Evaluasi", icon: CheckSquare },
    { href: "/jobsheet", label: "Jobsheet", icon: FileText },
    { href: "/pustaka", label: "Daftar Pustaka", icon: Library },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}
      
      <aside 
        className={`fixed left-0 top-0 z-40 h-screen transition-all duration-300 ease-in-out border-r bg-sidebar flex flex-col ${
          isOpen ? "w-64 translate-x-0" : "w-64 -translate-x-full md:w-16 md:translate-x-0"
        }`}
      >
      <div className="flex h-16 items-center justify-between px-4 border-b">
        <Link href="/" className="flex items-center gap-3 overflow-hidden text-sidebar-foreground">
          <div className="flex items-center justify-center min-w-[32px] h-8 rounded bg-primary text-primary-foreground">
            <Flame className="w-5 h-5" />
          </div>
          {isOpen && (
            <span className="font-bold text-sm leading-tight text-sidebar-foreground truncate whitespace-nowrap">
              E-Modul SMAW
            </span>
          )}
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto py-4 flex flex-col gap-2 px-2">
        {links.map((link) => {
          const isActive = link.startsWith 
            ? location.startsWith(link.startsWith) 
            : location === link.href;

          return (
            <Link 
              key={link.href} 
              href={link.href}
              onClick={() => {
                if (window.innerWidth < 768) {
                  setIsOpen(false);
                }
              }}
              className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors cursor-pointer ${
                isActive 
                  ? "bg-primary text-primary-foreground" 
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              } ${!isOpen && "justify-center px-0"}`}
              title={!isOpen ? link.label : undefined}
            >
              <link.icon className="w-5 h-5 flex-shrink-0" />
              {isOpen && <span className="font-medium text-sm whitespace-nowrap">{link.label}</span>}
            </Link>
          );
        })}
      </div>

      <div className="p-4 border-t border-sidebar-border">
        <button 
          onClick={toggleSidebar}
          className="flex w-full items-center justify-center p-2 rounded-md bg-sidebar-accent text-sidebar-accent-foreground hover:opacity-80 transition-opacity"
        >
          {isOpen ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
        </button>
      </div>
      </aside>
    </>
  );
}
