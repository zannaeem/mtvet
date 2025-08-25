import { Helmet } from "react-helmet";
import Header from "@/components/ui/header";
import HeroSection from "@/components/ui/hero-section";
import ImageCarousel from "@/components/ui/image-carousel";
import VideoSection from "@/components/ui/video-section";
import EbookDownloadSection from "@/components/ui/ebook-download-section";
import PartnersSection from "@/components/ui/partners-section";
import GalleryImageSection from "@/components/ui/gallery-image-section";
import ContactOfficeSection from "@/components/ui/contact-office-section";
import ContactFooter from "@/components/ui/contact-footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Majlis TVET Sabah - Peneraju Masa Depan</title>
        <meta name="description" content="Majlis TVET Sabah adalah peneraju dalam pendidikan teknikal dan vokasional di Sabah. Membina masa depan melalui program TVET yang berkualiti." />
        <meta name="keywords" content="TVET, Sabah, pendidikan teknikal, pendidikan vokasional, kemahiran, latihan" />

        {/* Open Graph */}
        <meta property="og:title" content="Majlis TVET Sabah - Peneraju Masa Depan" />
        <meta property="og:description" content="Majlis TVET Sabah adalah peneraju dalam pendidikan teknikal dan vokasional di Sabah." />
        <meta property="og:type" content="website" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "GovernmentOrganization",
            "name": "Majlis TVET Sabah",
            "description": "Majlis TVET Sabah adalah peneraju dalam pendidikan teknikal dan vokasional di Sabah",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "9, Jalan Masjid Lama, Bandaran Berjaya",
              "addressLocality": "Kota Kinabalu",
              "addressRegion": "Sabah",
              "postalCode": "88000",
              "addressCountry": "MY"
            },
            "telephone": "088-218-722",
            "email": "Sekretariat.Tvet@sabah.gov.my"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <ImageCarousel />
          <VideoSection />
          <EbookDownloadSection />
                                <PartnersSection />
                      <GalleryImageSection />
                      <ContactOfficeSection />
                    </main>
        <ContactFooter />
      </div>
    </>
  );
};

export default Index;