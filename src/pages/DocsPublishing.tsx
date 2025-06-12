
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Eye, Edit, Save, Calendar, AlertCircle } from 'lucide-react';

const DocsPublishing = () => {
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
          <h1 className="text-3xl font-heading font-bold mb-2">Publishing & Managing Posts</h1>
          <p className="text-muted-foreground">From draft to published - managing your blog content</p>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Save className="w-5 h-5" />
                Draft vs. Published
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Understanding the difference between drafts and published posts:</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="p-4 border rounded-lg">
                  <p className="font-medium mb-2">Draft Posts</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Only visible to admin users</li>
                    <li>• Can be edited freely</li>
                    <li>• Perfect for work-in-progress</li>
                    <li>• No publication date set</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg bg-green-50 border-green-200">
                  <p className="font-medium mb-2 text-green-900">Published Posts</p>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Visible to all website visitors</li>
                    <li>• Appears in blog listings</li>
                    <li>• Has a publication date</li>
                    <li>• Can still be edited after publishing</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Publishing Your Post
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>When you're ready to make your post live:</p>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Review your post content for spelling and accuracy</li>
                <li>Make sure you have a featured image (recommended)</li>
                <li>Check that your category is set correctly</li>
                <li>Click the "Publish" button in the editor toolbar</li>
                <li>Your post will immediately appear on the website</li>
              </ol>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <div className="flex gap-2">
                  <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-yellow-900">Before Publishing</p>
                    <p className="text-yellow-700 text-sm">Remember: "Wording is everything" for CNG! Take time to review your content carefully.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Edit className="w-5 h-5" />
                Managing Published Posts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>You can always edit posts after they're published.</p>
              <div className="space-y-3">
                <p className="font-medium">From the Admin Dashboard:</p>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                  <li>Go to your admin dashboard</li>
                  <li>Find the post in your posts list</li>
                  <li>Click the "Edit" button</li>
                  <li>Make your changes</li>
                  <li>Click "Publish" to save changes</li>
                </ol>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="text-blue-800 text-sm"><strong>Tip:</strong> Changes to published posts take effect immediately. Visitors will see your updates right away.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Post Organization
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Keep your blog organized with these practices:</p>
              <div className="space-y-4">
                <div>
                  <p className="font-medium mb-2">Categories</p>
                  <p className="text-muted-foreground text-sm">Use consistent categories to help readers find related content. Common categories might include "Events," "Community News," "Volunteer Spotlight," etc.</p>
                </div>
                <div>
                  <p className="font-medium mb-2">Post Titles</p>
                  <p className="text-muted-foreground text-sm">Write clear, descriptive titles that tell readers exactly what to expect from your post.</p>
                </div>
                <div>
                  <p className="font-medium mb-2">Publication Timing</p>
                  <p className="text-muted-foreground text-sm">Consider when your audience is most likely to read your content. Community updates are often best published early in the week.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Access Links</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2">
                <Button variant="outline" asChild>
                  <a href="/admin" target="_blank">
                    <Edit className="w-4 h-4 mr-2" />
                    Admin Dashboard
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/blog" target="_blank">
                    <Eye className="w-4 h-4 mr-2" />
                    View Live Blog
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-between">
          <Button variant="outline" asChild>
            <a href="/docs/images">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous: Adding Images
            </a>
          </Button>
          <Button asChild>
            <a href="/docs/user-management">
              Next: Managing Users
              <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DocsPublishing;
