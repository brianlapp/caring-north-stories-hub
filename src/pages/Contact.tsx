
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Mail, Heart, Phone, MapPin, Facebook } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    joinNewsletter: false
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, joinNewsletter: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent('Message from Compassionate North Grenville Website');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n${
        formData.joinNewsletter ? 'Please add me to your mailing list for updates and events.' : ''
      }`
    );
    
    window.location.href = `mailto:compassionateng@gmail.com?subject=${subject}&body=${body}`;
    
    toast({
      title: "Thank you for reaching out!",
      description: "Your email client should open with your message ready to send.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
      joinNewsletter: false
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-secondary/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We'd love to hear from you. Whether you have a story to share, want to get involved, 
            or have questions about our community, we're here to connect.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <Card className="p-8">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-base font-medium">
                    Your Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-2 text-lg py-3"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-base font-medium">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-2 text-lg py-3"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-base font-medium">
                    Your Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="mt-2 text-lg"
                    placeholder="Tell us how we can help, share your story, or ask any questions you have..."
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="newsletter"
                    checked={formData.joinNewsletter}
                    onCheckedChange={handleCheckboxChange}
                    className="mt-1"
                  />
                  <Label htmlFor="newsletter" className="text-sm text-muted-foreground leading-relaxed">
                    I'd like to receive updates about events and community stories 
                    (we'll only send meaningful updates, never spam)
                  </Label>
                </div>

                <Button type="submit" size="lg" className="w-full text-lg py-4">
                  <Heart className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Primary Contact */}
            <Card className="p-8 bg-primary/5 border-primary/20">
              <h3 className="text-xl font-heading font-bold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a 
                      href="mailto:compassionateng@gmail.com" 
                      className="text-primary hover:text-primary/80 transition-colors story-link"
                    >
                      compassionateng@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">North Grenville, Ontario</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                    <Facebook className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Facebook</p>
                    <a 
                      href="https://www.facebook.com/compassionatenorthgrenville/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors story-link"
                    >
                      @compassionatenorthgrenville
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            {/* How We Can Help */}
            <Card className="p-8">
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                How We Can Help
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Connect you with community support during difficult times</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Help you find upcoming events and gatherings</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Share your story of compassion with our community</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Provide information about caregiving resources</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Answer questions about our mission and values</span>
                </li>
              </ul>
            </Card>

            {/* Response Time */}
            <Card className="p-6 bg-accent/5 border-accent/20">
              <h4 className="font-semibold text-foreground mb-2">Response Time</h4>
              <p className="text-sm text-muted-foreground">
                We typically respond to messages within 2-3 business days. 
                If you need immediate support, please don't hesitate to reach 
                out to local emergency services or crisis support lines.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
