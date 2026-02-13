import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Bed, Bath, Maximize, Phone, Mail, ArrowLeft, Check } from "lucide-react";
import { properties } from "@/data/properties";
import { useState } from "react";

const PropertyDetails = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id);
  const [activeImage, setActiveImage] = useState(0);

  if (!property) {
    return (
      <main className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-3xl mb-4">Property Not Found</h1>
          <Link to="/properties" className="text-gold text-sm uppercase tracking-widest">
            ← Back to Properties
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-24">
      {/* Breadcrumb */}
      <div className="container mx-auto px-6 lg:px-12 py-6">
        <Link to="/properties" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors">
          <ArrowLeft size={16} /> Back to Properties
        </Link>
      </div>

      {/* Gallery */}
      <section className="container mx-auto px-6 lg:px-12">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden mb-4">
            <img
              src={property.images[activeImage]}
              alt={property.title}
              className="w-full h-full object-cover"
            />
          </div>
          {property.images.length > 1 && (
            <div className="flex gap-3">
              {property.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-24 h-16 overflow-hidden border-2 transition-colors ${i === activeImage ? "border-gold" : "border-transparent opacity-60 hover:opacity-100"}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </motion.div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main */}
          <div className="lg:col-span-2">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-2 text-warm-gray mb-2">
                <MapPin size={14} />
                <span className="text-xs uppercase tracking-wider">{property.location}</span>
              </div>
              <h1 className="font-heading text-3xl md:text-4xl font-semibold mb-2">{property.title}</h1>
              <p className="font-heading text-2xl text-gold font-semibold mb-8">{property.price}</p>

              <div className="flex gap-8 border-y border-border py-6 mb-8">
                <div className="text-center">
                  <Bed size={20} className="mx-auto mb-1 text-gold" />
                  <p className="text-sm font-medium">{property.bedrooms} Beds</p>
                </div>
                <div className="text-center">
                  <Bath size={20} className="mx-auto mb-1 text-gold" />
                  <p className="text-sm font-medium">{property.bathrooms} Baths</p>
                </div>
                <div className="text-center">
                  <Maximize size={20} className="mx-auto mb-1 text-gold" />
                  <p className="text-sm font-medium">{property.area}</p>
                </div>
              </div>

              <h2 className="font-heading text-xl font-semibold mb-4">About This Property</h2>
              <p className="text-muted-foreground leading-relaxed mb-10">{property.description}</p>

              <h2 className="font-heading text-xl font-semibold mb-4">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
                {property.amenities.map((a) => (
                  <div key={a} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check size={14} className="text-gold shrink-0" /> {a}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="sticky top-28"
            >
              {/* Agent Card */}
              <div className="border border-border p-6 mb-6">
                <h3 className="text-xs uppercase tracking-widest text-gold mb-4">Listing Agent</h3>
                <p className="font-heading text-lg font-semibold">{property.agent.name}</p>
                <p className="text-sm text-muted-foreground mb-4">{property.agent.title}</p>
                <div className="space-y-2 text-sm">
                  <a href={`tel:${property.agent.phone}`} className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors">
                    <Phone size={14} /> {property.agent.phone}
                  </a>
                  <a href={`mailto:${property.agent.email}`} className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors">
                    <Mail size={14} /> {property.agent.email}
                  </a>
                </div>
              </div>

              {/* Inquiry Form */}
              <div className="border border-border p-6">
                <h3 className="text-xs uppercase tracking-widest text-gold mb-4">Inquire About This Property</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-transparent border border-border px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-muted-foreground/50"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-transparent border border-border px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-muted-foreground/50"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full bg-transparent border border-border px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-muted-foreground/50"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full bg-transparent border border-border px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-muted-foreground/50 resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-gold text-primary-foreground py-3 text-sm uppercase tracking-widest font-medium hover:bg-gold-dark transition-colors"
                  >
                    Send Inquiry
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PropertyDetails;
