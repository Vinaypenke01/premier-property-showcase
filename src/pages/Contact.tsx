import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const Contact = () => {
  return (
    <main className="pt-24">
      {/* Header */}
      <section className="py-16 bg-cream px-6">
        <div className="container mx-auto">
          <SectionHeading
            subtitle="Get in Touch"
            title="Contact Us"
            description="We'd love to hear from you. Reach out to schedule a private consultation."
          />
        </div>
      </section>

      <section className="py-16 px-6 lg:px-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-2xl font-semibold mb-6">Send Us a Message</h2>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full bg-transparent border border-border px-4 py-3.5 text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-muted-foreground/50"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full bg-transparent border border-border px-4 py-3.5 text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-muted-foreground/50"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-transparent border border-border px-4 py-3.5 text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-muted-foreground/50"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-transparent border border-border px-4 py-3.5 text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-muted-foreground/50"
                />
                <select className="w-full bg-transparent border border-border px-4 py-3.5 text-sm focus:outline-none focus:border-gold transition-colors text-muted-foreground/50">
                  <option value="">Select Subject</option>
                  <option>Buying a Property</option>
                  <option>Selling a Property</option>
                  <option>Property Valuation</option>
                  <option>General Inquiry</option>
                </select>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full bg-transparent border border-border px-4 py-3.5 text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-muted-foreground/50 resize-none"
                />
                <button
                  type="submit"
                  className="bg-gold text-primary-foreground px-10 py-3.5 text-sm uppercase tracking-widest font-medium hover:bg-gold-dark transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-2xl font-semibold mb-6">Our Office</h2>
              <div className="space-y-6 mb-10">
                {[
                  { icon: MapPin, label: "Address", value: "432 Park Avenue, Suite 1800\nNew York, NY 10022" },
                  { icon: Phone, label: "Phone", value: "+1 (212) 555-0100" },
                  { icon: Mail, label: "Email", value: "info@prestige-realty.com" },
                  { icon: Clock, label: "Hours", value: "Mon–Fri: 9:00 AM – 6:00 PM\nSat: 10:00 AM – 4:00 PM" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="w-10 h-10 border border-gold/30 flex items-center justify-center shrink-0">
                      <item.icon size={18} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gold mb-1">{item.label}</p>
                      <p className="text-sm text-muted-foreground whitespace-pre-line">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="aspect-[4/3] bg-muted border border-border flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={32} className="mx-auto text-muted-foreground/30 mb-2" />
                  <p className="text-sm text-muted-foreground/50">Map View</p>
                  <p className="text-xs text-muted-foreground/30">432 Park Avenue, New York</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
