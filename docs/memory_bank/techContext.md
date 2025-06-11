
# Technical Context

## Technology Stack

### Frontend Framework
- **React 18.3.1** - Component-based UI library
- **TypeScript** - Type safety and developer experience
- **Vite** - Fast build tool and development server

### UI & Styling
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React component library
- **Lucide React** - Icon library
- **Custom animations** - CSS animations for engagement

### Routing & Navigation
- **React Router DOM v6.26.2** - Client-side routing
- **Link components** - Navigation between pages

### Form Handling
- **React Hook Form 7.53.0** - Form state management
- **Zod 3.23.8** - Schema validation
- **@hookform/resolvers** - Form validation integration

### Data Fetching (Future)
- **@tanstack/react-query 5.56.2** - Server state management
- **Supabase** - Backend as a service (not yet integrated)

### Development Tools
- **ESLint** - Code linting
- **TypeScript** - Type checking
- **Vite** - Development server and build tool

## Development Setup
```bash
npm install        # Install dependencies
npm run dev       # Start development server
npm run build     # Build for production
```

## Deployment
- **Current**: Lovable hosting
- **Custom Domain**: Netlify (configured with _redirects)
- **Build**: Static site generation

## Current Limitations
- **No Backend**: All content is hardcoded
- **No CMS**: Cannot dynamically manage blog content
- **No Authentication**: No admin access control
- **No Database**: No persistent data storage

## Future Technical Requirements
- **Supabase Integration**: Backend services
- **Authentication**: Admin user management
- **Database**: Blog posts, authors, media storage
- **File Upload**: Image management for blog posts
- **Rich Text Editor**: WYSIWYG content creation

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Progressive enhancement approach

## Performance Considerations
- **Bundle Size**: Optimized with Vite
- **Image Loading**: Lazy loading implemented
- **Code Splitting**: Route-based splitting
- **Caching**: Static asset caching

## Security Notes
- **No sensitive data** currently stored
- **Future**: Authentication and authorization required
- **Input validation** for future forms
- **XSS prevention** for user-generated content
