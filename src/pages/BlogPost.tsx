
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, ArrowLeft, Heart, User } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface BlogPostData {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  published_at: string;
  created_at: string;
  author_name: string;
  featured_image: string | null;
  categories: { name: string } | null;
}

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (id) {
      fetchPost();
    }
  }, [id]);

  const fetchPost = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select(`
          id,
          title,
          content,
          excerpt,
          published_at,
          created_at,
          author_name,
          featured_image,
          categories:category_id (name)
        `)
        .eq('slug', id)
        .eq('published', true)
        .single();

      if (error) throw error;
      setPost(data);
    } catch (error) {
      console.error('Error fetching post:', error);
      setError('Post not found');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading post...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The blog post you're looking for doesn't exist or isn't published yet.
          </p>
          <Button asChild>
            <Link to="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-8">
          <Button variant="outline" asChild>
            <Link to="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>

        {/* Article */}
        <article>
          <Card className="overflow-hidden">
            {/* Featured Image */}
            {post.featured_image && (
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={post.featured_image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="p-8 md:p-12">
              {/* Category Badge */}
              {post.categories && (
                <div className="mb-6">
                  <Badge variant="secondary" className="text-sm">
                    {post.categories.name}
                  </Badge>
                </div>
              )}

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center text-sm text-muted-foreground mb-8 gap-4">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  <span>{post.author_name}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>
                    {new Date(post.published_at || post.created_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
              </div>

              {/* Excerpt */}
              {post.excerpt && (
                <div className="text-lg text-muted-foreground leading-relaxed mb-8 p-6 bg-secondary/10 rounded-lg border-l-4 border-primary">
                  {post.excerpt}
                </div>
              )}

              {/* Content - now renders as HTML with blog-content styling */}
              <div className="prose prose-lg max-w-none">
                <div 
                  className="blog-content text-foreground leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>
            </div>
          </Card>
        </article>

        {/* Call to Action */}
        <Card className="mt-12 p-8 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 text-center">
          <Heart className="w-8 h-8 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-heading font-bold text-foreground mb-4">
            Share Your Story
          </h3>
          <p className="text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
            Inspired by this story? We'd love to hear about your own experiences with compassion and community connection.
          </p>
          <Button asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default BlogPost;
