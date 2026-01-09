import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-40 right-1/3 w-80 h-80 bg-primary/8 rounded-full blur-3xl animate-blob animation-delay-4000" />
        
        {/* Decorative orange circles */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-primary rounded-full opacity-80 animate-float" />
        <div className="absolute bottom-40 right-20 w-10 h-10 bg-primary rounded-full opacity-60 animate-float animation-delay-2000" />
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-primary rounded-full opacity-40 animate-float animation-delay-4000" />
      </div>

      {/* Wave pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-40 wave-bg" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <p className="text-primary font-body font-medium text-lg mb-4">
            Hello, I'm
          </p>
        </div>

        <div className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4">
            Antar Saha
          </h1>
        </div>

        <div className="animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <p className="font-display text-2xl md:text-3xl text-foreground/80 mb-2">
            <span className="italic">Creative</span>{' '}
            <span className="gradient-text font-bold">Graphic Designer</span>
          </p>
        </div>

        <div className="animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto mt-6 mb-10">
            Transforming ideas into stunning visuals. Specializing in social media designs, 
            branding, and creative solutions that make your brand stand out.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeInUp" style={{ animationDelay: '1s' }}>
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-full gradient-primary text-primary-foreground font-medium shadow-elevated hover:shadow-soft transition-smooth hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full border-2 border-primary text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-smooth"
          >
            Get In Touch
          </a>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-12 mt-16 animate-fadeInUp" style={{ animationDelay: '1.2s' }}>
          <div className="text-center">
            <p className="font-display text-4xl font-bold gradient-text">80+</p>
            <p className="font-body text-sm text-muted-foreground mt-1">Projects Done</p>
          </div>
          <div className="w-px h-12 bg-border" />
          <div className="text-center">
            <p className="font-display text-4xl font-bold gradient-text">544</p>
            <p className="font-body text-sm text-muted-foreground mt-1">Project Views</p>
          </div>
          <div className="w-px h-12 bg-border" />
          <div className="text-center">
            <p className="font-display text-4xl font-bold gradient-text">54</p>
            <p className="font-body text-sm text-muted-foreground mt-1">Appreciations</p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-smooth">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
