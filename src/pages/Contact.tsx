import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Calendar } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. We'll get back to you within 24 hours.",
    });
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info.flowgenic@gmail.com',
      description: 'Send us an email anytime',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+977 9819185638',
      description: 'Mon-Fri from 10:00 AM to 5 PM ',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Lalitpur, Nepal',
      description: 'Schedule an in-person meeting',
    },
    {
      icon: Clock,
      title: 'Response Time',
      details: '< 24 hours',
      description: 'We respond to all inquiries quickly',
    },
  ];

  const services = [
    'Automation Solutions',
    'Custom Software Development',
    'Digital Marketing',
    'AI/ML Implementation',
    'Consulting & Strategy',
    'Other',
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="font-heading font-bold text-4xl md:text-6xl text-foreground mb-6">
              Get In
              <span className="text-gradient"> Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Ready to transform your business with intelligent automation and custom software?
              Let's discuss your project and explore how FlowGenic can help you achieve your goals.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={info.title} className="p-6 text-center shadow-card hover-lift bg-card">
                <div className="p-3 bg-slate-100 rounded-lg w-fit mx-auto mb-4">
                  <info.icon className="h-6 w-6 text-chart-2" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">{info.title}</h3>
                <div className="text-primary font-medium mb-1">{info.details}</div>
                <div className="text-sm text-muted-foreground">{info.description}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 md:p-12 shadow-card">
                <div className="flex items-center space-x-3 mb-8">
                  <MessageSquare className="h-8 w-8 text-primary" />
                  <h2 className="font-heading font-bold text-3xl text-chart-2">
                    Send Us a Message
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 ">
                      <Label htmlFor="name" className='text-chart-3 font-semibold'>Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className='text-chart-3 font-semibold'>Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@gmail.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company" className='text-chart-3 font-semibold'>Company</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className='text-chart-3 font-semibold'>Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+977 0123456789"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service" className='text-chart-3 font-semibold'>Service of Interest</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className='text-chart-3 font-semibold'>Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell us about your project, requirements, and goals..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full btn-hero bg-chart-2 hover:bg-chart-1">
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </Card>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              {/* Quick Actions */}
              {/* <Card className="p-8 shadow-card">
                <h3 className="font-semibold text-xl text-foreground mb-6">Quick Actions</h3>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="mr-3 h-4 w-4" />
                    Schedule a Demo
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Phone className="mr-3 h-4 w-4" />
                    Request a Call
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Mail className="mr-3 h-4 w-4" />
                    Get a Quote
                  </Button>
                </div>
              </Card> */}

              {/* FAQ */}
              <Card className="p-8 shadow-card">
                <h3 className="font-semibold text-xl text-chart-2 mb-6">Frequently Asked</h3>
                <div className="space-y-4">
                  <div>
                    <div className="font-medium text-chart-1 mb-2">How quickly can we start?</div>
                    <div className="text-sm text-muted-foreground">Most projects can begin within 1-2 weeks after requirements gathering.</div>
                  </div>
                  <div>
                    <div className="font-medium text-chart-1 mb-2">What's included in the consultation?</div>
                    <div className="text-sm text-muted-foreground">Free 60-minute strategy session, requirements analysis, and project roadmap.</div>
                  </div>
                  <div>
                    <div className="font-medium text-chart-1 mb-2">Do you provide ongoing support?</div>
                    <div className="text-sm text-muted-foreground">Yes, we offer 24/7 support and maintenance packages for all our solutions.</div>
                  </div>
                </div>
              </Card>

              {/* Office Hours */}
              <Card className="p-8 shadow-card">
                <h3 className="font-semibold text-xl text-chart-2 mb-6">Office Hours</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="text-foreground font-medium">10:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="text-foreground font-medium">Closed</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-foreground font-medium">Closed</span>
                  </div>
                  <div className="pt-3 border-t border-border">
                    <div className="text-chart-1 font-medium">Emergency Support: 24/7</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <div className="space-y-3">
        {/* <div className="flex items-center space-x-3">
          <MapPin className="h-4 w-4 text-secondary" />
          <span className="text-sm">Lalitpur, Nepal</span>
        </div> */}

        <div className="w-[80%] mx-auto rounded-lg overflow-hidden shadow-md">
          <iframe
            title="Flowgenic Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.092381879854!2d85.31920351506065!3d27.687515432782307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1905dc5cf1ef%3A0x52c44c45784dbf65!2sLalitpur%2C%20Nepal!5e0!3m2!1sen!2snp!4v1623416589373!5m2!1sen!2snp"
            width="100%"
            height="500"
            allowFullScreen
            loading="lazy"
            className="border-0 rounded-lg w-full h-[500px]"
          ></iframe>
        </div>
      </div>


      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-heading font-bold text-3xl md:text-4xl text-chart-1 mb-6">
            Prefer to Talk Directly?
          </h3>
          <p className="text-xl text-muted-foreground mb-8">
            Schedule a free 30-minute consultation to discuss your project requirements and explore how we can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Button size="lg" className="btn-hero">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Free Consultation
            </Button> */}
            <a href="tel:+9779819185638">

              <Button variant="outline" size="lg">
                <Phone className="mr-2 h-5 w-5" />
                Call (+977 ) 9819185638
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;