import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Layers, Zap } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Clean Code", desc: "Writing maintainable, well-structured code that scales." },
  { icon: Layers, title: "Full Stack Aware", desc: "Frontend-focused with solid backend understanding." },
  { icon: Zap, title: "Performance First", desc: "Optimized experiences that load fast and feel smooth." },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 section-alt">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-10" />

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-5">
              <p className="text-muted-foreground leading-relaxed">
                I'm Asad Ullah, a frontend developer with a deep love for crafting beautiful, 
                functional web applications. With expertise in <span className="text-foreground font-medium">React.js</span>,{" "}
                <span className="text-foreground font-medium">Next.js</span>, and{" "}
                <span className="text-foreground font-medium">Laravel</span>, I bridge the gap between
                design and engineering.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in writing clean, efficient code that not only works but is a pleasure to 
                maintain. Every project I take on is an opportunity to push boundaries and deliver 
                something exceptional. When I'm not coding, you'll find me exploring new technologies,
                contributing to open source, or sharpening my problem-solving skills.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My goal? To build digital products that make a real impact — fast, accessible, and 
                delightful for every user.
              </p>
            </div>

            <div className="grid gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-4 p-5 rounded-xl bg-background border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
