
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Edit, Save, Eye } from 'lucide-react';

const DocsCreatePost = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <a href="/docs">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Documentation
            </a>
          </Button>
          <h1 className="text-3xl font-heading font-bold mb-2">Creating Your First Blog Post</h1>
          <p className="text-muted-foreground">Complete walkthrough of the blog post creation process</p>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Edit className="w-5 h-5" />
                Step 1: Start a New Post
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>From your admin dashboard, create a new blog post.</p>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Log into the admin dashboard</li>
                <li>Click the "Create New Post" button</li>
                <li>You'll be taken to the post editor</li>
              </ol>
              <Button asChild className="w-full">
                <a href="/admin" target="_blank">
                  <Edit className="w-4 h-4 mr-2" />
                  Go to Admin Dashboard
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Step 2: Fill in Post Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <p className="font-medium mb-2">Post Title</p>
                  <p className="text-muted-foreground">Enter a clear, descriptive title for your post. This will appear as the main heading.</p>
                  <div className="bg-muted p-3 rounded mt-2">
                    <p className="text-sm"><strong>Example:</strong> "Community Food Drive Success Story"</p>
                  </div>
                </div>
                
                <div>
                  <p className="font-medium mb-2">Post Excerpt</p>
                  <p className="text-muted-foreground">Write a brief summary (1-2 sentences) that will appear on the blog listing page.</p>
                  <div className="bg-muted p-3 rounded mt-2">
                    <p className="text-sm"><strong>Example:</strong> "Thanks to the incredible generosity of our community, we collected over 500 food items for local families in need."</p>
                  </div>
                </div>

                <div>
                  <p className="font-medium mb-2">Category</p>
                  <p className="text-muted-foreground">Select an appropriate category from the dropdown menu to help organize your content.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Step 3: Write Your Content</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Use the rich text editor to write your blog post content.</p>
              <div className="space-y-3">
                <p className="font-medium">Editor Features:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li><strong>Bold, Italic, Underline:</strong> Highlight important text</li>
                  <li><strong>Headers:</strong> Use H1, H2, H3 for section titles</li>
                  <li><strong>Lists:</strong> Create numbered or bullet point lists</li>
                  <li><strong>Links:</strong> Add links to other websites or pages</li>
                  <li><strong>Images:</strong> Insert images directly into your content</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="text-blue-800 text-sm"><strong>Tip:</strong> Write naturally and conversationally. Think about what would interest and engage your community readers.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Save className="w-5 h-5" />
                Step 4: Save and Publish
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Choose how to save your post:</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="p-4 border rounded-lg">
                  <p className="font-medium mb-2">Save as Draft</p>
                  <p className="text-sm text-muted-foreground">Save your work without publishing. You can come back to edit and publish later.</p>
                </div>
                <div className="p-4 border rounded-lg bg-green-50 border-green-200">
                  <p className="font-medium mb-2 text-green-900">Publish Now</p>
                  <p className="text-sm text-green-700">Make your post live and visible to website visitors immediately.</p>
                </div>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p className="text-yellow-800 text-sm"><strong>Before Publishing:</strong> Review your post for spelling, grammar, and accuracy. Remember, "wording is everything" for CNG!</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Step 5: View Your Published Post
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>After publishing, you can view your post on the live website.</p>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Go to the main website</li>
                <li>Click on "Blog" in the navigation</li>
                <li>Find your post in the list</li>
                <li>Click to read the full post</li>
              </ol>
              <Button asChild className="w-full" variant="outline">
                <a href="/blog" target="_blank">
                  <Eye className="w-4 h-4 mr-2" />
                  View Blog Page
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-between">
          <Button variant="outline" asChild>
            <a href="/docs/login">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous: Login Guide
            </a>
          </Button>
          <Button asChild>
            <a href="/docs/images">
              Next: Adding Images
              <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DocsCreatePost;
