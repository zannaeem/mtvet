import { Card, CardContent } from "@/components/ui/card";

const PartnersSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-tvet-blue mb-4">
            DENGAN KERJASAMA
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {/* First Row - Sabah Ministries */}
          
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

          {/* Second Row - Malaysian Ministries & Institute */}
          
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
  );
};

export default PartnersSection;