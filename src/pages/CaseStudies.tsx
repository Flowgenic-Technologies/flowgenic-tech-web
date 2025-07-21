import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ExternalLink, TrendingUp, Clock, DollarSign, Users } from 'lucide-react';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      title: 'TechStart Inc. - Automated CI/CD Pipeline',
      industry: 'Technology',
      client: 'TechStart Inc.',
      challenge: 'Manual deployment processes were causing delays and errors, reducing team productivity by 40%.',
      solution: 'Implemented automated CI/CD pipeline with Docker containerization, automated testing, and monitoring.',
      results: [
        '80% faster deployment time',
        '95% reduction in deployment errors',
        '40% increase in development velocity',
        '$50K annual cost savings',
      ],
      technologies: ['Docker', 'Jenkins', 'AWS', 'Kubernetes', 'Terraform'],
      duration: '3 months',
      testimonial: '"FlowGenic transformed our entire development workflow. The automation they built saved us countless hours and eliminated deployment headaches."',
      author: 'Sarah Chen, CTO',
    },
    {
      title: 'InnovateCorp - Customer Management Platform',
      industry: 'E-commerce',
      client: 'InnovateCorp',
      challenge: 'Fragmented customer data across multiple systems leading to poor customer experience and lost sales.',
      solution: 'Built unified customer management platform with real-time analytics, automated marketing workflows, and CRM integration.',
      results: [
        '60% improvement in customer satisfaction',
        '35% increase in sales conversion',
        '50% reduction in support tickets',
        '3x faster customer onboarding',
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe API'],
      duration: '4 months',
      testimonial: '"The platform FlowGenic built became the backbone of our customer operations. It\'s intuitive, powerful, and delivered beyond our expectations."',
      author: 'Michael Rodriguez, Product Manager',
    },
    {
      title: 'GrowthLabs - AI-Powered Analytics Dashboard',
      industry: 'Marketing',
      client: 'GrowthLabs',
      challenge: 'Marketing team struggled with data-driven decision making due to scattered analytics across multiple platforms.',
      solution: 'Developed AI-powered analytics dashboard with predictive insights, automated reporting, and real-time campaign optimization.',
      results: [
        '70% improvement in campaign ROI',
        '45% reduction in data analysis time',
        '25% increase in lead quality',
        '90% faster reporting cycle',
      ],
      technologies: ['Python', 'TensorFlow', 'Vue.js', 'MongoDB', 'Google Analytics API'],
      duration: '5 months',
      testimonial: '"The AI insights have completely transformed how we approach marketing. We\'re making smarter decisions faster than ever before."',
      author: 'Emily Thompson, CEO',
    },
  ];

  const metrics = [
    { icon: TrendingUp, value: '150%', label: 'Average ROI Improvement' },
    { icon: Clock, value: '60%', label: 'Time Savings' },
    { icon: DollarSign, value: '$2M+', label: 'Cost Savings Generated' },
    { icon: Users, value: '95%', label: 'Client Satisfaction' },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="font-heading font-bold text-4xl md:text-6xl text-foreground mb-6">
              Success
              <span className="text-gradient"> Stories</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Discover how FlowGenic has helped businesses across industries transform their operations 
              with intelligent automation and custom software solutions.
            </p>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {metrics.map((metric, index) => (
              <Card key={metric.label} className="p-6 text-center shadow-card hover-lift bg-card">
                <metric.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <Card key={study.title} className="p-8 md:p-12 shadow-card hover-lift">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                  {/* Main Content */}
                  <div className="lg:col-span-2 space-y-8">
                    {/* Header */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <Badge variant="secondary">{study.industry}</Badge>
                        <Badge variant="outline">{study.duration}</Badge>
                      </div>
                      <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
                        {study.title}
                      </h2>
                      <p className="text-lg text-muted-foreground">{study.client}</p>
                    </div>

                    {/* Challenge */}
                    <div>
                      <h3 className="font-semibold text-xl text-foreground mb-3">Challenge</h3>
                      <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h3 className="font-semibold text-xl text-foreground mb-3">Solution</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">{study.solution}</p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-muted/30 p-6 rounded-lg">
                      <p className="text-muted-foreground italic mb-4">"{study.testimonial}"</p>
                      <div className="text-sm font-medium text-foreground">— {study.author}</div>
                    </div>
                  </div>

                  {/* Results Sidebar */}
                  <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-2xl">
                    <h3 className="font-semibold text-xl text-foreground mb-6">Key Results</h3>
                    <div className="space-y-4">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground font-medium">{result}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-border">
                      <Button className="w-full btn-hero">
                        View Full Case Study
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-6">
              Industries We
              <span className="text-gradient"> Serve</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our solutions have delivered results across diverse industries and business sizes.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              'Technology', 'E-commerce', 'Healthcare', 'Finance', 'Manufacturing', 'Education',
              'Real Estate', 'Marketing', 'Logistics', 'Retail', 'Consulting', 'Startups'
            ].map((industry) => (
              <Card key={industry} className="p-4 text-center shadow-card hover-lift bg-card">
                <div className="text-sm font-medium text-foreground">{industry}</div>
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
              Ready to Write Your Success Story?
            </h3>
            <p className="text-xl mb-8 text-white/90">
              Join our growing list of satisfied clients who have transformed their businesses with FlowGenic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudiesPage;