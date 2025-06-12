import React, { useState, useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Heart, User, ArrowRight } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  created_at: string;
  slug: string;
  featured_image: string | null;
  author_name: string;
  categories: {
    name: string;
  } | null;
}

const Index = () => {
  const [featuredStories, setFeaturedStories] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedPosts();
  }, []);

  const fetchFeaturedPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select(`
          id,
          title,
          excerpt,
          created_at,
          slug,
          featured_image,
          author_name,
          categories:category_id (name)
        `)
        .eq('published', true)
        .order('published_at', { ascending: false })
        .limit(2);

      if (error) throw error;
      setFeaturedStories(data || []);
    } catch (error) {
      console.error('Error fetching featured posts:', error);
      // Keep empty array on error so section still renders
      setFeaturedStories([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Blog Posts */}
      <section className="py-20 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Latest from Our Blog
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the latest stories and updates from our community blog, featuring weekly posts about compassion and connection.
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading latest posts...</p>
            </div>
          ) : featuredStories.length === 0 ? (
            <div className="text-center py-12">
              <Heart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-2xl font-heading font-bold mb-4">Coming Soon</h3>
              <p className="text-muted-foreground mb-6">
                Our community blog posts will appear here soon. Check back for inspiring stories and updates!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {featuredStories.map((story) => (
                <Card key={story.id} className="p-6 hover-scale transition-all duration-300 hover:shadow-lg">
                  {/* Featured Image */}
                  {story.featured_image && (
                    <div className="aspect-video overflow-hidden rounded-lg mb-4">
                      <img 
                        src={story.featured_image} 
                        alt={`Featured image for blog post: ${story.title}`}
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  )}

                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(story.created_at).toLocaleDateString('en-US', { 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{story.author_name}</span>
                    </div>
                    {story.categories && (
                      <>
                        <span>•</span>
                        <span>{story.categories.name}</span>
                      </>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3 story-link">
                    <Link to={`/blog/${story.slug}`}>{story.title}</Link>
                  </h3>
                  
                  {story.excerpt && (
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {story.excerpt}
                    </p>
                  )}

                  <Button variant="outline" className="w-full" asChild>
                    <Link to={`/blog/${story.slug}`}>Read More</Link>
                  </Button>
                </Card>
              ))}
            </div>
          )}

          <div className="text-center">
            <Button size="lg" variant="outline" className="text-lg px-8 py-4" asChild>
              <Link to="/blog">
                Visit Our Blog
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Community Connection */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Community Connections
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We facilitate meaningful gatherings and conversations as opportunities arise in our community.
            </p>
          </div>

          <Card className="p-8 bg-primary/5 border-primary/20 text-center mb-12">
            <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
              Past Community Gatherings
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our recent events have included advance care planning workshops, storytelling circles, 
              and intergenerational conversations that have brought our community together around 
              shared experiences of care and compassion.
            </p>
            <Button size="lg" className="text-lg px-8 py-4" asChild>
              <Link to="/events">
                Learn About Our Events
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-16 h-16 text-accent mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Be Part of Our Community
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Whether you want to share your story, connect with others who understand life's challenges, 
            or learn about compassionate community building, there's a place for you here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4" asChild>
              <Link to="/contact">Connect With Us</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4" asChild>
              <Link to="/about">Learn About Our Mission</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
