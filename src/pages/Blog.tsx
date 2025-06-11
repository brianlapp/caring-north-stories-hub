
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Heart, User } from 'lucide-react';

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
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=400&fit=crop"
    },
    {
      id: 2,
      title: "The Power of Presence: Lessons from Community Connections",
      excerpt: "Sometimes the most powerful thing we can offer someone facing loss is simply being there. Community members share what they've learned about the gift of presence and meaningful connection.",
      author: "Community Contributors",
      date: "2024-06-01",
      category: "Community Wisdom",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Youngsters of Yore: Stories from Our Elders",
      excerpt: "In our community storytelling circles, local elders share memories that remind us of the enduring power of human connection across generations.",
      author: "Storytelling Circle",
      date: "2024-05-25",
      category: "Elder Wisdom",
      image: "https://images.unsplash.com/photo-1439886183900-e79ec0057170?w=800&h=400&fit=crop"
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover-scale transition-all duration-300 hover:shadow-lg">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="p-8 md:w-2/3">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {post.category}
                  </span>
                  
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4 story-link">
                    <a href={`/blog/${post.id}`}>{post.title}</a>
                  </h2>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  
                  <Button variant="outline" className="group">
                    Read Full Post
                    <Heart className="w-4 h-4 ml-2 group-hover:text-accent transition-colors" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <Card className="mt-16 p-8 bg-primary/5 border-primary/20 text-center">
          <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
            Contribute to Our Blog
          </h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
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
