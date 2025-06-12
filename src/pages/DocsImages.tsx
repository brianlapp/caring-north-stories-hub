
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Image, Upload, Eye, AlertCircle } from 'lucide-react';

const DocsImages = () => {
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
          <h1 className="text-3xl font-heading font-bold mb-2">Adding Images to Posts</h1>
          <p className="text-muted-foreground">How to upload featured images and add images within content</p>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Image className="w-5 h-5" />
                Adding a Featured Image
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Featured images appear at the top of your blog post and in the blog listing page.</p>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>In the post editor, find the "Featured Image" section</li>
                <li>Click "Choose Image" to open the file browser</li>
                <li>Select an image from your computer (JPG, PNG, or GIF)</li>
                <li>Wait for the upload to complete</li>
                <li>Your image will appear as a preview</li>
              </ol>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="flex gap-2">
                  <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-blue-900">Image Guidelines</p>
                    <p className="text-blue-700 text-sm">Use high-quality images that are at least 800x400 pixels. Keep file sizes under 5MB for best performance.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="w-5 h-5" />
                Adding Images to Content
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>You can add images anywhere within your blog post content using the editor toolbar.</p>
              <div className="space-y-3">
                <p className="font-medium">Step-by-step:</p>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                  <li>Click where you want to insert the image in your content</li>
                  <li>Look for the image icon in the editor toolbar</li>
                  <li>Click the image icon</li>
                  <li>Select your image file when prompted</li>
                  <li>Wait for the upload and insertion</li>
                </ol>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-medium mb-2">Pro Tips:</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Images will be automatically resized to fit your content</li>
                  <li>You can click and drag to reposition images</li>
                  <li>Add captions by typing below the image</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Image Best Practices</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="p-4 border rounded-lg bg-green-50 border-green-200">
                  <p className="font-medium text-green-900 mb-2">Do:</p>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Use clear, high-resolution images</li>
                    <li>• Choose images relevant to your content</li>
                    <li>• Optimize file sizes before uploading</li>
                    <li>• Use consistent image styles</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg bg-red-50 border-red-200">
                  <p className="font-medium text-red-900 mb-2">Don't:</p>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Upload extremely large files (&gt;5MB)</li>
                    <li>• Use blurry or pixelated images</li>
                    <li>• Include copyrighted content</li>
                    <li>• Overload posts with too many images</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Removing or Replacing Images</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <p className="font-medium">Featured Image:</p>
                  <p className="text-muted-foreground text-sm">Click the X button in the top-right corner of the image preview to remove it.</p>
                </div>
                <div>
                  <p className="font-medium">Content Images:</p>
                  <p className="text-muted-foreground text-sm">Click on the image and press Delete, or select and replace using the image toolbar button.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-between">
          <Button variant="outline" asChild>
            <a href="/docs/create-post">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous: Creating Posts
            </a>
          </Button>
          <Button asChild>
            <a href="/docs/publishing">
              Next: Publishing & Managing
              <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DocsImages;
