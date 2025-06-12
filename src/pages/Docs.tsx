
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, Edit, Image, Upload, Users, Eye } from 'lucide-react';

const Docs = () => {
  const guides = [
    {
      title: "Getting Started: Admin Login",
      description: "Step-by-step guide to accessing the admin dashboard",
      icon: User,
      href: "/docs/login",
      difficulty: "Beginner"
    },
    {
      title: "Creating Your First Blog Post",
      description: "Complete walkthrough of the blog post creation process",
      icon: Edit,
      href: "/docs/create-post",
      difficulty: "Beginner"
    },
    {
      title: "Adding Images to Posts",
      description: "How to upload featured images and add images within content",
      icon: Image,
      href: "/docs/images",
      difficulty: "Beginner"
    },
    {
      title: "Publishing & Managing Posts",
      description: "From draft to published - managing your blog content",
      icon: Eye,
      href: "/docs/publishing",
      difficulty: "Beginner"
    },
    {
      title: "Managing Admin Users",
      description: "How to add new committee members as admin users",
      icon: Users,
      href: "/docs/user-management",
      difficulty: "Intermediate"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="flex items-center gap-3 mb-4">
            <img 
              src="/lovable-uploads/7a33230c-4c65-4a6d-b226-eba7a51b4ef3.png" 
              alt="Compassionate North Grenville Logo" 
              className="w-8 h-8 object-contain"
            />
            <h1 className="text-3xl font-heading font-bold">CNG Admin Documentation</h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Welcome to the Compassionate North Grenville blog management guide. 
            These step-by-step tutorials will help you manage your community blog with confidence.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2">
          {guides.map((guide) => (
            <Card key={guide.href} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <guide.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <CardTitle className="text-lg">{guide.title}</CardTitle>
                      <span className="text-xs bg-secondary px-2 py-1 rounded-full">
                        {guide.difficulty}
                      </span>
                    </div>
                    <CardDescription>{guide.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <a href={guide.href}>View Guide</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Access */}
        <div className="mt-12 p-6 bg-white rounded-lg border">
          <h2 className="text-xl font-heading font-semibold mb-4">Quick Access</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Button variant="outline" asChild>
              <a href="/auth" className="justify-start">
                <User className="w-4 h-4 mr-2" />
                Admin Login
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/admin" className="justify-start">
                <Upload className="w-4 h-4 mr-2" />
                Admin Dashboard
              </a>
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>Created for the CNG Committee • Last updated: December 2024</p>
          <p className="mt-1">
            Questions? Contact your site administrator or visit{' '}
            <a href="/" className="text-primary hover:underline">
              compassionatenorthgrenville.ca
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Docs;
