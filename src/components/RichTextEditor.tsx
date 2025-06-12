
import React, { useRef, useCallback, useMemo } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Label } from '@/components/ui/label';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({
  value,
  onChange,
  placeholder = "Write your content here...",
  label = "Content"
}) => {
  const quillRef = useRef<ReactQuill>(null);

  // Debounced onChange to prevent rapid re-renders
  const debouncedOnChange = useCallback(
    (content: string) => {
      // Use a small delay to prevent rapid state updates
      const timeoutId = setTimeout(() => {
        onChange(content);
      }, 100);
      
      return () => clearTimeout(timeoutId);
    },
    [onChange]
  );

  // Image upload handler
  const handleImageUpload = useCallback(async () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast.error('Image must be smaller than 5MB');
        return;
      }

      // Validate file type
      if (!file.type.startsWith('image/')) {
        toast.error('Please select an image file');
        return;
      }

      try {
        // Generate unique filename
        const fileExt = file.name.split('.').pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
        const filePath = `blog-content/${fileName}`;

        // Upload to Supabase storage
        const { data, error } = await supabase.storage
          .from('blog-images')
          .upload(filePath, file);

        if (error) throw error;

        // Get public URL
        const { data: { publicUrl } } = supabase.storage
          .from('blog-images')
          .getPublicUrl(filePath);

        // Insert image into editor
        const quill = quillRef.current?.getEditor();
        if (quill) {
          const range = quill.getSelection(true);
          if (range) {
            quill.insertEmbed(range.index, 'image', publicUrl);
            quill.setSelection(range.index + 1, 0);
          }
        }

        toast.success('Image uploaded successfully');
      } catch (error) {
        console.error('Error uploading image:', error);
        toast.error('Failed to upload image');
      }
    };
  }, []);

  // Memoize modules to prevent recreation on every render
  const modules = useMemo(() => ({
    toolbar: {
      container: [
        [{ 'header': [1, 2, 3, false] }],
        ['bold', 'italic', 'underline'],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        ['link', 'image'],
        ['clean']
      ],
      handlers: {
        image: handleImageUpload
      }
    },
  }), [handleImageUpload]);

  // Memoize formats to prevent recreation
  const formats = useMemo(() => [
    'header',
    'bold', 'italic', 'underline',
    'list', 'bullet',
    'link', 'image'
  ], []);

  // Stable key to prevent unnecessary remounts
  const editorKey = useMemo(() => `rich-text-editor-${label}`, [label]);

  return (
    <div className="space-y-2">
      <Label htmlFor="content">{label}</Label>
      <div className="min-h-[400px] relative">
        <ReactQuill
          key={editorKey}
          ref={quillRef}
          theme="snow"
          value={value}
          onChange={debouncedOnChange}
          placeholder={placeholder}
          modules={modules}
          formats={formats}
          style={{
            height: '350px',
            marginBottom: '50px'
          }}
          preserveWhitespace={false}
        />
      </div>
    </div>
  );
};

export default RichTextEditor;
