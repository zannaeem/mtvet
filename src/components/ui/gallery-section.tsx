import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const GallerySection = () => {
  return (
    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-tvet-blue mb-4">
            MAJLIS TVET SABAH
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Montaj Majlis Pelancaran Majlis TVET Sabah.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Gallery items would go here */}
          <Card className="overflow-hidden shadow-card hover:shadow-elegant transition-smooth">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <span className="text-muted-foreground">Gallery Image 1</span>
            </div>
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground">Gallery description</p>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden shadow-card hover:shadow-elegant transition-smooth">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <span className="text-muted-foreground">Gallery Image 2</span>
            </div>
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground">Gallery description</p>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden shadow-card hover:shadow-elegant transition-smooth">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <span className="text-muted-foreground">Gallery Image 3</span>
            </div>
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground">Gallery description</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;