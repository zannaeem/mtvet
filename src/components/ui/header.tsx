import Navigation from "@/components/ui/navigation";

const Header = () => {
  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-1">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              {/* Main Logo */}
              <div className="w-20 h-20 flex items-center justify-center">
                <img
                  src="/src/assets/logo.jpg"
                  alt="Majlis TVET Sabah Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
          {/* Navigation */}
          <div className="hidden md:block">
            <Navigation />
          </div>
          {/* Mobile menu button */}
          <button className="md:hidden p-2 hover:bg-muted rounded-md">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Mobile Navigation */}
        <div className="md:hidden mt-1 pt-1 border-t border-border">
          <Navigation className="flex-col items-start space-x-0 space-y-2" />
        </div>
      </div>
    </header>
  );
};

export default Header;