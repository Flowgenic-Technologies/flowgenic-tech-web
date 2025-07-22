import { Star, Quote } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { NumberTicker } from './magicui/number-ticker';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Bipesh Adhikari',
      role: 'Manager ',
      company: 'Agentuary Inc',
      content: 'FlowGenic transformed our entire development workflow. Their automation solutions reduced our deployment time by 80% and significantly improved our team productivity.',
      rating: 5,
    },
    {
      name: 'Kiran Lamsal',
      role: 'Founder',
      company: ' Grow Up Pet Shop',
      content: 'The custom software solution FlowGenic built for us exceeded all expectations. Their attention to detail and technical expertise is unmatched.',
      rating: 5,
    },
    {
      name: 'Bhabanath Lamsal',
      role: 'Founder',
      company: 'Sushrut Ayurved Pharma',
      content: 'Working with FlowGenic was a game-changer. They understood our vision and delivered a scalable platform that grew with our business needs.',
      rating: 5,
    },
  ];

  const stats = [
    { value: '30+', label: 'Projects Completed' },
    { value: '95%', label: 'Client Satisfaction' },
    { value: '80%', label: 'Process Improvement' },
    { value: '24/7', label: 'Support Available' },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-6">
            What Our
            <span className="text-gradient"> Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. See what industry leaders say about 
            our automation solutions and development expertise.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name} 
              className="p-8 hover-lift shadow-card bg-card border-border/50 relative overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -translate-y-10 translate-x-10 group-hover:bg-primary/10 transition-smooth"></div>
              
              <div className="relative z-10">
                {/* Quote icon */}
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-muted/30 rounded-2xl p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold  mb-2 group-hover:scale-110 transition-transform">
                  <NumberTicker value={typeof stat.value === 'string' ? parseFloat(stat.value) : stat.value} />+
  
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;