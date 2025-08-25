import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/src/assets/herobg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              MAJLIS TVET SABAH
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-white/90 font-light">
              PENERAJU MASA DEPAN
            </p>
            <Button 
              size="lg"
              className="bg-tvet-red hover:bg-tvet-red/90 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-elegant transition-smooth"
            >
              Ketahui
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-center justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Red Section */}
      <section className="bg-tvet-red py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text */}
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                MAJLIS TVET SABAH
              </h2>
              <p className="text-xl md:text-2xl text-white/90">
                Montaj Majlis Pelancaran Majlis TVET Sabah.
              </p>
            </div>

            {/* Right Side - YouTube Video */}
            <div className="bg-white/10 rounded-lg p-6">
              <div className="aspect-video bg-black rounded-lg overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/TaHlg8cuhS0?si=3_j-UhtRdok6l2xx"
                  title="Majlis TVET Sabah Video"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;