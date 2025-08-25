import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

const InstagramGallery = () => {
  return (
    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-tvet-blue mb-4">
            PEJABAT KAMI
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="shadow-card hover:shadow-elegant transition-smooth">
            <CardHeader className="text-center">
              <MapPin className="w-8 h-8 text-tvet-red mx-auto mb-2" />
              <CardTitle className="text-lg">Alamat</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground text-sm">
                9, Jalan Masjid Lama, Bandaran Berjaya, 88000 Kota Kinabalu, Sabah
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-card hover:shadow-elegant transition-smooth">
            <CardHeader className="text-center">
              <Clock className="w-8 h-8 text-tvet-red mx-auto mb-2" />
              <CardTitle className="text-lg">Masa Bekerja</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground text-sm">
                8.00 pagi - 5.00 petang
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-card hover:shadow-elegant transition-smooth">
            <CardHeader className="text-center">
              <Phone className="w-8 h-8 text-tvet-red mx-auto mb-2" />
              <CardTitle className="text-lg">No.Telefon</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground text-sm">
                088-218-722
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-card hover:shadow-elegant transition-smooth">
            <CardHeader className="text-center">
              <Mail className="w-8 h-8 text-tvet-red mx-auto mb-2" />
              <CardTitle className="text-lg">Emel</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground text-sm">
                Sekretariat.Tvet@sabah.gov.my
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;