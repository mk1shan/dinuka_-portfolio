import React from 'react';
import MainLayout from '../layouts/MainLayout';
import ServiceHero from '../components/services/ServiceHero';
import ServiceCategories from '../components/services/ServiceCategories';
import ServiceGallery from '../components/services/ServiceGallery';
import ServiceProcess from '../components/services/ServiceProcess';

export default function EventPlanning() {
  const eventPlanningData = {
    hero: {
      title: "Event Planning Services",
      description: "Creating unforgettable experiences with meticulous attention to detail",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1920"
    },
    categories: [
      {
        title: "Full Service Planning",
        description: "Comprehensive event planning from concept to execution",
        image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1200&h=800",
        features: [
          "Venue selection",
          "Vendor coordination", 
          "Design & styling",
          "Timeline management",
          "On-site coordination"
        ]
      },
      {
        title: "Corporate Events",
        description: "Professional planning for business events and conferences",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200&h=800",
        features: [
          "Conference planning",
          "Team building events",
          "Product launches",
          "Award ceremonies",
          "Corporate retreats"
        ]
      }
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800&h=800",
        category: "Wedding"
      },
      {
        src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&q=80&w=800&h=800",
        category: "Corporate"
      },
      {
        src: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&q=80&w=800&h=800",
        category: "Social"
      }
    ],
    process: [
      { title: "Initial Consultation", description: "Understanding your vision and requirements" },
      { title: "Design & Planning", description: "Creating a detailed plan and design concept" },
      { title: "Coordination", description: "Managing vendors and logistics" },
      { title: "Execution", description: "Flawless execution of your event" }
    ]
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <div className="pt-16">
        <ServiceHero {...eventPlanningData.hero} />
        <div className="space-y-16 py-16">
          <ServiceCategories categories={eventPlanningData.categories} />
          <ServiceGallery images={eventPlanningData.gallery} />
          <ServiceProcess steps={eventPlanningData.process} />
        </div>
      </div>
    </MainLayout>
  );
}