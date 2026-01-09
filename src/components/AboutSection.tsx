import { Palette, Layers, Sparkles, Award } from 'lucide-react';

const skills = [
  { icon: Palette, name: 'Adobe Photoshop', level: 95 },
  { icon: Layers, name: 'Adobe Illustrator', level: 85 },
  { icon: Sparkles, name: 'Social Media Design', level: 90 },
  { icon: Award, name: 'Brand Identity', level: 85 },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 right-0 w-32 h-32 bg-primary rounded-full opacity-10 blur-2xl" />
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-primary rounded-full opacity-20" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative animate-slideInLeft">
            <div className="relative z-10">
              <div className="absolute inset-0 gradient-primary rounded-2xl transform rotate-3 opacity-20" />
              <div className="relative bg-gradient-to-br from-primary to-orange-600 p-1 rounded-2xl shadow-elevated">
                <img
                  src="https://antarweb.github.io/image/profile.jpg"
                  alt="Antar Saha"
                  className="w-full aspect-[3/4] object-cover rounded-xl"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-8 -right-8 bg-card p-6 rounded-xl shadow-card animate-float">
                <p className="font-display text-3xl font-bold gradient-text">1+</p>
                <p className="font-body text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div>
            <p className="text-primary font-medium mb-2 animate-fadeInUp">About Me</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              Why Choose <span className="gradient-text">Me?</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground font-body animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <p>
                I'm Antar Saha, a passionate graphic designer from Mymensingh, Bangladesh. 
                With a unique background blending scientific insight with strong digital creativity, 
                I bring a fresh perspective to every project.
              </p>
              <p>
                My journey as a graphic designer began with my love for visual storytelling and 
                how branding and concepts are brought to life through graphic visuals. 
                I specialize in social media designs, product promotions, and brand identity creation.
              </p>
              <p>
                Whether I'm building a brand identity from the ground up or refreshing a digital interface, 
                my goal is to create work that feels as intentional as it is aesthetic.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-10 space-y-4 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              {skills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <skill.icon className="w-5 h-5 text-primary" />
                      <span className="font-body font-medium text-foreground">{skill.name}</span>
                    </div>
                    <span className="text-primary font-medium">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full gradient-primary rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.1}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              <a
                href="https://www.behance.net/antargfx/resume"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full gradient-primary text-primary-foreground font-medium shadow-elevated hover:opacity-90 transition-smooth"
              >
                View Resume
              </a>
              <a
                href="https://behance.net/antargfx"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border-2 border-primary text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                Behance Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
