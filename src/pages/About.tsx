import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";
import SectionHeading from "@/components/SectionHeading";

const team = [
  { name: "James Worthington", title: "Founder & Principal Broker", initials: "JW" },
  { name: "Victoria Harrington", title: "Senior Luxury Advisor", initials: "VH" },
  { name: "Alexander Cole", title: "Mountain Properties Specialist", initials: "AC" },
  { name: "Sophia Laurent", title: "International Sales Director", initials: "SL" },
];

const About = () => {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={aboutHero} alt="Luxury interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-gold text-xs uppercase tracking-[0.3em] mb-4 block">
            Our Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground"
          >
            About Prestige
          </motion.h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6 lg:px-12">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-gold text-xs uppercase tracking-[0.2em] font-medium mb-3 block">Since 1998</span>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-8">A Legacy Built on Trust</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Founded in 1998, Prestige Realty was born from a simple belief: that finding your dream home should be
              an extraordinary experience. What began as a boutique firm in Manhattan has grown into a globally
              recognized name in luxury real estate, with a portfolio spanning the most coveted addresses worldwide.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our success is built on deep relationships, uncompromising integrity, and an unwavering commitment
              to excellence. Every client receives our full attention, every property is presented with the care
              it deserves, and every transaction is handled with the utmost discretion and professionalism.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-cream px-6 lg:px-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Our Mission", desc: "To redefine the luxury real estate experience through personalized service, market expertise, and an unwavering dedication to our clients' aspirations." },
              { icon: Eye, title: "Our Vision", desc: "To be the most trusted name in global luxury real estate, setting the standard for excellence and innovation in every market we serve." },
              { icon: Heart, title: "Our Values", desc: "Integrity, discretion, and excellence guide every interaction. We believe in building lasting relationships founded on trust and mutual respect." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center p-8"
              >
                <div className="w-14 h-14 mx-auto mb-6 border border-gold/30 flex items-center justify-center">
                  <item.icon size={24} className="text-gold" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 lg:px-12">
        <div className="container mx-auto">
          <SectionHeading
            subtitle="Our Team"
            title="Meet the Experts"
            description="A dedicated team of professionals committed to delivering an exceptional experience."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="w-32 h-32 mx-auto mb-6 bg-muted flex items-center justify-center border border-border group-hover:border-gold transition-colors">
                  <span className="font-heading text-2xl text-muted-foreground">{member.initials}</span>
                </div>
                <h3 className="font-heading text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-foreground">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
              Let's Find Your Perfect Property
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-10 py-4 text-sm uppercase tracking-widest font-medium hover:bg-gold-dark transition-colors"
            >
              Get in Touch <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default About;
