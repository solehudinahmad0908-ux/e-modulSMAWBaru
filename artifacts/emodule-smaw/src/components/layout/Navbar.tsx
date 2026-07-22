import { useSidebar } from "@/contexts/SidebarContext";
import { useProgress } from "@/contexts/ProgressContext";
import { useTheme } from "@/components/theme-provider";
import { Menu, Moon, Sun, Search, User, Flame } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useLocation } from "wouter";

export function Navbar() {
  const { toggleSidebar, setIsOpen } = useSidebar();
  const { progress } = useProgress();
  const { theme, setTheme } = useTheme();
  const [location] = useLocation();

  // Simple breadcrumb logic based on path
  const getBreadcrumbs = () => {
    if (location === "/") return "Home";
    const path = location.split("/").filter(Boolean);
    return path.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(" > ");
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b bg-background px-4 shadow-sm">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsOpen(true)} // Open mobile menu (handled by a Drawer or similar usually, but for simple responsive we can use toggle)
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-md hover:bg-accent"
        >
          <Menu className="w-6 h-6" />
        </button>
        
        <div className="hidden md:flex items-center text-sm font-medium text-muted-foreground">
          {getBreadcrumbs()}
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-6 flex-1 justify-end">
        <div className="hidden sm:flex items-center gap-3 flex-1 max-w-xs">
          <div className="flex flex-col w-full gap-1">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-muted-foreground">Progress</span>
              <span className="text-primary">{Math.round(progress.overallProgress)}%</span>
            </div>
            <Progress value={progress.overallProgress} className="h-2" />
          </div>
        </div>

        <button className="hidden sm:flex w-9 h-9 items-center justify-center rounded-full hover:bg-accent text-muted-foreground transition-colors">
          <Search className="w-5 h-5" />
        </button>

        <button 
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-accent text-muted-foreground transition-colors"
        >
          {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>

        <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center overflow-hidden border border-border">
          <User className="w-5 h-5 text-muted-foreground" />
        </div>
      </div>
    </header>
  );
}
