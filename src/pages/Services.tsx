import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Settings, Code2, Cloud, Brain, CheckCircle, Users, Clock, Shield, BrainCircuit, Megaphone } from 'lucide-react';
import softwareDevImage from '@/assets/software-development.jpg';
import ReadyToWork from '@/components/readyToWork';
import { HoverEffect } from '@/components/ui/card-hover-effect';

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
  icon: Megaphone,
  title: 'Digital Marketing',
  description: 'Boost brand visibility and engagement through targeted digital strategies tailored to your audience across multiple channels.',
  features: [
    'SEO & SEM Optimization',
    'Social Media Campaigns',
    'Email Marketing Automation',
    'Content Strategy & Copywriting',
    'Omnichannel Campaign Management',
    'Performance Tracking & Analytics'
  ],
  benefits: ['Increased Traffic', 'Better Conversion Rates', 'Brand Awareness', 'Customer Retention'],
  pricing: 'Starting from $3,000',
},

    {
  icon: BrainCircuit,
  title: 'AI-Generated Ads',
  description: 'Leverage AI to generate high-performing ad creatives that adapt to your audience for maximum ROI and engagement.',
  features: [
    'AI-Powered Ad Copy Generation',
    'Smart Image & Video Creation',
    'Audience Targeting & Segmentation',
    'Dynamic A/B Testing',
    'Real-Time Optimization',
    'Platform Integration (Meta, Google, TikTok)'
  ],
  benefits: ['Higher Engagement', 'Reduced Ad Spend Waste', 'Faster Campaign Launches', 'Better Targeting'],
  pricing: 'Starting from $2,500',
}

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-10">
            <div className="animate-slide-up">
              <h1 className="font-heading font-bold text-4xl md:text-6xl text-foreground mb-6">
                Comprehensive
                <span className="text-gradient"> Technology Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                From automation to custom development, we provide end-to-end technology solutions 
                that transform your business operations and drive sustainable growth.
              </p>
               
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
                      <div className="p-4 bg-slate-100 rounded-xl">
                        <service.icon className="h-8 w-8 text-chart-2" />
                      </div>
                      <h3 className="font-heading font-bold text-3xl text-chart-3">
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

                    {/* <div className="flex items-center justify-between mb-6">
                      <div className="text-2xl font-bold text-chart-1">{service.pricing}</div>
                      <Button className="btn-hero">
                        Get Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div> */}
                  </div>

                  <div>
                    <h4 className="font-semibold text-xl text-chart-2 mb-6">What's Included:</h4>
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
          <div className="text-center mb-16 animate-slide-in-right">
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-6">
              Our
              <span className="text-gradient"> Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project delivery and exceed your expectations.
            </p>
          </div>

          <div >
             <HoverEffect items={process} className='animate-slide-in-left'/>
          </div>
            
        </div>
      </section>
      <ReadyToWork/>
      <Footer />
    </div>
  );
};

export default ServicesPage;