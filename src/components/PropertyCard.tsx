import { Link } from "react-router-dom";
import { MapPin, Bed, Bath, Maximize } from "lucide-react";
import type { Property } from "@/data/properties";
import { motion } from "framer-motion";

interface PropertyCardProps {
  property: Property;
  index?: number;
}

const PropertyCard = ({ property, index = 0 }: PropertyCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link to={`/properties/${property.id}`} className="group block">
        <div className="overflow-hidden bg-card shadow-sm hover:shadow-xl transition-shadow duration-500">
          {/* Image */}
          <div className="relative overflow-hidden aspect-[4/3]">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-foreground/80 text-primary-foreground text-xs uppercase tracking-widest px-3 py-1.5 backdrop-blur-sm">
                {property.type}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-center gap-2 text-warm-gray mb-2">
              <MapPin size={14} />
              <span className="text-xs uppercase tracking-wider">{property.location}</span>
            </div>
            <h3 className="font-heading text-xl font-semibold mb-2 group-hover:text-gold transition-colors">
              {property.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{property.shortDescription}</p>

            <div className="flex items-center gap-5 text-muted-foreground text-sm mb-4 border-t border-border pt-4">
              <span className="flex items-center gap-1.5"><Bed size={14} /> {property.bedrooms}</span>
              <span className="flex items-center gap-1.5"><Bath size={14} /> {property.bathrooms}</span>
              <span className="flex items-center gap-1.5"><Maximize size={14} /> {property.area}</span>
            </div>

            <p className="font-heading text-xl font-semibold text-gold">{property.price}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default PropertyCard;
