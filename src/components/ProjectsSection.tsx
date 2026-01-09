import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Premium Sneaker Social Media Ad Design',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/404/f1e9c0231763265.Y3JvcCw4MDgsNjMyLDAsMA.jpg',
    link: 'https://www.behance.net/gallery/231763265/Premium-Sneaker-Social-Media-Ad-Design',
    category: 'Social Media',
    appreciations: 22,
    views: 30,
  },
  {
    title: 'Headphone Social Media Post Design',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/404/a64d22231656785.Y3JvcCw4MDgsNjMyLDAsMA.jpg',
    link: 'https://www.behance.net/gallery/231656785/Headphone-Social-Media-Post-Design',
    category: 'Social Media',
    appreciations: 5,
    views: 69,
  },
  {
    title: 'Natural Skincare Serum Design',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/404/cf7813231433745.Y3JvcCw4MDgsNjMyLDAsMA.jpg',
    link: 'https://www.behance.net/gallery/231433745/Natural-Skincare-Serum-Social-Media-Post-Design',
    category: 'Product Design',
    appreciations: 1,
    views: 13,
  },
  {
    title: 'Luxury Watch Social Media Design',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/404/92aedd231226917.Y3JvcCw4MDgsNjMyLDAsMA.jpg',
    link: 'https://www.behance.net/gallery/231226917/Luxury-Watch-Social-Media-Post-Design',
    category: 'Social Media',
    appreciations: 2,
    views: 25,
  },
  {
    title: 'Wireless Headphone Ad Banner',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/404/1dd41d229439645.Y3JvcCw4MDgsNjMyLDAsMA.jpg',
    link: 'https://www.behance.net/gallery/229439645/Wireless-Headphone-Ad-Banner-Social-Media-Design',
    category: 'Ad Banner',
    appreciations: 5,
    views: 64,
  },
  {
    title: 'Burger Ad Design Social Media',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/404/3e0aca228978301.Y3JvcCw4MDgsNjMyLDAsMA.jpg',
    link: 'https://www.behance.net/gallery/228978301/Burger-Ad-Design-Social-Media-Post-Promotion',
    category: 'Food Design',
    appreciations: 2,
    views: 22,
  },
  {
    title: 'Luxury Green Perfume Design',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/404/0d8d4f231163239.Y3JvcCw4MDgsNjMyLDAsMA.jpg',
    link: 'https://www.behance.net/gallery/231163239/Luxury-Green-Perfume-Social-Media-Post-Design',
    category: 'Product Design',
    appreciations: 6,
    views: 116,
  },
  {
    title: 'Hot & Spicy Burger Ad Design',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/404/607e4a229430837.Y3JvcCw0MjYxLDMzMzMsMzY5LDA.jpg',
    link: 'https://www.behance.net/gallery/229430837/Hot-Spicy-Burger-Social-Media-Ad-Design',
    category: 'Food Design',
    appreciations: 4,
    views: 23,
  },
  {
    title: 'ESCAPE - Sportswear Brand Identity',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/404/c2ccbf228334107.Y3JvcCw4MDgsNjMyLDAsMA.jpg',
    link: 'https://www.behance.net/gallery/228334107/ESCAPE-Sportswear-Brand-Identity',
    category: 'Branding',
    appreciations: 2,
    views: 17,
  },
  {
    title: 'ESCAPE – Futuristic Sportswear Branding',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/404/1593a5227978245.Y3JvcCwzMzY3LDI2MzMsMCww.jpg',
    link: 'https://www.behance.net/gallery/227978245/ESCAPE-Futuristic-Sportswear-Branding',
    category: 'Branding',
    appreciations: 5,
    views: 15,
  },
];

const ProjectsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(projects.length / itemsPerSlide);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const visibleProjects = projects.slice(
    currentSlide * itemsPerSlide,
    currentSlide * itemsPerSlide + itemsPerSlide
  );

  return (
    <section id="projects" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-0 w-40 h-40 bg-primary rounded-full opacity-5 blur-3xl" />
      <div className="absolute bottom-20 right-0 w-60 h-60 bg-primary rounded-full opacity-5 blur-3xl" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 animate-fadeInUp">My Portfolio</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            A collection of my best work showcasing social media designs, branding, 
            and creative solutions for various clients.
          </p>
        </div>

        {/* Slideshow */}
        <div className="relative">
          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-card shadow-card flex items-center justify-center text-foreground hover:text-primary hover:shadow-elevated transition-smooth"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-card shadow-card flex items-center justify-center text-foreground hover:text-primary hover:shadow-elevated transition-smooth"
          >
            <ChevronRight size={24} />
          </button>

          {/* Projects grid */}
          <div className="overflow-hidden px-8">
            <div
              className={`grid gap-6 transition-all duration-500 ${
                itemsPerSlide === 1 ? 'grid-cols-1' : itemsPerSlide === 2 ? 'grid-cols-2' : 'grid-cols-3'
              }`}
            >
              {visibleProjects.map((project, index) => (
                <a
                  key={`${project.title}-${currentSlide}-${index}`}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block animate-scaleIn"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-smooth transform hover:-translate-y-2">
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end justify-between p-4">
                        <span className="text-primary-foreground font-medium flex items-center gap-2">
                          View Project <ExternalLink size={16} />
                        </span>
                      </div>
                      {/* Category badge */}
                      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                        {project.category}
                      </span>
                    </div>
                    {/* Content */}
                    <div className="p-5">
                      <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-smooth line-clamp-2">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                        <span>❤️ {project.appreciations}</span>
                        <span>👁️ {project.views}</span>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-smooth ${
                  currentSlide === index
                    ? 'bg-primary w-8'
                    : 'bg-muted hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* View all button */}
        <div className="text-center mt-12">
          <a
            href="https://behance.net/antargfx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full gradient-primary text-primary-foreground font-medium shadow-elevated hover:opacity-90 transition-smooth"
          >
            View All Projects on Behance
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
