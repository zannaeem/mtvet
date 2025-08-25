import { Helmet } from "react-helmet";
import Header from "@/components/ui/header";
import ContactFooter from "@/components/ui/contact-footer";
import { Card, CardContent } from "@/components/ui/card";

const Pengenalan = () => {
  return (
    <>
      <Helmet>
        <title>Pengenalan - Majlis TVET Sabah</title>
        <meta name="description" content="Latar belakang Majlis TVET Sabah dan sejarah penubuhan majlis ini." />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main>
          {/* Hero Section - LATAR BELAKANG */}
          <section className="relative py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80"></div>
            
            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center">
              <div className="max-w-6xl mx-auto">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight">
                  LATAR BELAKANG
                </h1>
              </div>
            </div>
          </section>

          {/* Three Image Cards Section */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                
                {/* Card 1: Image 1 */}
                <Card className="shadow-2xl hover:shadow-elegant transition-all duration-300 hover:scale-105 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <img
                        src="/src/assets/1.jpg"
                        alt="Majlis TVET Sabah Activity 1"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Card 2: Image 2 */}
                <Card className="shadow-2xl hover:shadow-elegant transition-all duration-300 hover:scale-105 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <img
                        src="/src/assets/2.jpg"
                        alt="Majlis TVET Sabah Activity 2"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Card 3: Image 3 */}
                <Card className="shadow-2xl hover:shadow-elegant transition-all duration-300 hover:scale-105 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <img
                        src="/src/assets/4.jpg"
                        alt="Majlis TVET Sabah Activity 3"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>

              </div>
            </div>
          </section>

          {/* SEJARAH PENUBUHAN Section */}
          <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
                
                {/* Left Side - Text Content */}
                <div className="space-y-8">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                    SEJARAH PENUBUHAN
                  </h2>
                  
                  <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                    <p>
                      Penubuhan Majlis TVET Negeri Sabah (MTS) adalah selaras dengan inisiatif Majlis TVET Negara yang ditubuhkan pada 18 Disember 2020, bagi memperkukuh pembangunan pendidikan dan latihan teknikal serta vokasional (TVET) di peringkat negeri. Menyedari keperluan untuk memperjuangkan kepentingan TVET Sabah di peringkat nasional, Kerajaan Negeri Sabah telah meluluskan penubuhan MTS melalui Jemaah Menteri Kabinet Negeri pada 12 Februari 2025.
                    </p>
                    
                    <p>
                      MTS berperanan sebagai badan penyelaras dan penentu dasar hala tuju pembangunan TVET di Sabah, dengan mengambil kira kepentingan strategik negeri, termasuk aspek Perjanjian Malaysia 1963 (MA63), ciri sosioekonomi, dan geografi tempatan. Bagi menyokong pelaksanaan fungsinya, struktur MTS merangkumi Jawatankuasa Induk dan Jawatankuasa Teknikal yang disokong oleh Sekretariat Majlis TVET Sabah.
                    </p>
                    
                    <p>
                      Jawatankuasa Teknikal bertindak sebagai kumpulan pemikir strategik yang merangka pelan tindakan holistik dan bekerjasama erat dengan institusi pendidikan, industri, serta agensi kerajaan bagi memastikan dasar dan pelaksanaan TVET di Sabah adalah relevan, mampan dan berpaksikan keperluan semasa industri serta teknologi. Penubuhan MTS diharap dapat melonjakkan kualiti, kebolehpasaran graduan, serta daya saing tenaga kerja tempatan ke tahap yang lebih tinggi.
                    </p>
                  </div>
                </div>

                {/* Right Side - Event Image */}
                <div className="relative">
                  <div className="aspect-[3/4] bg-white rounded-2xl shadow-2xl overflow-hidden">
                    <img
                      src="/src/assets/1.jpg"
                      alt="Pelancaran Majlis TVET Negeri Sabah"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* FUNGSI & PERANAN MAJLIS Section */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                {/* Central Title and Description */}
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                    FUNGSI & PERANAN MAJLIS
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                    Majlis TVET Sabah berperanan menyelaras dasar dan pelaksanaan inisiatif TVET di negeri ini. 
                    Ia menghubungkan kerjasama antara industri dan institusi latihan, memantau keberkesanan program TVET, 
                    serta mempromosikan TVET sebagai laluan kerjaya yang relevan dan berdaya saing.
                  </p>
                </div>

                {/* Two-Column Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                  
                  {/* Left Column - Strategic Functions */}
                  <div className="space-y-8">
                    <h3 className="text-2xl font-bold text-tvet-blue mb-6">
                      Fungsi Strategik & Pembangunan
                    </h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-3 h-3 bg-tvet-red rounded-full mt-3 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Analisis Keperluan Tenaga Kerja</h4>
                          <p className="text-gray-600 leading-relaxed">
                            Menilai jurang keupayaan tenaga kerja industri termasuk permintaan untuk pekerja mahir, 
                            separa mahir, dan tidak mahir, serta kesiapsiagaan graduan TVET untuk memasuki pasaran kerja.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-3 h-3 bg-tvet-red rounded-full mt-3 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Pembangunan Modal Insan Komprehensif</h4>
                          <p className="text-gray-600 leading-relaxed">
                            Memastikan pembangunan sumber manusia yang menyeluruh dan berkualiti tinggi 
                            dalam bidang TVET untuk memenuhi keperluan industri masa kini dan masa hadapan.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-3 h-3 bg-tvet-red rounded-full mt-3 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Penilaian Bekalan & Permintaan</h4>
                          <p className="text-gray-600 leading-relaxed">
                            Mendapatkan penilaian semasa dan tepat tentang bekalan dan permintaan tenaga kerja 
                            dalam konteks pendidikan TVET untuk memastikan kesesuaian kurikulum.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-3 h-3 bg-tvet-red rounded-full mt-3 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Kolaborasi Multi-Stakeholder</h4>
                          <p className="text-gray-600 leading-relaxed">
                            Mentakwimkan sesi libat urus strategik antara badan pelaksana, institusi TVET, 
                            pemain industri, Badan Akreditasi dan NGO untuk mengukuhkan sistem pembelajaran TVET.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-3 h-3 bg-tvet-red rounded-full mt-3 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Pengurusan Dana & Pembiayaan</h4>
                          <p className="text-gray-600 leading-relaxed">
                            Memperakui dan menguruskan permohonan dana untuk pelaksanaan pembangunan 
                            dan pendidikan TVET yang berkualiti tinggi.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Impact & Initiatives */}
                  <div className="space-y-8">
                    <h3 className="text-2xl font-bold text-tvet-blue mb-6">
                      Impak & Inisiatif Masa Depan
                    </h3>
                    
                    <div className="space-y-6">
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-xl border-l-4 border-tvet-blue">
                        <h4 className="font-semibold text-gray-800 mb-3">Daya Saing Global</h4>
                        <p className="text-gray-600 leading-relaxed">
                          TVET akan memberikan impak positif dan penting dalam memastikan tenaga kerja Sabah 
                          kekal relevan dan berdaya saing di peringkat negeri dan global.
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-xl border-l-4 border-tvet-red">
                        <h4 className="font-semibold text-gray-800 mb-3">Insentif Industri</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Memperkenalkan inisiatif melalui penyediaan insentif khusus seperti pembiayaan 
                          atau bantuan fizikal kepada syarikat yang terlibat dalam program TVET.
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-6 rounded-xl border-l-4 border-tvet-blue">
                        <h4 className="font-semibold text-gray-800 mb-3">Pembelajaran Berterusan</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Menyokong dan mempromosikan pembelajaran berterusan untuk graduan Sabah dalam 
                          pelancongan, pertanian, dan perindustrian untuk meningkatkan kebolehpasaran.
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-orange-50 to-red-100 p-6 rounded-xl border-l-4 border-tvet-red">
                        <h4 className="font-semibold text-gray-800 mb-3">Penilaian & Persetujuan</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Menilai usul cadangan dan keberkesanan latihan, serta memastikan semua program 
                          TVET mendapat persetujuan daripada ahli-ahli Majlis TVET Negeri.
                        </p>
                      </div>
                    </div>
                  </div>
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

export default Pengenalan;