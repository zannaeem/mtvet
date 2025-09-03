import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

interface NavigationProps {
  className?: string;
}

const Navigation = ({ className }: NavigationProps) => {
  const location = useLocation();
  
  const navItems = [
    { label: "Halaman utama", href: "/" },
    { label: "Pengenalan", href: "/pengenalan" },
    { label: "Organisasi", href: "/organisasi" },
    { label: "Aktiviti", href: "/aktiviti" },
    { label: "Hubungi Kami", href: "/hubungi-kami" },
  ];

  return (
    <nav className={cn("flex items-center space-x-8", className)}>
      {navItems.map((item) => {
        const isActive = location.pathname === item.href;
        return (
          <Button
            key={item.label}
            variant={isActive ? "default" : "ghost"}
            className={cn(
              "text-sm font-medium transition-smooth",
              isActive
                ? "bg-primary text-primary-foreground hover:bg-primary/90 underline"
                : "text-foreground hover:text-primary hover:bg-transparent"
            )}
            asChild
          >
            <Link to={item.href}>{item.label}</Link>
          </Button>
        );
      })}
    </nav>
  );
};

export default Navigation;