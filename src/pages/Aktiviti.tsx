import { Helmet } from "react-helmet";
import Header from "@/components/ui/header";
import ContactFooter from "@/components/ui/contact-footer";

const Aktiviti = () => {
  return (
    <>
      <Helmet>
        <title>Aktiviti - Majlis TVET Sabah</title>
        <meta name="description" content="Aktiviti dan media Majlis TVET Sabah termasuk aktiviti tahunan dan program-program terkini." />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main>
          {/* Hero Section - AKTIVITI & MEDIA */}
          <section className="relative py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80"></div>
            
            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center">
              <div className="max-w-6xl mx-auto">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight">
                  AKTIVITI & MEDIA
                </h1>
              </div>
            </div>
          </section>

          {/* AKTIVITI TAHUNAN Section */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                {/* Red Banner */}
                <div className="bg-tvet-red py-8 mb-12 rounded-2xl">
                  <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                      AKTIVITI TAHUNAN
                    </h2>
                  </div>
                </div>

                                 {/* Video Section */}
                 <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                   <div className="aspect-video w-full">
                     <iframe
                       src="https://www.youtube.com/embed/TaHlg8cuhS0?list=TLGGivbS3Ev6W0AyNTA4MjAyNQ"
                       title="LATEST MAJLIS TVET MONTAJ 2025"
                       className="w-full h-full border-0"
                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                       allowFullScreen
                     ></iframe>
                   </div>
                 </div>

                {/* Additional Information */}
                <div className="mt-12 text-center">
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Tonton video terkini Majlis TVET Sabah yang menampilkan aktiviti dan program 
                    yang telah dilaksanakan sepanjang tahun 2025.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <ContactFooter />
      </div>
    </>
  );
};

export default Aktiviti;