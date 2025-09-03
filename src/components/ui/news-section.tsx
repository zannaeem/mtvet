import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const NewsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-tvet-blue mb-4">
            LIPUTAN BERITA
          </h2>
          <Button 
            size="lg"
            className="bg-tvet-red hover:bg-tvet-red/90 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-elegant transition-smooth"
          >
            MUAT TURUN
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* News items would go here */}
          <Card className="shadow-card hover:shadow-elegant transition-smooth">
            <CardHeader>
              <CardTitle className="text-lg">News Item 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">News description goes here...</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-card hover:shadow-elegant transition-smooth">
            <CardHeader>
              <CardTitle className="text-lg">News Item 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">News description goes here...</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-card hover:shadow-elegant transition-smooth">
            <CardHeader>
              <CardTitle className="text-lg">News Item 3</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">News description goes here...</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;