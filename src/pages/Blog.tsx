
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Heart, User, Clock } from 'lucide-react';

const Blog = () => {
  // Sample blog posts - in a real app, these would come from a CMS or database
  const blogPosts = [
    {
      id: 1,
      title: "Finding Grace in Caregiving: Sarah's Journey",
      excerpt: "When Sarah's mother was diagnosed with dementia, she thought her world was ending. Instead, she discovered a community of support and unexpected moments of joy that transformed both their lives.",
      author: "Community Contributor",
      date: "2024-06-08",
      category: "Caregiving Stories",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=400&fit=crop",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "The Power of Presence: Lessons from Community Connections",
      excerpt: "Sometimes the most powerful thing we can offer someone facing loss is simply being there. Community members share what they've learned about the gift of presence and meaningful connection.",
      author: "Community Contributors",
      date: "2024-06-01",
      category: "Community Wisdom",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=400&fit=crop",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "Youngsters of Yore: Stories from Our Elders",
      excerpt: "In our community storytelling circles, local elders share memories that remind us of the enduring power of human connection across generations.",
      author: "Storytelling Circle",
      date: "2024-05-25",
      category: "Elder Wisdom",
      image: "https://images.unsplash.com/photo-1439886183900-e79ec0057170?w=800&h=400&fit=crop",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-secondary/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            CNG Community Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Weekly stories of compassion, connection, and care from our North Grenville community. 
            This is where we share updates, insights, and inspiring stories that remind us we're not alone in our journey.
          </p>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group overflow-hidden hover-scale transition-all duration-300 hover:shadow-xl border-0 shadow-lg bg-card">
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                {/* Title */}
                <h2 className="text-lg font-heading font-bold text-foreground mb-3 line-clamp-2 story-link group-hover:text-primary transition-colors">
                  <a href={`/blog/${post.id}`}>{post.title}</a>
                </h2>
                
                {/* Excerpt */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-secondary-foreground" />
                    </div>
                    <span className="text-xs text-muted-foreground font-medium">{post.author}</span>
                  </div>
                  <Button size="sm" variant="ghost" className="text-xs group-hover:text-primary transition-colors">
                    Read More
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            Load More Posts
          </Button>
        </div>

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
            <a href="/contact">Submit Your Story</a>
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Blog;
