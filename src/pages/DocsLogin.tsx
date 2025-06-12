
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, User, Eye, AlertCircle } from 'lucide-react';

const DocsLogin = () => {
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
          <h1 className="text-3xl font-heading font-bold mb-2">Admin Login Guide</h1>
          <p className="text-muted-foreground">Step-by-step instructions for accessing the CNG admin dashboard</p>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Step 1: Navigate to Login Page
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>To access the admin area, you'll need to sign in first.</p>
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-medium mb-2">Go to the login page:</p>
                <p className="font-mono text-sm bg-background p-2 rounded border">
                  https://www.compassionatenorthgrenville.ca/auth
                </p>
              </div>
              <Button asChild className="w-full">
                <a href="/auth" target="_blank">
                  <User className="w-4 h-4 mr-2" />
                  Open Login Page
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Step 2: Enter Your Login Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Use the email address and password that were set up for your admin account.</p>
              <div className="space-y-3">
                <div>
                  <p className="font-medium">Email:</p>
                  <p className="text-muted-foreground">Use the email address provided by your site administrator</p>
                </div>
                <div>
                  <p className="font-medium">Password:</p>
                  <p className="text-muted-foreground">Enter your secure password</p>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="flex gap-2">
                  <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-blue-900">First Time Login?</p>
                    <p className="text-blue-700 text-sm">If this is your first time logging in, you may need to check your email for a confirmation link.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Step 3: Access Admin Dashboard
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>After successful login, you'll be automatically redirected to the admin dashboard.</p>
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-medium mb-2">Admin dashboard URL:</p>
                <p className="font-mono text-sm bg-background p-2 rounded border">
                  https://www.compassionatenorthgrenville.ca/admin
                </p>
              </div>
              <p>From the dashboard, you can:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>View and manage all blog posts</li>
                <li>Create new blog posts</li>
                <li>Edit existing content</li>
                <li>Manage other admin users</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-yellow-50 border-yellow-200">
            <CardHeader>
              <CardTitle className="text-yellow-900">Troubleshooting</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-yellow-800">
                <p><strong>Can't remember your password?</strong> Contact your site administrator to reset it.</p>
                <p><strong>Getting "Access Denied"?</strong> Make sure you're using the correct email address and that your admin privileges have been set up.</p>
                <p><strong>Page won't load?</strong> Check your internet connection and try refreshing the page.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-between">
          <Button variant="outline" asChild>
            <a href="/docs">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Index
            </a>
          </Button>
          <Button asChild>
            <a href="/docs/create-post">
              Next: Creating Posts
              <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DocsLogin;
