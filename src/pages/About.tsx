import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, Eye, Heart, Award, Users, Lightbulb } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay at the forefront of technology, constantly exploring new solutions to solve complex business challenges.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in working closely with our clients as partners, ensuring transparent communication throughout every project.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We are committed to delivering high-quality solutions that exceed expectations and drive measurable results.',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and ethical practices in all our business relationships and decisions.',
    },
  ];

  const team = [
    {
      name: 'Alex Johnson',
      role: 'Founder & CEO',
      bio: 'With 15+ years in enterprise software development, Alex leads our vision of transforming businesses through intelligent automation.',
      expertise: ['Enterprise Architecture', 'Digital Transformation', 'Strategic Planning'],
    },
    {
      name: 'Sarah Martinez',
      role: 'CTO',
      bio: 'Sarah brings deep technical expertise in AI/ML and cloud technologies, driving our innovation in automation solutions.',
      expertise: ['AI/ML Engineering', 'Cloud Architecture', 'DevOps'],
    },
    {
      name: 'David Chen',
      role: 'Head of Development',
      bio: 'David oversees our development teams, ensuring we deliver scalable, maintainable solutions using modern best practices.',
      expertise: ['Full-Stack Development', 'System Design', 'Team Leadership'],
    },
  ];

  const stats = [
    { value: '50+', label: 'Projects Delivered' },
    { value: '95%', label: 'Client Satisfaction' },
    { value: '5+', label: 'Years Experience' },
    { value: '24/7', label: 'Support Available' },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="font-heading font-bold text-4xl md:text-6xl text-foreground mb-6">
              About
              <span className="text-gradient"> FlowGenic</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We are a forward-thinking technology company dedicated to transforming businesses 
              through intelligent automation and custom software development. Our mission is to 
              empower organizations with innovative solutions that drive efficiency, growth, and success.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <Card className="p-8 md:p-12 shadow-card hover-lift">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-4 bg-primary/10 rounded-xl">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h2 className="font-heading font-bold text-3xl text-foreground">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To democratize advanced technology by making automation and custom software development 
                accessible to businesses of all sizes, enabling them to compete and thrive in the digital age.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe that every organization deserves access to cutting-edge technology solutions 
                that can streamline operations, reduce costs, and unlock new opportunities for growth.
              </p>
            </Card>

            <Card className="p-8 md:p-12 shadow-card hover-lift">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-4 bg-secondary/10 rounded-xl">
                  <Eye className="h-8 w-8 text-secondary" />
                </div>
                <h2 className="font-heading font-bold text-3xl text-foreground">Our Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To be the leading technology partner for businesses seeking digital transformation, 
                recognized for our innovation, expertise, and commitment to client success.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We envision a future where intelligent automation and custom software solutions 
                empower every business to operate more efficiently, make data-driven decisions, 
                and achieve sustainable growth.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-6">
              Our
              <span className="text-gradient"> Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These core values guide everything we do and shape our approach to technology, 
              client relationships, and business practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={value.title} className="p-8 shadow-card hover-lift bg-card">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-6">
              Meet Our
              <span className="text-gradient"> Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our experienced team combines deep technical expertise with business acumen 
              to deliver solutions that truly transform your operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={member.name} className="p-8 shadow-card hover-lift bg-card text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <h3 className="font-semibold text-xl text-foreground mb-2">{member.name}</h3>
                <div className="text-primary font-medium mb-4">{member.role}</div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{member.bio}</p>
                <div className="space-y-2">
                  <div className="text-sm font-medium text-foreground">Expertise:</div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-6">
              Why Choose
              <span className="text-gradient"> FlowGenic?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 shadow-card hover-lift bg-card">
              <h3 className="font-semibold text-lg text-foreground mb-3">Proven Track Record</h3>
              <p className="text-muted-foreground text-sm">50+ successful projects with 95% client satisfaction rate across various industries.</p>
            </Card>
            <Card className="p-6 shadow-card hover-lift bg-card">
              <h3 className="font-semibold text-lg text-foreground mb-3">Cutting-Edge Technology</h3>
              <p className="text-muted-foreground text-sm">We use the latest technologies and best practices to ensure your solution is future-proof.</p>
            </Card>
            <Card className="p-6 shadow-card hover-lift bg-card">
              <h3 className="font-semibold text-lg text-foreground mb-3">Tailored Solutions</h3>
              <p className="text-muted-foreground text-sm">Every solution is custom-built to address your specific business needs and challenges.</p>
            </Card>
            <Card className="p-6 shadow-card hover-lift bg-card">
              <h3 className="font-semibold text-lg text-foreground mb-3">Agile Methodology</h3>
              <p className="text-muted-foreground text-sm">Fast, iterative development with continuous feedback and transparency throughout.</p>
            </Card>
            <Card className="p-6 shadow-card hover-lift bg-card">
              <h3 className="font-semibold text-lg text-foreground mb-3">Ongoing Support</h3>
              <p className="text-muted-foreground text-sm">24/7 support and maintenance to ensure your systems run smoothly and efficiently.</p>
            </Card>
            <Card className="p-6 shadow-card hover-lift bg-card">
              <h3 className="font-semibold text-lg text-foreground mb-3">Cost-Effective</h3>
              <p className="text-muted-foreground text-sm">Competitive pricing with transparent costs and excellent ROI on your technology investments.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-white">
            <h3 className="font-heading font-bold text-3xl md:text-4xl mb-6">
              Ready to Work with Us?
            </h3>
            <p className="text-xl mb-8 text-white/90">
              Let's discuss how FlowGenic can help transform your business with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;