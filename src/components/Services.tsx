import { ArrowRight, Settings, Code2, Cloud, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import automationIcon from '@/assets/automation-icon.jpg';
import developmentIcon from '@/assets/development-icon.jpg';

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
      icon: Cloud,
      title: 'DevOps & Cloud Integration',
      description: 'Optimize your infrastructure with modern DevOps practices and cloud solutions for maximum scalability.',
      features: ['Cloud Migration', 'CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Analytics'],
      image: null,
    },
    {
      icon: Brain,
      title: 'AI/ML Implementation',
      description: 'Leverage artificial intelligence and machine learning to unlock insights and automate complex decision-making.',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Data Science'],
      image: null,
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-6">
            Our
            <span className="text-gradient"> Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We deliver comprehensive technology solutions that transform your business operations 
            and drive sustainable growth through innovation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="p-8 hover-lift shadow-card bg-card border-border/50 group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-smooth"></div>
              
              <div className="relative z-10">
                {/* Icon and Image */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                      <service.icon className="h-8 w-8 text-primary" />
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
                <h3 className="font-heading font-semibold text-2xl text-foreground mb-4 group-hover:text-primary transition-smooth">
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
                <Button 
                  variant="ghost" 
                  className="text-primary hover:text-primary-foreground hover:bg-primary group/btn p-0 h-auto font-medium"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-white">
          <h3 className="font-heading font-bold text-3xl mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl mb-8 text-white/90">
            Let's discuss how our expertise can drive your digital transformation forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4"
            >
              View Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;