
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Users, UserPlus, Shield, AlertTriangle } from 'lucide-react';

const DocsUserManagement = () => {
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
          <h1 className="text-3xl font-heading font-bold mb-2">Managing Admin Users</h1>
          <p className="text-muted-foreground">How to add new committee members as admin users</p>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Understanding Admin Roles
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>There are two types of admin users in the CNG system:</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="p-4 border rounded-lg">
                  <p className="font-medium mb-2">Editor</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Create and edit blog posts</li>
                    <li>• Publish content</li>
                    <li>• Manage their own posts</li>
                    <li>• Upload images</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg bg-blue-50 border-blue-200">
                  <p className="font-medium mb-2 text-blue-900">Admin</p>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• All editor permissions</li>
                    <li>• Add new admin users</li>
                    <li>• Manage all blog posts</li>
                    <li>• Full system access</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserPlus className="w-5 h-5" />
                Adding a New Admin User
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Follow these steps to add a new committee member as an admin:</p>
              <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                <li>
                  <span className="text-foreground font-medium">Access Admin Users Tab</span>
                  <p className="text-sm ml-4 mt-1">From your admin dashboard, click on the "Admin Users" tab</p>
                </li>
                <li>
                  <span className="text-foreground font-medium">Click "Add Admin User"</span>
                  <p className="text-sm ml-4 mt-1">Look for the blue "Add Admin User" button at the top right</p>
                </li>
                <li>
                  <span className="text-foreground font-medium">Fill in the Details</span>
                  <div className="text-sm ml-4 mt-1 space-y-1">
                    <p>• <strong>Full Name:</strong> The committee member's complete name</p>
                    <p>• <strong>Email:</strong> Their email address (they'll use this to log in)</p>
                    <p>• <strong>Password:</strong> A secure temporary password</p>
                    <p>• <strong>Role:</strong> Choose "Editor" or "Admin"</p>
                  </div>
                </li>
                <li>
                  <span className="text-foreground font-medium">Create the Account</span>
                  <p className="text-sm ml-4 mt-1">Click "Create Admin User" to send them access</p>
                </li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Security Best Practices
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <p className="font-medium mb-2">Password Guidelines</p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Use strong, unique passwords for each admin</li>
                    <li>Include letters, numbers, and special characters</li>
                    <li>Make passwords at least 8 characters long</li>
                    <li>Encourage users to change the temporary password</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">Access Control</p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Only give admin access to trusted committee members</li>
                    <li>Start new users with "Editor" role when possible</li>
                    <li>Regularly review who has admin access</li>
                    <li>Remove access when members leave the committee</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Onboarding New Admins</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>After creating a new admin account:</p>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Share their login credentials securely (not via email)</li>
                <li>Direct them to this documentation at /docs</li>
                <li>Walk them through creating their first post</li>
                <li>Show them how to access the admin dashboard</li>
                <li>Encourage them to change their password on first login</li>
              </ol>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <p className="text-green-800 text-sm"><strong>Tip:</strong> Consider setting up a brief training session for new admins to ensure they're comfortable with the system.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-yellow-50 border-yellow-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-yellow-900">
                <AlertTriangle className="w-5 h-5" />
                Important Security Notes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-yellow-800">
                <p><strong>Never share admin credentials publicly or via unsecured channels.</strong></p>
                <p><strong>Regularly audit your admin user list</strong> - remove access for members who are no longer active.</p>
                <p><strong>If you suspect a security issue,</strong> contact your technical administrator immediately.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Access</CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <a href="/admin" target="_blank">
                  <Users className="w-4 h-4 mr-2" />
                  Go to Admin Dashboard
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-between">
          <Button variant="outline" asChild>
            <a href="/docs/publishing">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous: Publishing & Managing
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="/docs">
              Back to Documentation Index
              <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DocsUserManagement;
