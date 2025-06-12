
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CategorySelect } from '@/components/CategorySelect';
import { ImageUpload } from '@/components/ImageUpload';
import RichTextEditor from '@/components/RichTextEditor';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { ArrowLeft, Save, Eye } from 'lucide-react';

interface PostData {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  published: boolean;
  category_id: string | null;
  featured_image: string | null;
}

interface Category {
  id: string;
  name: string;
}

const PostEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const isEditing = !!id && id !== 'new';

  const [post, setPost] = useState<PostData>({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    published: false,
    category_id: null,
    featured_image: null,
  });
  
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCategories();
    if (isEditing) {
      fetchPost();
    }
  }, [id, isEditing]);

  const fetchCategories = async () => {
    try {
      const { data, error } = await supabase
        .from('categories')
        .select('id, name')
        .order('name');

      if (error) throw error;
      setCategories(data || []);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchPost = async () => {
    if (!id || id === 'new') return;
    
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      setPost(data);
    } catch (error) {
      console.error('Error fetching post:', error);
      setError('Failed to load post');
    } finally {
      setLoading(false);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleTitleChange = (title: string) => {
    setPost(prev => ({
      ...prev,
      title,
      slug: generateSlug(title),
    }));
  };

  const handleCategoryChange = (categoryId: string) => {
    setPost(prev => ({
      ...prev,
      category_id: categoryId,
    }));
  };

  const handleCategoryCreated = (newCategory: Category) => {
    setCategories(prev => [...prev, newCategory].sort((a, b) => a.name.localeCompare(b.name)));
  };

  const handleImageChange = (imageUrl: string | null) => {
    setPost(prev => ({
      ...prev,
      featured_image: imageUrl,
    }));
  };

  const handleContentChange = (content: string) => {
    setPost(prev => ({
      ...prev,
      content,
    }));
  };

  const handleSave = async (publish: boolean = false) => {
    setSaving(true);
    setError('');

    try {
      const postData = {
        ...post,
        published: publish,
        published_at: publish ? new Date().toISOString() : null,
      };

      if (isEditing) {
        const { error } = await supabase
          .from('blog_posts')
          .update(postData)
          .eq('id', id);

        if (error) throw error;
        toast.success(publish ? 'Post published successfully!' : 'Draft saved successfully!');
      } else {
        const { error } = await supabase
          .from('blog_posts')
          .insert([postData]);

        if (error) throw error;
        toast.success(publish ? 'Post published successfully!' : 'Draft saved successfully!');
      }

      navigate('/admin');
    } catch (error: any) {
      setError(error.message || 'Failed to save post');
      toast.error('Failed to save post');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading post...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Button variant="ghost" onClick={() => navigate('/admin')} className="mr-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
              <h1 className="text-xl font-heading font-bold">
                {isEditing ? 'Edit Post' : 'New Post'}
              </h1>
            </div>
            <div className="flex items-center space-x-2">
              <Button 
                variant="outline" 
                onClick={() => handleSave(false)}
                disabled={saving}
              >
                <Save className="w-4 h-4 mr-2" />
                Save Draft
              </Button>
              <Button 
                onClick={() => handleSave(true)}
                disabled={saving}
              >
                <Eye className="w-4 h-4 mr-2" />
                Publish
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <Card>
          <CardHeader>
            <CardTitle>Post Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={post.title}
                onChange={(e) => handleTitleChange(e.target.value)}
                placeholder="Enter post title"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="slug">URL Slug</Label>
              <Input
                id="slug"
                value={post.slug}
                onChange={(e) => setPost(prev => ({ ...prev, slug: e.target.value }))}
                placeholder="url-slug"
                required
              />
            </div>

            <CategorySelect
              categories={categories}
              selectedCategoryId={post.category_id}
              onCategoryChange={handleCategoryChange}
              onCategoryCreated={handleCategoryCreated}
            />

            <ImageUpload
              value={post.featured_image}
              onChange={handleImageChange}
            />

            <div className="space-y-2">
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea
                id="excerpt"
                value={post.excerpt}
                onChange={(e) => setPost(prev => ({ ...prev, excerpt: e.target.value }))}
                placeholder="Brief description of the post"
                rows={3}
              />
            </div>

            <RichTextEditor
              value={post.content}
              onChange={handleContentChange}
              placeholder="Write your post content here..."
            />

            <div className="flex items-center space-x-2">
              <Switch
                id="published"
                checked={post.published}
                onCheckedChange={(checked) => setPost(prev => ({ ...prev, published: checked }))}
              />
              <Label htmlFor="published">Publish immediately</Label>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PostEditor;
