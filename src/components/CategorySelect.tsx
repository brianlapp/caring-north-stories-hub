
import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { supabase } from '@/integrations/supabase/client';

interface Category {
  id: string;
  name: string;
}

interface CategorySelectProps {
  categories: Category[];
  selectedCategoryId: string | null;
  onCategoryChange: (categoryId: string) => void;
  onCategoryCreated: (newCategory: Category) => void;
}

export const CategorySelect: React.FC<CategorySelectProps> = ({
  categories,
  selectedCategoryId,
  onCategoryChange,
  onCategoryCreated,
}) => {
  const [isCreating, setIsCreating] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [creating, setCreating] = useState(false);

  const handleCreateCategory = async () => {
    if (!newCategoryName.trim()) return;

    setCreating(true);
    try {
      const slug = newCategoryName
        .toLowerCase()
        .replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();

      const { data, error } = await supabase
        .from('categories')
        .insert([{
          name: newCategoryName.trim(),
          slug: slug,
          description: `Blog posts about ${newCategoryName.toLowerCase()}`
        }])
        .select()
        .single();

      if (error) throw error;

      onCategoryCreated(data);
      onCategoryChange(data.id);
      setNewCategoryName('');
      setIsCreating(false);
    } catch (error) {
      console.error('Error creating category:', error);
    } finally {
      setCreating(false);
    }
  };

  return (
    <div className="space-y-2">
      <Label htmlFor="category">Category</Label>
      <div className="flex space-x-2">
        <Select value={selectedCategoryId || ''} onValueChange={onCategoryChange}>
          <SelectTrigger className="flex-1">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category.id} value={category.id}>
                {category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Dialog open={isCreating} onOpenChange={setIsCreating}>
          <DialogTrigger asChild>
            <Button variant="outline" size="icon">
              <Plus className="w-4 h-4" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Category</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="categoryName">Category Name</Label>
                <Input
                  id="categoryName"
                  value={newCategoryName}
                  onChange={(e) => setNewCategoryName(e.target.value)}
                  placeholder="Enter category name"
                  onKeyPress={(e) => e.key === 'Enter' && handleCreateCategory()}
                />
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setIsCreating(false)}>
                  Cancel
                </Button>
                <Button 
                  onClick={handleCreateCategory}
                  disabled={!newCategoryName.trim() || creating}
                >
                  {creating ? 'Creating...' : 'Create Category'}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
