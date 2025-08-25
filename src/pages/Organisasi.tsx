import { Helmet } from "react-helmet";
import Header from "@/components/ui/header";
import ContactFooter from "@/components/ui/contact-footer";
import { Card, CardContent } from "@/components/ui/card";

const Organisasi = () => {
  return (
    <>
      <Helmet>
        <title>Organisasi - Majlis TVET Sabah</title>
        <meta name="description" content="Struktur organisasi Majlis TVET Sabah dan kepimpinan majlis." />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main>
          {/* Hero Section - STRUKTUR ORGANISASI */}
          <section className="relative py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80"></div>
            
            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center">
              <div className="max-w-6xl mx-auto">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight">
                  STRUKTUR ORGANISASI
                </h1>
              </div>
            </div>
          </section>

          {/* Content Section - Minister Information */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
                
                {/* Left Side - Minister Portrait */}
                <div className="relative">
                  <div className="aspect-[3/4] bg-white rounded-2xl shadow-2xl overflow-hidden">
                    <img
                      src="/src/assets/datukariffin.png"
                      alt="YB Datuk Dr Haji Mohd. Ariffin bin Datuk Haji Mohd Arif, JP"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Right Side - Minister Details */}
                <div className="space-y-8">
                  <div className="space-y-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                      YB DATUK DR HAJI MOHD. ARIFFIN
                    </h2>
                    
                    <div className="space-y-4">
                      <p className="text-2xl md:text-3xl font-semibold text-gray-800">
                        BIN DATUK HAJI MOHD ARIF, JP
                      </p>
                      
                                             <div className="space-y-4">
                         <div className="bg-tvet-blue p-4 rounded-lg">
                           <h3 className="text-lg font-bold text-white">
                             MENTERI SAINS, TEKNOLOGI DAN INOVASI SABAH
                           </h3>
                         </div>
                         
                         <div className="bg-tvet-red p-4 rounded-lg">
                           <h3 className="text-lg font-bold text-white">
                             MERANGKAP PENGERUSI MAJLIS TVET SABAH
                           </h3>
                         </div>
                       </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="mt-12 p-6 bg-gray-50 rounded-xl">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">
                      Peranan dalam Majlis TVET Sabah
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Sebagai Pengerusi Majlis TVET Sabah, YB Datuk Dr Haji Mohd. Ariffin 
                      memainkan peranan penting dalam memimpin dan mengarahkan pembangunan 
                      pendidikan teknikal dan vokasional di negeri Sabah.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Deputy Minister Section */}
          <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
                
                {/* Left Side - Deputy Minister Portrait */}
                <div className="relative">
                  <div className="aspect-[3/4] bg-white rounded-2xl shadow-2xl overflow-hidden">
                    <img
                      src="/src/assets/datukharun.png"
                      alt="YB Datuk Harun bin Durabi"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Right Side - Deputy Minister Details */}
                <div className="space-y-8">
                  <div className="space-y-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                      YB DATUK HARUN BIN DURABI
                    </h2>
                    
                    <div className="space-y-4">
                      <div className="space-y-4">
                        <div className="bg-blue-600 p-4 rounded-lg">
                          <h3 className="text-lg font-bold text-white">
                            TIMBALAN MENTERI SAINS, TEKNOLOGI DAN INOVASI SABAH
                          </h3>
                        </div>
                        
                        <div className="bg-red-600 p-4 rounded-lg">
                          <h3 className="text-lg font-bold text-white">
                            MERANGKAP TIMBALAN PENGERUSI MAJLIS TVET SABAH
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="mt-12 p-6 bg-white rounded-xl shadow-lg">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">
                      Peranan dalam Majlis TVET Sabah
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Sebagai Timbalan Pengerusi Majlis TVET Sabah, YB Datuk Harun bin Durabi 
                      memainkan peranan penting dalam menyokong dan melaksanakan dasar-dasar 
                      pembangunan pendidikan teknikal dan vokasional di negeri Sabah.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Permanent Secretary Section */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
                
                {/* Left Side - Permanent Secretary Portrait */}
                <div className="relative">
                  <div className="aspect-[3/4] bg-white rounded-2xl shadow-2xl overflow-hidden">
                    <img
                      src="/src/assets/hanafiah.png"
                      alt="YBHG. Datuk Mohd Hanafiah Mohd Kassim"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Right Side - Permanent Secretary Details */}
                <div className="space-y-8">
                  <div className="space-y-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                      YBHG. DATUK MOHD HANAFIAH MOHD KASSIM
                    </h2>
                    
                    <div className="space-y-4">
                      <div className="space-y-4">
                        <div className="bg-green-600 p-4 rounded-lg">
                          <h3 className="text-lg font-bold text-white">
                            SETIAUSAHA TETAP KEMENTERIAN SAINS, TEKNOLOGI DAN INOVASI SABAH
                          </h3>
                        </div>
                        
                        <div className="bg-orange-600 p-4 rounded-lg">
                          <h3 className="text-lg font-bold text-white">
                            MERANGKAP SETIAUSAHA MAJLIS TVET SABAH
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="mt-12 p-6 bg-gray-50 rounded-xl">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">
                      Peranan dalam Majlis TVET Sabah
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Sebagai Setiausaha Majlis TVET Sabah, YBHG. Datuk Mohd Hanafiah Mohd Kassim 
                      memainkan peranan penting dalam menguruskan operasi harian dan menyelaras 
                      aktiviti-aktiviti pembangunan pendidikan teknikal dan vokasional di negeri Sabah.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* AHLI MAJLIS INDUK TVET NEGERI SABAH Section */}
          <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-tvet-blue mb-4">
                  AHLI MAJLIS INDUK TVET NEGERI SABAH
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                {/* First Row - Sabah State Ministries/Units */}

                {/* KEMENTERIAN PEMBANGUNAN PERINDUSTRIAN & KEUSAHAWANAN */}
                <Card className="bg-white shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
                  <CardContent className="p-2 text-center">
                    <div className="w-40 h-40 mx-auto flex items-center justify-center">
                      <img
                        src="/src/assets/usahawan.jpg"
                        alt="Kementerian Pembangunan Perindustrian & Keusahawanan"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* KEMENTERIAN PERTANIAN, PERIKANAN & INDUSTRI MAKANAN SABAH */}
                <Card className="bg-white shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
                  <CardContent className="p-2 text-center">
                    <div className="w-40 h-40 mx-auto flex items-center justify-center">
                      <img
                        src="/src/assets/pertanian.jpg"
                        alt="Kementerian Pertanian, Perikanan & Industri Makanan Sabah"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* KEMENTERIAN BELIA DAN SUKAN SABAH */}
                <Card className="bg-white shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
                  <CardContent className="p-2 text-center">
                    <div className="w-40 h-40 mx-auto flex items-center justify-center">
                      <img
                        src="/src/assets/upen.jpg"
                        alt="Kementerian Belia dan Sukan Sabah"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* UNIT PERANCANG EKONOMI NEGERI SABAH */}
                <Card className="bg-white shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
                  <CardContent className="p-2 text-center">
                    <div className="w-40 h-40 mx-auto flex items-center justify-center">
                      <img
                        src="/src/assets/upen.jpg"
                        alt="Unit Perancang Ekonomi Negeri Sabah"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Second Row - Federal Ministries & Institute */}

                {/* KEMENTERIAN PENGAJIAN TINGGI */}
                <Card className="bg-white shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
                  <CardContent className="p-2 text-center">
                    <div className="w-40 h-40 mx-auto flex items-center justify-center">
                      <img
                        src="/src/assets/kpt.jpg"
                        alt="Kementerian Pengajian Tinggi"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* KEMENTERIAN PENDIDIKAN JABATAN PENDIDIKAN NEGERI SABAH */}
                <Card className="bg-white shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
                  <CardContent className="p-2 text-center">
                    <div className="w-40 h-40 mx-auto flex items-center justify-center">
                      <img
                        src="/src/assets/pendidikan.jpg"
                        alt="Kementerian Pendidikan Jabatan Pendidikan Negeri Sabah"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* KEMENTERIAN SUMBER MANUSIA */}
                <Card className="bg-white shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
                  <CardContent className="p-2 text-center">
                    <div className="w-40 h-40 mx-auto flex items-center justify-center">
                      <img
                        src="/src/assets/sumber.jpg"
                        alt="Kementerian Sumber Manusia"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* INSTITUTE FOR DEVELOPMENT STUDIES (SABAH) */}
                <Card className="bg-white shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
                  <CardContent className="p-2 text-center">
                    <div className="w-40 h-40 mx-auto flex items-center justify-center">
                      <img
                        src="/src/assets/insken.jpg"
                        alt="Institute for Development Studies (Sabah)"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>
        <ContactFooter />
      </div>
    </>
  );
};

export default Organisasi;