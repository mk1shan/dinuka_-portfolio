import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Background with blur effect */}
      <div className="absolute inset-0 bg-[#070B14]">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-purple-900/30" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/30 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600/30 rounded-full blur-[100px]" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-blue-100/80 max-w-2xl mx-auto">
            Let's discuss your next project or event
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center space-x-4 group">
              <div className="p-3 bg-blue-900/30 rounded-lg group-hover:bg-blue-800/40 transition-colors">
                <Mail className="text-blue-300 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Email</h3>
                <p className="text-blue-200/80">contact@dinukanavudshan.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 group">
              <div className="p-3 bg-blue-900/30 rounded-lg group-hover:bg-blue-800/40 transition-colors">
                <Phone className="text-blue-300 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Phone</h3>
                <p className="text-blue-200/80">+94 123 456 789</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 group">
              <div className="p-3 bg-blue-900/30 rounded-lg group-hover:bg-blue-800/40 transition-colors">
                <MapPin className="text-blue-300 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Location</h3>
                <p className="text-blue-200/80">Colombo, Sri Lanka</p>
              </div>
            </div>
            
            <div className="flex space-x-4 pt-4">
              {[Instagram, Facebook, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-3 bg-blue-900/30 rounded-lg hover:bg-blue-800/40 transition-colors group"
                >
                  <Icon className="w-5 h-5 text-blue-300 group-hover:text-blue-200" />
                </a>
              ))}
            </div>
          </div>
          
          <form className="space-y-6 backdrop-blur-sm bg-blue-950/20 p-8 rounded-2xl border border-blue-900/30">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-blue-900/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 border border-blue-800/50 placeholder-blue-300/50"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-blue-900/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 border border-blue-800/50 placeholder-blue-300/50"
              />
            </div>
            <div>
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-blue-900/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 border border-blue-800/50 placeholder-blue-300/50"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-200 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-950"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;