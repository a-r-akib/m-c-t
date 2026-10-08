import WebPageWrapper from "../WebPageWrapper";

export default function HomeGallery() {
  const galleryItems = [
    {
      title: "Life with Muhammad Cars",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Life with Muhammad Cars",
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Life with Muhammad Cars",
      image: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Life with Muhammad Cars",
      image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-20 bg-white relative">
      <WebPageWrapper>
        <div className="space-y-8 relative z-20">
          {/* Section Heading */}
          <div className="space-y-1">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Editorial Gallery
            </h2>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden bg-zinc-100 transition-all duration-300 h-80 flex flex-col justify-end p-4"
              >
                {/* Background Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent"></div>

                {/* Label Overlay */}
                <div className="relative z-10">
                  <p className="text-white font-medium text-sm tracking-wide">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </WebPageWrapper>

      <div className="h-1/2 bg-black absolute w-full top-0"/>
    </section>
  );
}