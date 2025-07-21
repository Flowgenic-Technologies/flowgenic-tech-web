import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar, Clock, User, TrendingUp } from 'lucide-react';

const BlogPage = () => {
  const featuredPost = {
    title: 'The Future of Business Automation: 5 Trends to Watch in 2024',
    excerpt: 'Discover the latest trends in business automation that are transforming industries and driving unprecedented efficiency gains.',
    author: 'Alex Johnson',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Automation',
    featured: true,
  };

  const blogPosts = [
    {
      title: 'How AI-Powered Automation is Revolutionizing Customer Service',
      excerpt: 'Learn how intelligent automation is transforming customer support with faster response times and personalized experiences.',
      author: 'Sarah Martinez',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'AI/ML',
    },
    {
      title: 'DevOps Best Practices for Scaling Your Development Team',
      excerpt: 'Essential DevOps strategies and tools that help development teams scale efficiently while maintaining code quality.',
      author: 'David Chen',
      date: '2024-01-10',
      readTime: '10 min read',
      category: 'DevOps',
    },
    {
      title: 'Custom Software vs. Off-the-Shelf: Making the Right Choice',
      excerpt: 'A comprehensive guide to help you decide between custom software development and ready-made solutions.',
      author: 'Alex Johnson',
      date: '2024-01-08',
      readTime: '7 min read',
      category: 'Development',
    },
    {
      title: 'ROI of Business Process Automation: Real Numbers and Case Studies',
      excerpt: 'Data-driven insights into the return on investment from automation projects across different industries.',
      author: 'Sarah Martinez',
      date: '2024-01-05',
      readTime: '9 min read',
      category: 'Business',
    },
    {
      title: 'Building Scalable APIs: Architecture Patterns and Best Practices',
      excerpt: 'Technical deep-dive into designing and implementing APIs that can handle growth and evolving requirements.',
      author: 'David Chen',
      date: '2024-01-03',
      readTime: '12 min read',
      category: 'Development',
    },
    {
      title: 'Cloud Migration Strategies: Lessons from 50+ Successful Projects',
      excerpt: 'Proven strategies and common pitfalls to avoid when migrating your infrastructure to the cloud.',
      author: 'Alex Johnson',
      date: '2024-01-01',
      readTime: '8 min read',
      category: 'Cloud',
    },
  ];

  const categories = [
    { name: 'All', count: 15 },
    { name: 'Automation', count: 6 },
    { name: 'Development', count: 4 },
    { name: 'AI/ML', count: 3 },
    { name: 'DevOps', count: 2 },
  ];

  const trendingTopics = [
    'Process Automation',
    'AI Integration',
    'Cloud Migration',
    'API Development',
    'Digital Transformation',
    'DevOps Practices',
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="font-heading font-bold text-4xl md:text-6xl text-foreground mb-6">
              Insights &
              <span className="text-gradient"> Resources</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Stay ahead of the curve with our latest insights on automation, software development, 
              and digital transformation trends.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="flex items-center space-x-3 mb-8">
              <TrendingUp className="h-6 w-6 text-primary" />
              <h2 className="font-heading font-bold text-2xl text-foreground">Featured Article</h2>
            </div>

            <Card className="p-8 md:p-12 shadow-tech hover-lift bg-gradient-to-br from-primary/5 to-secondary/5">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Badge className="mb-4">{featuredPost.category}</Badge>
                  <h3 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
                    {featuredPost.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-8">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>

                  <Button size="lg" className="btn-hero">
                    Read Full Article
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>

                <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-12 text-white text-center">
                  <div className="text-6xl mb-4">📊</div>
                  <h4 className="font-semibold text-xl mb-4">Featured Insight</h4>
                  <p className="text-white/90">
                    Companies implementing automation see an average 40% increase in operational efficiency within the first year.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-8">Latest Articles</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <Card key={post.title} className="p-6 shadow-card hover-lift bg-card group">
                    <Badge variant="secondary" className="mb-4">{post.category}</Badge>
                    <h3 className="font-semibold text-xl text-foreground mb-3 group-hover:text-primary transition-smooth">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-6">
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <Button variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary group/btn p-0 h-auto">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Card>
                ))}
              </div>

              <div className="mt-12 text-center">
                <Button variant="outline" size="lg">
                  Load More Articles
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Categories */}
              <Card className="p-6 shadow-card">
                <h3 className="font-semibold text-lg text-foreground mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.name} className="flex items-center justify-between py-2 hover:text-primary transition-smooth cursor-pointer">
                      <span className="text-muted-foreground">{category.name}</span>
                      <span className="text-xs bg-muted px-2 py-1 rounded-full">{category.count}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Trending Topics */}
              <Card className="p-6 shadow-card">
                <h3 className="font-semibold text-lg text-foreground mb-4">Trending Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {trendingTopics.map((topic) => (
                    <Badge key={topic} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-smooth">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </Card>

              {/* Newsletter */}
              <Card className="p-6 shadow-card bg-gradient-to-br from-primary/5 to-secondary/5">
                <h3 className="font-semibold text-lg text-foreground mb-4">Stay Updated</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get the latest insights delivered to your inbox weekly.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  <Button className="w-full btn-hero text-sm">
                    Subscribe
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;