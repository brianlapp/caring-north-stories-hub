
# Compassionate North Grenville Website - Content & CMS Implementation

## Project Overview

### Problem Statement
The current Compassionate North Grenville website contains inaccurate content that misrepresents the organization and lacks a content management system for committee self-management. Critical issues include:
- Fictional content and service provider positioning conflicts with actual facilitator role
- Hospice references that must be removed to maintain organizational separation
- Hardcoded blog content prevents committee from self-managing content
- Missing official Mission, Values, and Aspirations content

### Project Goals
1. **Content Accuracy**: Update all site content to accurately reflect CNG's role as community facilitator
2. **Self-Management**: Implement blog CMS enabling committee to independently manage content
3. **Organizational Clarity**: Remove all hospice references and service provider language
4. **Community Focus**: Emphasize storytelling and connection facilitation

### Stakeholders
- **Primary**: CNG Committee Members (content managers)
- **Secondary**: North Grenville Community Members (content consumers)
- **Technical**: Development team implementing changes

## Functional Requirements

### Phase 1: Content Updates & Corrections (HIGH PRIORITY)

#### FR-1.1: About Page Overhaul
- **Requirement**: Extract and implement official Mission, Values, Aspirations from CNG.docx.pdf
- **User Story**: As a visitor, I want to read accurate information about CNG's mission and values
- **Acceptance Criteria**:
  - Remove entire "What We Do" section
  - Remove "How We Can Help" section
  - Implement exact Mission, Values, Aspirations from provided document
  - Add community grants logo
  - Zero hospice references remain

#### FR-1.2: Events Page Restructure
- **Requirement**: Replace fictional future events with actual past events
- **User Story**: As a visitor, I want to learn about CNG's actual community initiatives
- **Acceptance Criteria**:
  - Add past events: Advance Care Planning day, Youngsters of Yore presentation, Storytelling meeting
  - Remove all future/recurring event language
  - Clarify that events are organized as needed, not regularly scheduled
  - No fictional content remains

#### FR-1.3: Homepage Content Audit
- **Requirement**: Remove service provider language throughout site
- **User Story**: As a visitor, I want to understand CNG facilitates rather than provides services
- **Acceptance Criteria**:
  - Replace service provider language with facilitator positioning
  - Emphasize community connection and storytelling
  - Remove all hospice references
  - Maintain existing design and functionality

### Phase 2: Blog CMS System (COMMITTEE #1 REQUEST)

#### FR-2.1: Admin Authentication
- **Requirement**: Secure login system for committee members
- **User Story**: As a committee member, I need secure access to manage blog content
- **Acceptance Criteria**:
  - Email/password authentication
  - Role-based access control
  - Protected admin routes
  - Session management

#### FR-2.2: Blog Post Management
- **Requirement**: Full CRUD operations for blog posts
- **User Story**: As a committee member, I want to create, edit, and publish blog posts independently
- **Acceptance Criteria**:
  - Rich text editor with formatting options
  - Draft/publish workflow
  - Image upload and management
  - Author assignment
  - Category organization
  - SEO-friendly URLs

#### FR-2.3: Media Management
- **Requirement**: File upload and organization system
- **User Story**: As a committee member, I need to upload and organize images for blog posts
- **Acceptance Criteria**:
  - Drag-and-drop image upload
  - Image resizing and optimization
  - Media library interface
  - File organization capabilities

## Technical Specifications

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Routing**: React Router DOM v6
- **State Management**: React hooks + React Query for server state

### Backend Requirements
- **Platform**: Supabase integration required
- **Database**: PostgreSQL via Supabase
- **Authentication**: Supabase Auth with email/password
- **Storage**: Supabase Storage for media files
- **Real-time**: Supabase real-time subscriptions for content updates

### Database Schema

#### Tables Required
```sql
-- Blog posts
posts (
  id: uuid primary key,
  title: text not null,
  content: text not null,
  excerpt: text,
  status: enum ('draft', 'published'),
  author_id: uuid references authors(id),
  category_id: uuid references categories(id),
  featured_image: text,
  slug: text unique,
  created_at: timestamp,
  updated_at: timestamp,
  published_at: timestamp
)

-- Authors (committee members)
authors (
  id: uuid primary key,
  name: text not null,
  email: text unique,
  bio: text,
  avatar: text,
  created_at: timestamp
)

-- Categories
categories (
  id: uuid primary key,
  name: text unique not null,
  description: text,
  slug: text unique
)

-- Media files
media (
  id: uuid primary key,
  filename: text not null,
  original_name: text,
  file_path: text not null,
  file_size: integer,
  mime_type: text,
  uploaded_by: uuid references authors(id),
  created_at: timestamp
)
```

