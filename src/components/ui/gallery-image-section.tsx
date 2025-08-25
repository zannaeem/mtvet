const GalleryImageSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-tvet-blue mb-4">
            Aktiviti & Program
          </h2>
          <p className="text-lg text-gray-600">
            Dokumentasi aktiviti dan program Majlis TVET Sabah
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <img
              src="/src/assets/gallery.jpg"
              alt="Majlis TVET Sabah Activities and Programs"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryImageSection;
