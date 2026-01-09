import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a href="#home" className="font-display text-xl font-bold">
            <span className="text-primary-foreground">Antar</span>
            <span className="text-primary">GFX</span>
          </a>

          {/* Copyright */}
          <p className="font-body text-sm text-primary-foreground/70 flex items-center gap-1">
            © {currentYear} Antar Saha. Made with 
            <Heart size={14} className="text-primary fill-primary" />
          </p>

          {/* Back to top */}
          <a
            href="#home"
            className="text-sm text-primary-foreground/70 hover:text-primary transition-smooth"
          >
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