### API Endpoints
- **GET /api/posts** - Fetch published posts
- **GET /api/posts/:slug** - Fetch single post
- **POST /api/posts** - Create new post (auth required)
- **PUT /api/posts/:id** - Update post (auth required)
- **DELETE /api/posts/:id** - Delete post (auth required)
- **POST /api/media** - Upload media (auth required)

## Implementation Strategy

### Phase 1: Content Corrections (Immediate)
1. **Content Extraction** (1-2 days)
   - Parse CNG.docx.pdf document
   - Extract Mission, Values, Aspirations text
   - Identify all hospice references for removal

2. **About Page Update** (1 day)
   - Remove prohibited sections
   - Implement new content structure
   - Add community grants logo
   - Test content accuracy

3. **Events Page Restructure** (1 day)
   - Replace fictional events with past events
   - Update messaging and positioning
   - Remove future event language

4. **Site-wide Content Audit** (1 day)
   - Remove service provider language
   - Eliminate hospice references
   - Update positioning throughout site

### Phase 2: CMS Implementation (5-7 days)
1. **Supabase Setup** (1 day)
   - Configure Supabase project
   - Set up authentication
   - Create database schema
   - Configure storage buckets

2. **Admin Authentication** (1-2 days)
   - Implement login/logout functionality
   - Protected route system
   - Role-based access control

3. **Blog Management Interface** (2-3 days)
   - Rich text editor integration
   - Post creation/editing forms
   - Media upload system
   - Draft/publish workflow

4. **Frontend Integration** (1-2 days)
   - Dynamic blog post display
   - Category filtering
   - SEO optimization
   - Performance optimization

### Dependencies & Blockers
- **Critical**: Access to CNG.docx.pdf content for accurate extraction
- **Blocker**: Supabase integration must be activated before Phase 2
- **Dependency**: Client review and approval after Phase 1 completion
- **Risk**: Committee training requirements for CMS usage

## Testing Strategy

### Content Accuracy Testing
- Verify all hospice references removed
- Confirm service provider language eliminated
- Validate Mission/Values/Aspirations accuracy
- Test past events information correctness

### CMS Functionality Testing
- Authentication flow testing
- Blog post CRUD operations
- Media upload and management
- Multi-user access testing
- Mobile responsiveness validation

### Performance Testing
- Page load speed optimization
- Image optimization validation
- Database query performance
- Mobile device compatibility

## Acceptance Criteria

### Phase 1 Completion Criteria
- [ ] All hospice references removed from entire site
- [ ] "What We Do" and "How We Can Help" sections completely removed
- [ ] Official Mission, Values, Aspirations implemented exactly as provided
- [ ] Community grants logo added to appropriate location
- [ ] Past events accurately represented (no fictional content)
- [ ] Service provider language replaced with facilitator positioning
- [ ] Client review and approval obtained

### Phase 2 Completion Criteria
- [ ] Committee members can login securely
- [ ] Blog posts can be created, edited, and published independently
- [ ] Rich text editor with full formatting capabilities
- [ ] Image upload and management system functional
- [ ] Draft/publish workflow operational
- [ ] Multiple committee members can manage content simultaneously
- [ ] Mobile-responsive admin interface
- [ ] Training documentation provided to committee

### Success Metrics
- **Content Accuracy**: Zero client corrections needed after Phase 1 review
- **Self-Management**: Committee can publish blog post within 5 minutes of training
- **Performance**: All pages load under 3 seconds on mobile
- **Usability**: Admin interface requires minimal training for non-technical users

## Risk Mitigation

### High Risk Items
1. **Content Extraction Accuracy**
   - Mitigation: Direct client review before implementation
   - Backup: Multiple review cycles with committee

2. **CMS Complexity**
   - Mitigation: Phased implementation with testing
   - Backup: Simplified interface if usability issues arise

3. **Technical Integration**
   - Mitigation: Supabase integration testing before full implementation
   - Backup: Alternative CMS solutions if integration fails

## Timeline

### Phase 1: 4-5 days
- Day 1-2: Content extraction and validation
- Day 3: About page implementation
- Day 4: Events page restructure
- Day 5: Site-wide content audit and client review

### Phase 2: 5-7 days
- Day 1: Supabase setup and configuration
- Day 2-3: Authentication and admin infrastructure
- Day 4-6: CMS interface development
- Day 7: Testing, training documentation, and handover

### Total Estimated Timeline: 9-12 days

## Post-Implementation Support
- Committee training session for CMS usage
- Documentation for ongoing content management
- 30-day support period for technical issues
- Maintenance guidelines for future updates

---

**Document Version**: 1.0  
**Last Updated**: 2025-06-11  
**Next Review**: After Phase 1 completion  
**Approved By**: Pending client review
