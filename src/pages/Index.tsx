import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Award, Users, Star, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-property.jpg";
import aboutImage from "@/assets/about-hero.jpg";
import { properties } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";
import SectionHeading from "@/components/SectionHeading";

const testimonials = [
  { name: "Elizabeth Crawford", role: "Homeowner, Greenwich", text: "Prestige made finding our dream estate effortless. Their attention to detail and understanding of luxury properties is unmatched.", rating: 5 },
  { name: "Jonathan Pierce", role: "Investor, Manhattan", text: "Exceptional service from start to finish. Their market knowledge and discretion set them apart from every other firm I've worked with.", rating: 5 },
  { name: "Catherine Wells", role: "Homeowner, Beverly Hills", text: "The team at Prestige truly understands the meaning of luxury. They found us a home that exceeded every expectation.", rating: 5 },
];

const Index = () => {
  const featured = properties.slice(0, 3);

  return (
    <main>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Luxury property" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-gold text-xs uppercase tracking-[0.3em] mb-6 block"
          >
            Luxury Real Estate
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6"
          >
            Find Your Dream Property<br />
            <span className="text-gold">with Confidence</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-primary-foreground/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light"
          >
            Curating exceptional properties for the world's most discerning clients since 1998.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/properties"
              className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-8 py-3.5 text-sm uppercase tracking-widest font-medium hover:bg-gold-dark transition-colors"
            >
              View Properties <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-8 py-3.5 text-sm uppercase tracking-widest font-medium hover:bg-primary-foreground/10 transition-colors"
            >
              Schedule a Consultation
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-12 bg-primary-foreground/30 mx-auto mb-2" />
          <span className="text-primary-foreground/40 text-[10px] uppercase tracking-widest">Scroll</span>
        </motion.div>
      </section>

      {/* Featured Properties */}
      <section className="py-24 px-6 lg:px-12">
        <div className="container mx-auto">
          <SectionHeading
            subtitle="Portfolio"
            title="Featured Properties"
            description="A curated selection of our most exceptional listings, each representing the pinnacle of luxury living."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((property, i) => (
              <PropertyCard key={property.id} property={property} index={i} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/properties"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-gold font-medium hover:gap-3 transition-all"
            >
              View All Properties <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <img src={aboutImage} alt="Luxury interior" className="w-full aspect-[4/3] object-cover" />
                <div className="absolute -bottom-6 -right-6 bg-gold text-primary-foreground p-6 hidden md:block">
                  <p className="font-heading text-4xl font-bold">25+</p>
                  <p className="text-xs uppercase tracking-widest mt-1">Years of Excellence</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gold text-xs uppercase tracking-[0.2em] font-medium mb-3 block">About Us</span>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
                A Legacy of Luxury Real Estate
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                For over two decades, Prestige Realty has been the trusted name in luxury real estate.
                We connect discerning buyers with the world's most extraordinary properties, offering
                an unparalleled level of service, expertise, and discretion.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our team of seasoned advisors brings deep market knowledge and a global network
                to every transaction, ensuring a seamless experience from first viewing to final closing.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-gold font-medium hover:gap-3 transition-all"
              >
                Learn More <ChevronRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 lg:px-12">
        <div className="container mx-auto">
          <SectionHeading
            subtitle="Why Prestige"
            title="The Prestige Difference"
            description="What sets us apart in the world of luxury real estate."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Trusted Expertise", desc: "Over 25 years of experience in luxury real estate markets across the globe." },
              { icon: Award, title: "Exclusive Listings", desc: "Access to off-market properties and exclusive listings not available elsewhere." },
              { icon: Users, title: "Personalized Service", desc: "Dedicated advisors providing white-glove service tailored to your unique needs." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="text-center p-8 border border-border hover:border-gold/30 transition-colors group"
              >
                <div className="w-14 h-14 mx-auto mb-6 border border-gold/30 flex items-center justify-center group-hover:bg-gold group-hover:text-primary-foreground transition-all">
                  <item.icon size={24} className="text-gold group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeading
            subtitle="Testimonials"
            title="What Our Clients Say"
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="border border-primary-foreground/10 p-8"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6 italic">
                  "{t.text}"
                </p>
                <div>
                  <p className="text-primary-foreground font-medium text-sm">{t.name}</p>
                  <p className="text-primary-foreground/40 text-xs">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gold-light">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold text-xs uppercase tracking-[0.2em] font-medium mb-3 block">Get Started</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
              Ready to Find Your Dream Home?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-10">
              Let our expert advisors guide you through the world's finest properties. Your perfect home awaits.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-foreground text-primary-foreground px-10 py-4 text-sm uppercase tracking-widest font-medium hover:bg-foreground/90 transition-colors"
            >
              Contact Us Today <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Index;
