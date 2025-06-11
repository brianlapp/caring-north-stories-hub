
# System Architecture & Design Patterns

## Technical Architecture
- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with shadcn/ui components
- **Routing**: React Router DOM v6
- **State Management**: React hooks (useState, useEffect)
- **Future Backend**: Supabase (for blog CMS)

## Design Patterns

### Component Structure
- **Page Components**: Full-page layouts (`src/pages/`)
- **UI Components**: Reusable interface elements (`src/components/ui/`)
- **Feature Components**: Business logic components (`src/components/`)
- **Utility Functions**: Helper functions (`src/lib/`)

### Content Management Pattern
- **Current**: Hardcoded content in components
- **Future**: Dynamic content from Supabase CMS
- **Transition**: Gradual migration from static to dynamic

### Styling Approach
- **Utility-first**: Tailwind CSS classes
- **Component-based**: shadcn/ui for complex components
- **Responsive**: Mobile-first design approach
- **Animations**: Custom CSS animations for engagement

## File Organization
```
src/
├── components/
│   ├── ui/          # shadcn/ui components
│   ├── HeroSection.tsx
│   ├── Navigation.tsx
│   └── Footer.tsx
├── pages/           # Route components
├── lib/             # Utilities
└── hooks/           # Custom React hooks
```

## Data Flow Patterns
- **Static Content**: Direct imports and hardcoded data
- **Future Dynamic Content**: Supabase → React Query → Components
- **Form Handling**: React Hook Form with Zod validation
- **Error Handling**: React error boundaries

## Security Considerations
- **Admin Access**: Authentication-protected routes
- **Content Management**: Role-based permissions
- **Data Validation**: Input sanitization and validation
- **Image Uploads**: Secure file handling

## Performance Patterns
- **Code Splitting**: Route-based splitting
- **Image Optimization**: Responsive images
- **Caching**: React Query for API caching
- **Bundle Optimization**: Vite build optimization
