
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Heart, User, ArrowLeft, Share2 } from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams();

  // Sample blog post data - in a real app, this would be fetched based on the ID
  const blogPost = {
    id: 1,
    title: "Finding Grace in Caregiving: Sarah's Journey",
    content: `When Sarah's mother was diagnosed with dementia three years ago, she thought her world was ending. The vibrant woman who had raised her with such strength and wisdom was slowly slipping away, and Sarah felt utterly unprepared for the journey ahead.

"I remember sitting in the doctor's office, hearing the words but not really understanding what they meant," Sarah recalls. "Dementia. Progressive. No cure. I felt like I was drowning."

The early months were the hardest. Sarah tried to manage everything alone—the doctor's appointments, the medications, the gradual changes in her mother's behavior. She was exhausted, overwhelmed, and increasingly isolated from her friends and community.

Everything changed when Sarah attended her first "Let's Talk Compassion" gathering at the North Grenville Community Center.

"I wasn't even going to go," she admits. "I felt like I didn't have time, and honestly, I was embarrassed. I thought people would judge me for not handling things better."

But that evening, surrounded by neighbors who truly understood, Sarah found something she hadn't expected: hope.

"There was Margaret, who had cared for her husband with Alzheimer's for seven years. There was Tom, whose teenage daughter had been helping care for his father. There was Jennifer, a nurse who had resources I'd never heard of. Suddenly, I wasn't alone anymore."

The group became Sarah's lifeline. They shared practical tips—how to create a calm environment, which community services were available, how to take care of herself while caring for her mother. But more importantly, they shared their stories, their struggles, and their small victories.

"Margaret taught me about the 'sunset moments,'" Sarah explains. "Those brief times when Mom would be completely herself again, usually in the early evening. Instead of mourning who she was becoming, I learned to treasure who she still was in those precious moments."

The community rallied around Sarah in ways she never expected. Neighbors brought meals when she couldn't leave her mother's side. Friends from the group would sit with her mom so Sarah could attend her son's hockey games. The local pharmacist learned her mother's routine and would have medications ready without being asked.

"It sounds small, but those gestures meant everything," Sarah says. "When you're caregiving, you start to feel invisible. But this community saw me, saw us, and made sure we weren't forgotten."

Today, Sarah's mother lives in a memory care facility, and while the disease has progressed, Sarah approaches each visit with the grace and peace she's learned from her community.

"I still have hard days," she acknowledges. "But I also have a phone full of numbers of people who get it. I have Margaret's homemade soup recipes that my mom sometimes still remembers. I have the knowledge that when my neighbors face their own challenges, I can be there for them too."

Sarah now co-facilitates the monthly gatherings, sharing her story with newcomers who arrive feeling as lost and alone as she once did.

"Caregiving taught me that we're not meant to carry these burdens alone," she reflects. "In our community, no one has to. We hold each other up, we share the load, and somehow, we find grace in the journey together."

If you're facing your own caregiving challenges, Sarah's message is simple: "Come as you are. You don't need to have it all figured out. Just come, and let us walk alongside you."`,
    author: "Community Contributor",
    date: "2024-06-08",
    category: "Caregiving Stories",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=400&fit=crop",
    readTime: "5 min read"
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-secondary/20 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6 story-link"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Stories
          </Link>
          
          <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{new Date(blogPost.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center space-x-1">
              <User className="w-4 h-4" />
              <span>{blogPost.author}</span>
            </div>
            <span>•</span>
            <span>{blogPost.readTime}</span>
          </div>
          
          <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-6">
            {blogPost.category}
          </span>
          
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
            {blogPost.title}
          </h1>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Image */}
        <img
          src={blogPost.image}
          alt={blogPost.title}
          className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
        />

        {/* Article Text */}
        <div className="prose prose-lg max-w-none">
          {blogPost.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-muted-foreground leading-relaxed mb-6 text-lg">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Share Section */}
        <Card className="mt-12 p-6 bg-secondary/10">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-heading font-semibold mb-2">Share This Story</h3>
              <p className="text-muted-foreground">Help others find hope and community</p>
            </div>
            <Button variant="outline" className="group">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </Card>

        {/* Call to Action */}
        <Card className="mt-8 p-8 bg-primary/5 border-primary/20 text-center">
          <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
            Your Story Matters Too
          </h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Do you have a story of compassion, caregiving, or community connection to share? 
            We'd love to hear from you and help your story inspire others.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Share Your Story</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/blog">Read More Stories</Link>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BlogPost;
