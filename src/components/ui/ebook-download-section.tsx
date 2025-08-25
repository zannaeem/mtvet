import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const EbookDownloadSection = () => {
  const handleDownload = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    
    // Set the href to your PDF file path
    // Update this path when you have the actual PDF file
    link.href = '/src/assets/ebook.pdf'; // You'll need to place your PDF here
    
    // Set the download attribute with the filename
    link.download = 'Majlis-TVET-Sabah-Ebook.pdf';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text and Download Button */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              DAPATKAN E-BOOK KAMI!
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Muat turun e-book eksklusif Majlis TVET Sabah yang mengandungi maklumat lengkap tentang program dan inisiatif kami.
            </p>
            <Button
              onClick={handleDownload}
              size="lg"
              className="bg-tvet-red hover:bg-tvet-red/90 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-elegant transition-all duration-300 hover:scale-105"
            >
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              MUAT TURUN
            </Button>
          </div>

          {/* Right Side - Ebook Cover */}
          <div className="flex justify-center lg:justify-end">
            <Card className="w-full max-w-lg bg-white/10 backdrop-blur-sm border-white/20 shadow-2xl">
              <CardContent className="p-8">
                <div className="aspect-[4/3] bg-gradient-to-br from-tvet-blue/20 to-tvet-red/20 rounded-lg border-2 border-white/30 overflow-hidden">
                  <img
                    src="/src/assets/cover.jpg"
                    alt="Majlis TVET Sabah E-Book Cover"
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EbookDownloadSection;
