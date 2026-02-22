import { Mail, MapPin, Send, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-28 section-alt relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-hero-gradient opacity-[0.08] blob blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-1 w-12 bg-hero-gradient rounded-full" />
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">Contact</span>
              <div className="h-1 w-12 bg-hero-gradient rounded-full" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Let's <span className="text-gradient-hero">work together</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-lg mx-auto">
              Got a project in mind? I'd love to hear about it. Drop me a message and let's create something amazing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="rounded-2xl bg-dark-gradient p-8 text-primary-foreground">
                <h3 className="text-xl font-display font-bold mb-6">Get in touch</h3>
                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-primary-foreground/60 mb-0.5">Email</p>
                      <p className="text-sm font-medium">asad@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-primary-foreground/60 mb-0.5">Phone</p>
                      <p className="text-sm font-medium">+92 XXX XXXXXXX</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-primary-foreground/60 mb-0.5">Location</p>
                      <p className="text-sm font-medium">Pakistan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-5 py-3.5 rounded-xl bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-5 py-3.5 rounded-xl bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-5 py-3.5 rounded-xl bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              />
              <textarea
                rows={5}
                placeholder="Your Message..."
                className="w-full px-5 py-3.5 rounded-xl bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
              />
              <button
                type="submit"
                className="w-full bg-hero-gradient text-primary-foreground px-8 py-3.5 rounded-xl font-semibold text-sm hover:shadow-xl hover:shadow-primary/20 transition-shadow flex items-center justify-center gap-2"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
