import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { Users, Target, History, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="pt-20 min-h-screen">
      {/* Header */}
      <section className="bg-primary py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary via-primary to-primary"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white mb-6"
          >
            About Us
          </motion.h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">
            A management consultancy and training firm driven by a vision of excellence.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <SectionHeader 
                title="Who We Are" 
                subtitle="Our Story"
                alignment="left"
              />
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  TPE Consultants, founded in 2010, is a management consultancy and training firm, owned and managed by experienced Pakistani professionals. Our team comprises of highly qualified & competent professionals in their respective industries who share a common vision of excellence.
                </p>
                <p>
                  We work with our clients with the philosophy of building their capabilities and leadership skills in order for them to grow above and beyond expectations as an organization.
                </p>
                <p>
                  At TPE we aim for excellence and believe in partnering with our clients to provide them sustainable solutions for achieving their organizational objectives.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <Card className="bg-muted/30 border-none">
                  <CardContent className="p-6">
                    <History className="w-10 h-10 text-secondary mb-4" />
                    <h3 className="font-serif font-bold text-lg mb-2 text-primary">Founded in 2010</h3>
                    <p className="text-sm text-muted-foreground">Over a decade of industry experience and consistent growth.</p>
                  </CardContent>
                </Card>
                <Card className="bg-muted/30 border-none">
                  <CardContent className="p-6">
                    <Target className="w-10 h-10 text-secondary mb-4" />
                    <h3 className="font-serif font-bold text-lg mb-2 text-primary">Our Mission</h3>
                    <p className="text-sm text-muted-foreground">Partnering to provide sustainable solutions for organizational objectives.</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Founder Profile */}
            <div className="bg-muted/20 rounded-2xl p-8 border border-border shadow-lg relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-bl-full -z-10" />
              
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-8">
                {/* Unsplash: Professional mature man businessman portrait */}
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" 
                    alt="Sahib Karim Khan" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-serif font-bold text-primary">Sahib Karim Khan</h3>
                  <p className="text-secondary font-medium mb-4">Founder & Principal Consultant</p>
                  <div className="flex gap-2 justify-center md:justify-start">
                    <Trophy className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">18+ Years Experience</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  Sahib is a seasoned professional with extensive experience in leadership development and organizational transformation.
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3 items-start">
                    <span className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                    <span>Master's in Adult Learning & Development (University of Galway, Ireland)</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                    <span>Leadership & Strategy Certification (University of Cambridge, UK)</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                    <span>Certified Six Sigma Professional</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Our Philosophy" 
            subtitle="Why Choose Us"
            light={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-4">Expert Team</h3>
              <p className="text-white/70">Highly qualified and competent professionals dedicated to your success.</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-4">Excellence Driven</h3>
              <p className="text-white/70">We aim for excellence in every project, ensuring top-tier delivery.</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-6">
                <History className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-4">Sustainable Solutions</h3>
              <p className="text-white/70">Building capabilities that allow organizations to grow sustainably.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
