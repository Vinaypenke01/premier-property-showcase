import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold tracking-wide mb-4">
              PRESTIGE<span className="text-gold">.</span>
            </h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-6">
              Curating the world's most exceptional properties for discerning clients since 1998.
            </p>
            <div className="flex gap-4">
              {["Facebook", "Instagram", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-xs uppercase tracking-widest text-primary-foreground/40 hover:text-gold transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-widest mb-6 text-gold">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Properties", path: "/properties" },
                { label: "About Us", path: "/about" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-primary-foreground/60 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-widest mb-6 text-gold">Property Types</h4>
            <ul className="space-y-3">
              {["Penthouses", "Villas", "Estates", "Chalets"].map((type) => (
                <li key={type}>
                  <Link to="/properties" className="text-sm text-primary-foreground/60 hover:text-gold transition-colors">
                    {type}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-widest mb-6 text-gold">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-primary-foreground/60">432 Park Avenue, Suite 1800<br />New York, NY 10022</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold shrink-0" />
                <span className="text-sm text-primary-foreground/60">+1 (212) 555-0100</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gold shrink-0" />
                <span className="text-sm text-primary-foreground/60">info@prestige-realty.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-xs text-primary-foreground/40 tracking-wider">
            © 2026 Prestige Realty. All rights reserved. Luxury Real Estate Redefined.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
