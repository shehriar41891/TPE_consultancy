import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Target, 
  GraduationCap, 
  UserCheck, 
  BarChart, 
  BrainCircuit, 
  Check 
} from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "leadership",
      title: "Leadership Development",
      icon: Users,
      description: "Empowering leaders to navigate complex business landscapes with confidence and clarity.",
      features: [
        "Senior leadership training programs",
        "Managerial effectiveness workshops",
        "Strategic decision-making skills",
        "Leading change and transformation"
      ]
    },
    {
      id: "od",
      title: "Organizational Development",
      icon: BarChart,
      description: "Holistic strategies to improve organizational capacity and effectiveness.",
      features: [
        "Culture transformation initiatives",
        "Vision & values alignment",
        "Team climate surveys & analysis",
        "Functional process optimization"
      ]
    },
    {
      id: "training",
      title: "Corporate Training",
      icon: GraduationCap,
      description: "Customized learning experiences designed to bridge skill gaps and boost performance.",
      features: [
        "Six Sigma Service Excellence",
        "SMART Goal Setting workshops",
        "Performance appraisal & evaluation",
        "Supervisory skills development"
      ]
    },
    {
      id: "coaching",
      title: "Executive Coaching",
      icon: UserCheck,
      description: "Personalized coaching sessions to unlock individual potential and drive career growth.",
      features: [
        "One-on-one executive coaching",
        "Personal leadership branding",
        "Conflict resolution & EQ",
        "Career transition support"
      ]
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Header */}
      <section className="bg-primary py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/shattered-island.png')]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white mb-6"
          >
            Our Services
          </motion.h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">
            Comprehensive solutions tailored to elevate your business performance.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col md:flex-row group"
              >
                <div className="md:w-1/3 bg-primary p-12 text-white flex flex-col justify-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-10 transform translate-x-1/2 -translate-y-1/2">
                    <service.icon className="w-64 h-64" />
                  </div>
                  <service.icon className="w-12 h-12 text-secondary mb-6 relative z-10" />
                  <h3 className="text-3xl font-serif font-bold mb-4 relative z-10">{service.title}</h3>
                  <div className="h-1 w-12 bg-secondary relative z-10 group-hover:w-24 transition-all duration-300" />
                </div>
                
                <div className="md:w-2/3 p-12 flex flex-col justify-center">
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-secondary-foreground" />
                        </div>
                        <span className="text-foreground/80 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-end">
                    <Link href="/contact">
                      <Button variant="outline" className="group">
                        Inquire About This
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Snippet */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Our Approach" 
            subtitle="Methodology" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 border rounded-2xl border-dashed border-gray-200">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary font-bold text-xl">1</div>
              <h3 className="font-serif font-bold text-lg mb-2">Assess</h3>
              <p className="text-sm text-muted-foreground">We begin by deeply understanding your organization's unique challenges and goals.</p>
            </div>
            <div className="text-center p-6 border rounded-2xl border-dashed border-gray-200">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary font-bold text-xl">2</div>
              <h3 className="font-serif font-bold text-lg mb-2">Design</h3>
              <p className="text-sm text-muted-foreground">We create customized interventions and training programs tailored to your needs.</p>
            </div>
            <div className="text-center p-6 border rounded-2xl border-dashed border-gray-200">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary font-bold text-xl">3</div>
              <h3 className="font-serif font-bold text-lg mb-2">Implement & Sustain</h3>
              <p className="text-sm text-muted-foreground">We deliver impactful sessions and provide follow-up to ensure sustainable results.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
