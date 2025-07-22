import { ArrowRight, Settings, Code2, Cloud, Brain, Megaphone, BrainCircuit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import automationIcon from '@/assets/automation-icon.jpg';
import developmentIcon from '@/assets/development-icon.jpg';
import { PulsatingButton } from './magicui/pulsating-button';

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: 'Automation Solutions',
      description: 'Streamline your business processes with intelligent automation workflows that reduce manual work and increase efficiency.',
      features: ['Process Automation', 'Workflow Optimization', 'RPA Implementation', 'Integration Services'],
      image: automationIcon,
    },
    {
      icon: Code2,
      title: 'Custom Software Development',
      description: 'Build scalable web and mobile applications tailored to your unique business requirements and goals.',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'Database Design'],
      image: developmentIcon,
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      description: 'Boost your online presence with targeted digital strategies that drive engagement, leads, and conversions across channels.',
      features: ['SEO ', 'Social Media Marketing', 'Email Campaigns',],
      image: null,
    },

    {
      icon: BrainCircuit, // or another AI/automation-related icon
      title: 'AI-Generated Ads',
      description: 'Leverage artificial intelligence to create high-performing ad creatives tailored to your audience for maximum ROI.',
      features: ['Advertisement through AI', 'Smart Audience Targeting', 'Performance Optimization', 'Low cost'],
      image: null,
    }

  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-heading font-bold text-3xl md:text-5xl mb-6">
            Our
            <span className="text-chart-2"> Services</span>
          </h2>
          <p className="text-xl text-primary max-w-3xl mx-auto">
            We deliver comprehensive technology solutions that transform your business operations
            and drive sustainable growth through innovation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 animate-slide-up">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="p-8 text-primary hover-lift shadow-card bg-card border-border/50 group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-smooth"></div>

              <div className="relative z-10">
                {/* Icon and Image */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-slate-100 rounded-lg group-hover:bg-primary/20 transition-smooth">
                      <service.icon className="h-8 w-8 text-chart-2" />
                    </div>
                    {service.image && (
                      <div className="w-16 h-16 rounded-lg overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-heading text-chart-3 font-semibold text-2xl  mb-4 group-hover:text-chart-1 transition-smooth">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Button */}
                {/* <Button
                  variant="ghost"
                  className="text-primary hover:text-primary-foreground hover:bg-chart-1 p-2 group/btn  h-auto font-medium"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button> */}
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-white">
          <h3 className="font-heading font-bold text-3xl mb-4 text-white ">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl mb-8 text-white/90">
            Let's discuss how our expertise can drive your digital transformation forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center ">
           <a href="/contact"> <PulsatingButton>Inquiry Now</PulsatingButton></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;