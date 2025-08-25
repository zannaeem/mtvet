import { Card, CardContent } from "@/components/ui/card";

const ContactFooter = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Logo and Title */}
          <div className="flex items-center space-x-6">
            {/* Logo */}
            <div className="w-20 h-20 flex items-center justify-center">
              <img
                src="/src/assets/footer.png"
                alt="Majlis TVET Sabah Logo"
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Title */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                MAJLIS TVET SABAH
              </h3>
              <p className="text-gray-300 text-lg">
                PENERAJU MASA DEPAN
              </p>
            </div>
          </div>

          {/* Right Side - Contact Info */}
          <div className="text-right">
            <div className="space-y-4">
              <div className="flex items-center justify-end space-x-3">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span className="text-lg text-gray-300">
                  Emel: Sekretariat.Tvet@sabah.gov.my
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2025 - Hakcipta Terpelihara. Dibangunkan oleh Majlis TVET Sabah
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;