import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Settings, Code2, Cloud, Brain, CheckCircle, Users, Clock, Shield } from 'lucide-react';
import softwareDevImage from '@/assets/software-development.jpg';

const ServicesPage = () => {
  const services = [
    {
      icon: Settings,
      title: 'Automation Solutions',
      description: 'Streamline your business processes with intelligent automation workflows that reduce manual work and increase efficiency by up to 80%.',
      features: [
        'Robotic Process Automation (RPA)',
        'Workflow Optimization',
        'Business Process Management',
        'API Integration & Orchestration',
        'Data Migration & Sync',
        'Custom Automation Tools'
      ],
      benefits: ['80% Faster Processing', 'Reduced Human Error', '24/7 Operation', 'Cost Savings'],
      pricing: 'Starting from $5,000',
    },
    {
      icon: Code2,
      title: 'Custom Software Development',
      description: 'Build scalable, secure, and user-friendly applications tailored to your unique business requirements and growth objectives.',
      features: [
        'Web Application Development',
        'Mobile App Development (iOS/Android)',
        'Progressive Web Apps (PWA)',
        'API Development & Integration',
        'Database Design & Management',
        'Third-party Integrations'
      ],
      benefits: ['Scalable Architecture', 'Modern Tech Stack', 'Responsive Design', 'SEO Optimized'],
      pricing: 'Starting from $10,000',
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud Integration',
      description: 'Optimize your infrastructure with modern DevOps practices and cloud solutions for maximum scalability, reliability, and performance.',
      features: [
        'Cloud Migration (AWS, Azure, GCP)',
        'CI/CD Pipeline Setup',
        'Infrastructure as Code (IaC)',
        'Container Orchestration (Docker, Kubernetes)',
        'Monitoring & Alerting',
        'Security & Compliance'
      ],
      benefits: ['99.9% Uptime', 'Auto Scaling', 'Cost Optimization', 'Enhanced Security'],
      pricing: 'Starting from $7,500',
    },
    {
      icon: Brain,
      title: 'AI/ML Implementation',
      description: 'Leverage artificial intelligence and machine learning to unlock insights, automate decisions, and gain competitive advantages.',
      features: [
        'Predictive Analytics',
        'Natural Language Processing',
        'Computer Vision Solutions',
        'Recommendation Systems',
        'Chatbots & Virtual Assistants',
        'Data Science & Analytics'
      ],
      benefits: ['Data-Driven Insights', 'Automated Decisions', 'Improved Accuracy', 'Competitive Edge'],
      pricing: 'Starting from $12,000',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your current processes, identify pain points, and create a comprehensive roadmap for your digital transformation.',
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Our team designs scalable solutions with modern architecture patterns, ensuring optimal performance and maintainability.',
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'We build your solution using agile methodologies, with continuous testing and quality assurance throughout the process.',
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'We deploy your solution and provide ongoing support, monitoring, and maintenance to ensure optimal performance.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="font-heading font-bold text-4xl md:text-6xl text-foreground mb-6">
                Comprehensive
                <span className="text-gradient"> Technology Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                From automation to custom development, we provide end-to-end technology solutions 
                that transform your business operations and drive sustainable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="btn-hero">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg">
                  View Case Studies
                </Button>
              </div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <img 
                src={softwareDevImage} 
                alt="Software Development" 
                className="rounded-2xl shadow-tech hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-6">
              Our
              <span className="text-gradient"> Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer comprehensive technology solutions designed to meet your specific business needs and drive digital transformation.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <Card key={service.title} className="p-8 md:p-12 shadow-card hover-lift">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="p-4 bg-primary/10 rounded-xl">
                        <service.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-heading font-bold text-3xl text-foreground">
                        {service.title}
                      </h3>
                    </div>
                    
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {service.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mb-6">
                      <div className="text-2xl font-bold text-primary">{service.pricing}</div>
                      <Button className="btn-hero">
                        Get Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-xl text-foreground mb-6">What's Included:</h4>
                    <div className="space-y-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-6">
              Our
              <span className="text-gradient"> Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project delivery and exceed your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card key={step.step} className="p-6 text-center shadow-card hover-lift bg-card">
                <div className="text-4xl font-bold text-primary/20 mb-4">{step.step}</div>
                <h3 className="font-semibold text-xl text-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-white">
            <h3 className="font-heading font-bold text-3xl md:text-4xl mb-6">
              Ready to Start Your Project?
            </h3>
            <p className="text-xl mb-8 text-white/90">
              Let's discuss your requirements and create a custom solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4">
                Call Us: (555) 123-4567
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;