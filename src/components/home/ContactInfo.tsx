import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

const contactItems = [
  {
    icon: Mail,
    title: "Email",
    info: "dinukavidushan23@gmail.com",
    link: "mailto:dinukavidushan23@gmail.com"
  },
  {
    icon: Phone,
    title: "Phone",
    info: "+94 763859990",
    link: "tel:+94763859990"
  },
  {
    icon: MapPin,
    title: "Location",
    info: "Colombo, Sri Lanka"
  }
];

const socialLinks = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=100068790824155",
    label: "Facebook"
  },
  {
    icon: Instagram,
    href: "#",
    label: "Instagram"
  },
  {
    icon: Youtube,
    href: "#",
    label: "Youtube"
  }
];

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      {contactItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="group"
        >
          <a 
            href={item.link}
            className="flex items-center space-x-4 group cursor-pointer"
            {...(item.link ? {} : { onClick: (e) => e.preventDefault() })}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary-500/20 rounded-lg blur-md transform group-hover:scale-150 transition-transform duration-300" />
              <div className="relative p-3 bg-white/[0.03] rounded-lg border border-white/10 backdrop-blur-sm group-hover:border-primary-500/30 transition-colors duration-300">
                <item.icon className="w-6 h-6 text-primary-400" />
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold">{item.title}</h3>
              <p className="text-gray-400">{item.info}</p>
            </div>
          </a>
        </motion.div>
      ))}
      
      <div className="flex space-x-4 pt-8">
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -3 }}
            className="p-3 bg-white/[0.03] rounded-lg border border-white/10 hover:border-primary-500/30 hover:bg-primary-500/5 transition-colors duration-300 group"
            aria-label={link.label}
          >
            <link.icon className="w-5 h-5 text-gray-400 group-hover:text-primary-400 transition-colors duration-300" />
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;