
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Heart } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  created_at: string;
  slug: string;
  featured_image: string | null;
  categories: {
    name: string;
  } | null;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
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
          categories:category_id (name)
        `)
        .eq('published', true)
        .order('published_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Background Image */}
      <div className="relative min-h-[60vh] flex items-center justify-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/lovable-uploads/01ee1980-cca3-42d1-bd92-88d0e3631023.png)'
          }}
        />
        
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 drop-shadow-2xl">
            Community Blog
          </h1>
          <p className="text-xl text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            Weekly stories of compassion, connection, and care from our North Grenville community. 
            This is where we share updates, insights, and inspiring stories that remind us we're not alone in our journey.
          </p>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading posts...</p>
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-12">
            <Heart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-heading font-bold mb-4">No Posts Yet</h2>
            <p className="text-muted-foreground mb-6">
              Our community blog posts will appear here soon. Check back for inspiring stories and updates!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.id} className="group overflow-hidden hover-scale transition-all duration-300 hover:shadow-xl border-0 shadow-lg bg-card flex flex-col">
                {/* Featured Image */}
                {post.featured_image && (
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.featured_image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Meta Info */}
                  <div className="flex items-center text-xs text-muted-foreground mb-3">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>
                      {new Date(post.created_at).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                    {post.categories && (
                      <>
                        <span className="mx-2">•</span>
                        <span>{post.categories.name}</span>
                      </>
                    )}
                  </div>
                  
                  {/* Title */}
                  <h2 className="text-lg font-heading font-bold text-foreground mb-3 line-clamp-2 story-link group-hover:text-primary transition-colors">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  
                  {/* Excerpt */}
                  {post.excerpt && (
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>
                  )}

                  {/* Read More Button - Full Width */}
                  <Button className="w-full mt-auto" asChild>
                    <Link to={`/blog/${post.slug}`}>Read More</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <Card className="mt-16 p-8 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 text-center">
          <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
            Contribute to Our Blog
          </h3>
          <p className="text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
            Do you have a story of compassion, caregiving, or community connection to share? 
            We'd love to feature your story in our weekly blog posts to inspire others in our community.
          </p>
          <Button size="lg" className="text-lg px-8 py-4" asChild>
            <Link to="/contact">Submit Your Story</Link>
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Blog;
