# Lara Rifai - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, showcasing professional experience, projects, and skills.

## Features

### 🎨 Visual Design
- Stunning purple/cyan gradient color scheme
- Smooth animations and transitions
- Responsive design for all devices
- Professional UI with glassmorphism effects

### 📱 Sections
1. **Navigation** - Sticky header with smooth scrolling
2. **Hero** - Eye-catching introduction with profile image
3. **Technical Skills** - Categorized frontend, backend, and tools
4. **Soft Skills** - Personal strengths and capabilities
5. **Projects** - Featured work with detailed descriptions
6. **Experience** - Professional timeline with achievements
7. **Education** - Academic credentials and certifications
8. **Contact** - Working contact form with validation
9. **Footer** - Quick links and additional information

### 🚀 Functionality
- **Contact Form**: Fully functional with API integration
- **CV Download**: Backend endpoint serving downloadable CV
- **Smooth Navigation**: Scroll-to-section functionality
- **Scroll to Top**: Convenient button for quick navigation
- **Form Validation**: Client-side validation for contact form
- **Responsive**: Mobile-first design approach

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Hooks
- **API Routes**: Next.js API Routes

## API Endpoints

### POST /api/contact
Handles contact form submissions
```json
{
  "name": "string",
  "email": "string",
  "message": "string"
}
```

### GET /api/download-cv
Returns downloadable CV file

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Future Enhancements
- Supabase integration for contact message storage
- Admin dashboard for content management
- Email notifications for contact form
- Blog section with MDX support
- Analytics and visitor tracking
