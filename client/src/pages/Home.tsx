import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Users, Briefcase, TrendingUp, Lightbulb, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const pillars = [
    {
      icon: Users,
      title: "Quality People",
      desc: "Highly qualified professionals driven by excellence and competence."
    },
    {
      icon: Briefcase,
      title: "Quality Services",
      desc: "Premium consultancy and training tailored to your organizational needs."
    },
    {
      icon: Lightbulb,
      title: "Workable Solutions",
      desc: "Practical strategies that solve real-world business challenges."
    },
    {
      icon: TrendingUp,
      title: "Profitable Business",
      desc: "Driving growth and sustainable profitability for our partners."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Unsplash: Corporate meeting room professional team */}
          <img 
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=2000"
            alt="Corporate Meeting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-90" />
        </div>

        <div className="container relative z-10 px-4 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 text-secondary border border-secondary/30 text-sm font-semibold tracking-wider mb-6 backdrop-blur-sm">
              SINCE 2010
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Enlightening the <span className="text-secondary">Intellect</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl font-light leading-relaxed">
              We are a premier management consultancy and training firm dedicated to building capabilities and leadership skills that drive organizational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services">
                <Button size="lg" className="text-lg px-8 py-6 bg-secondary text-primary hover:bg-secondary/90 font-semibold">
                  Explore Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 text-white border-white hover:bg-white hover:text-primary">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Pillars Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Our Core Pillars" 
            subtitle="The TPE Philosophy"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-secondary transition-colors duration-300">
                      <pillar.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-serif font-bold mb-3 text-primary">{pillar.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {pillar.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
              
              {/* Unsplash: Business handshake partnership */}
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1000"
                alt="Partnership"
                className="rounded-2xl shadow-2xl relative z-10 w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl z-20 max-w-[200px] hidden md:block border border-gray-100">
                <p className="text-4xl font-serif font-bold text-primary mb-1">14+</p>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Years of Excellence</p>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <SectionHeader 
                title="Building Capabilities, Driving Growth" 
                subtitle="About TPE Consultants"
                alignment="left"
              />
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded in 2010, TPE Consultants is owned and managed by experienced Pakistani professionals. Our team comprises highly qualified and competent experts who share a common vision of excellence.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We work with our clients with the philosophy of building their capabilities and leadership skills, enabling them to grow above and beyond expectations as an organization.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {["Management Consultancy", "Leadership Development", "Corporate Training", "Organizational Development"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium text-primary">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link href="/about">
                <Button className="group" size="lg">
                  Read More About Us
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Ready to Transform Your Organization?</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Partner with us to achieve sustainable solutions for your organizational objectives.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-secondary text-primary hover:bg-white text-lg px-10 py-6 font-bold shadow-lg shadow-secondary/20">
              Start a Conversation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
