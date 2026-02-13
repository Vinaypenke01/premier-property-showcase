import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { properties, locations, propertyTypes, budgetRanges } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";
import SectionHeading from "@/components/SectionHeading";

const Properties = () => {
  const [location, setLocation] = useState("All Locations");
  const [type, setType] = useState("All Types");
  const [budget, setBudget] = useState("Any Budget");

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (location !== "All Locations" && p.location !== location) return false;
      if (type !== "All Types" && p.type !== type) return false;
      if (budget !== "Any Budget") {
        if (budget === "Under $5M" && p.priceValue >= 5000000) return false;
        if (budget === "$5M - $8M" && (p.priceValue < 5000000 || p.priceValue > 8000000)) return false;
        if (budget === "$8M - $10M" && (p.priceValue < 8000000 || p.priceValue > 10000000)) return false;
        if (budget === "Over $10M" && p.priceValue <= 10000000) return false;
      }
      return true;
    });
  }, [location, type, budget]);

  const selectClass =
    "bg-card border border-border text-foreground text-sm px-4 py-3 appearance-none cursor-pointer focus:outline-none focus:border-gold transition-colors w-full";

  return (
    <main className="pt-24">
      {/* Header */}
      <section className="py-16 bg-cream px-6">
        <div className="container mx-auto">
          <SectionHeading
            subtitle="Our Collection"
            title="Luxury Properties"
            description="Browse our exclusive portfolio of the world's most distinguished residences."
          />
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <select value={location} onChange={(e) => setLocation(e.target.value)} className={selectClass}>
              {locations.map((l) => <option key={l}>{l}</option>)}
            </select>
            <select value={type} onChange={(e) => setType(e.target.value)} className={selectClass}>
              {propertyTypes.map((t) => <option key={t}>{t}</option>)}
            </select>
            <select value={budget} onChange={(e) => setBudget(e.target.value)} className={selectClass}>
              {budgetRanges.map((b) => <option key={b}>{b}</option>)}
            </select>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 px-6 lg:px-12">
        <div className="container mx-auto">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((property, i) => (
                <PropertyCard key={property.id} property={property} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Search size={48} className="mx-auto text-muted-foreground/30 mb-4" />
              <p className="text-muted-foreground">No properties match your current filters.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Properties;
