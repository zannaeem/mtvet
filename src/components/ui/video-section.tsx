import { Card, CardContent } from "@/components/ui/card";

const VideoSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-tvet-blue mb-4">
            Liputan Berita
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* First Video */}
          <Card className="shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
            <CardContent className="p-6">
              <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.youtube.com/embed/SJFg8VDNcho?si=6coTsYsH_2lPxB73"
                  title="YouTube Video 1"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </CardContent>
          </Card>

          {/* Second Video */}
          <Card className="shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
            <CardContent className="p-6">
              <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.youtube.com/embed/DakEEaZSIn8?si=HiscctINs3HAGR9_"
                  title="YouTube Video 2"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
