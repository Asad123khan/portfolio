import { FormEvent, useState } from "react";
import { Mail, MapPin, Send, Phone } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitMessage, setSubmitMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const subject = formData.subject.trim();
    const message = formData.message.trim();

    if (!name || !email || !subject || !message) {
      setSubmitMessage("Please fill all fields before sending.");
      return;
    }

    try {
      setIsSubmitting(true);
      setSubmitMessage("Sending message...");

      const response = await fetch("https://formsubmit.co/ajax/asadullahkhan814@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject: `Portfolio Contact: ${subject}`,
          message,
          _captcha: "false",
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setSubmitMessage("Message sent successfully. I will get back to you soon.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch {
      setSubmitMessage("Message could not be sent. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-alt relative overflow-hidden py-16 sm:py-20 lg:py-28">
      <div className="absolute bottom-0 right-0 hidden h-[280px] w-[280px] bg-hero-gradient opacity-[0.08] blur-2xl sm:block lg:h-[400px] lg:w-[400px] lg:blur-3xl blob" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center sm:mb-10 lg:mb-12">
            <div className="flex items-center justify-center gap-3 mb-3" data-aos="fade-up">
              <div className="h-1 w-12 bg-hero-gradient rounded-full" />
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">Contact</span>
              <div className="h-1 w-12 bg-hero-gradient rounded-full" />
            </div>
            <h2 className="mb-4 text-3xl font-display font-bold text-foreground sm:text-4xl md:text-5xl" data-aos="fade-up" data-aos-delay="90">
              Let's <span className="text-gradient-hero">work together</span>
            </h2>
            <p className="mx-auto max-w-lg text-base text-muted-foreground sm:text-lg" data-aos="fade-up" data-aos-delay="140">
              Looking for a frontend engineer for React/Next.js projects? Let's connect and discuss your product goals.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="rounded-2xl bg-dark-gradient p-5 text-primary-foreground sm:p-6 lg:p-8" data-aos="fade-right" data-aos-delay="140">
                <h3 className="text-xl font-display font-bold mb-6">Get in touch</h3>
                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-primary-foreground/60 mb-0.5">Email</p>
                      <p className="break-all text-sm font-medium">asadullahkhan814@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-primary-foreground/60 mb-0.5">Phone</p>
                      <p className="text-sm font-medium">0346 9104124</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-primary-foreground/60 mb-0.5">Location</p>
                      <p className="text-sm font-medium">Lahore, Pakistan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-4" onSubmit={handleSubmit} data-aos="fade-left" data-aos-delay="180">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(event) =>
                    setFormData((prev) => ({ ...prev, name: event.target.value }))
                  }
                  required
                  className="w-full px-5 py-3.5 rounded-xl bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(event) =>
                    setFormData((prev) => ({ ...prev, email: event.target.value }))
                  }
                  required
                  className="w-full px-5 py-3.5 rounded-xl bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={(event) =>
                  setFormData((prev) => ({ ...prev, subject: event.target.value }))
                }
                required
                className="w-full px-5 py-3.5 rounded-xl bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              />
              <textarea
                rows={5}
                placeholder="Your Message..."
                value={formData.message}
                onChange={(event) =>
                  setFormData((prev) => ({ ...prev, message: event.target.value }))
                }
                required
                className="w-full px-5 py-3.5 rounded-xl bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
              />
              {submitMessage && (
                <p className="text-sm text-muted-foreground">{submitMessage}</p>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-hero-gradient text-primary-foreground px-8 py-3.5 rounded-xl font-semibold text-sm hover:shadow-xl hover:shadow-primary/20 transition-shadow flex items-center justify-center gap-2"
              >
                <Send size={16} />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
