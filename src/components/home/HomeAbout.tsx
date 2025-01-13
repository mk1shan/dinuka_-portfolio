import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Award, Users, Briefcase, GraduationCap, Rocket } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';
import ParallaxScroll from '../ui/ParallaxScroll';
import SectionTitle from '../ui/SectionTitle';

const skills = [
  'Photography',
  'Video Editing',
  'Graphic Design',
  'Event Management',
  'Team Leadership',
  'Problem Solving',
  'Communication',
  'Project Management'
];

const achievements = [
  { icon: Camera, value: '500+', label: 'Photo Projects' },
  { icon: Briefcase, value: '200+', label: 'Events Managed' },
  { icon: Users, value: '300+', label: 'Happy Clients' },
  { icon: Award, value: '15+', label: 'Awards' }
];

const HomeAbout = () => {
  return (
    <section id="about" className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal scale={0.95}>
          <SectionTitle 
            title="About Me"
            description="Computer Engineering Student & Creative Professional"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <ScrollReveal direction="left" duration={1}>
            <ParallaxScroll offset={20}>
              <div className="relative">
                <motion.div 
                  className="absolute inset-0 bg-primary-500/20 rounded-3xl blur-2xl"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.3, 0.5]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                  <motion.img
                    src="/images/about-me.jpeg"
                    alt="Dinuka Vidushan"
                    className="w-full h-full object-cover object-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-dark/20 to-transparent" />
                </div>
              </div>
            </ParallaxScroll>
          </ScrollReveal>

          <ScrollReveal direction="right" duration={1}>
            <ParallaxScroll offset={-20}>
              <div className="space-y-6 lg:pt-8">
                <motion.div 
                  className="space-y-3"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="w-6 h-6 text-primary-400" />
                    <h3 className="text-2xl font-light text-white">Computer Engineering Student</h3>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Rocket className="w-6 h-6 text-primary-400" />
                    <h3 className="text-2xl font-light text-white">Founder of DADS Entertainment</h3>
                  </div>
                </motion.div>
                
                <div className="grid grid-cols-2 gap-2">
                  {skills.map((skill, index) => (
                    <ScrollReveal 
                      key={index}
                      delay={index * 0.1}
                      scale={0.9}
                      className="h-full"
                    >
                      <motion.div 
                        className="h-full px-3 py-2 bg-white/[0.03] rounded-lg border border-white/10 text-sm text-gray-300"
                        whileHover={{ 
                          scale: 1.02,
                          backgroundColor: "rgba(255, 255, 255, 0.05)"
                        }}
                      >
                        {skill}
                      </motion.div>
                    </ScrollReveal>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((stat, index) => (
                    <ScrollReveal 
                      key={index}
                      delay={index * 0.15}
                      scale={0.95}
                    >
                      <motion.div 
                        className="group p-3 bg-white/[0.03] rounded-xl border border-white/10"
                        whileHover={{ 
                          scale: 1.02,
                          backgroundColor: "rgba(255, 255, 255, 0.05)"
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div
                          initial={{ scale: 1 }}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <stat.icon className="w-5 h-5 text-primary-400 mb-2" />
                        </motion.div>
                        <motion.div 
                          className="text-xl font-bold text-white mb-1"
                          initial={{ opacity: 0.8 }}
                          whileHover={{ opacity: 1 }}
                        >
                          {stat.value}
                        </motion.div>
                        <div className="text-sm text-gray-400">{stat.label}</div>
                      </motion.div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ParallaxScroll>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;