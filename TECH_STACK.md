# SmartLab - Technology Stack

## Core Framework & Language
- **Next.js**: 15.5.9 (App Router with TypeScript support)
- **React**: 19.2.3 (Latest with concurrent features)
- **React DOM**: 19.2.3
- **TypeScript**: 5.8.2 (Full type safety across the application)
- **Node.js**: 22.x (Recommended)

## Styling & UI
- **Tailwind CSS**: 4.x (Latest version with @tailwindcss/postcss)
- **PostCSS**: 8.4.x (CSS processing)
- **Lucide React**: 0.562.0 (Icon library)

## Data Visualization
- **Recharts**: 3.6.0 (Charts and graphs)
- **React-is**: 18.2.0 (Recharts peer dependency)

## Build Tools
- **Vite**: 5.1.x (Build tool)
- **npm**: Latest (Package manager with --legacy-peer-deps flag)

## Development Tools
- **ESLint**: Latest (Code linting)
- **TypeScript Compiler**: 5.8.2

## State Management
- **React Context API**: Built-in (Authentication state management)
- **localStorage**: Browser API (Session persistence)

## Key Features Implemented
✅ Authentication system with Context API
✅ Role-based access control (MASTER, CONFIGURATOR, USER)
✅ Lab management with CRUD operations
✅ User management and permissions
✅ Scheduling and booking system
✅ Holiday/off-day management
✅ User group management
✅ Responsive design (Mobile, Tablet, Desktop)
✅ Dark mode sidebar with light content area

## Important Notes
- **No Backend Yet**: Currently uses localStorage for data persistence
- **Demo Mode**: Login page displays on every app refresh
- **Mock Data**: Initialized in AuthContext and persists during session
- **Development**: Run `npm run dev` to start development server on http://localhost:3000
- **Production Build**: Run `npm run build` and `npm start` for production

## Project Structure
```
app/
  - page.tsx (Root auth redirect)
  - layout.tsx (Root layout with AuthProvider)
  - AuthContext.tsx (Global auth state management)
  - (app)/ (Protected app routes)
    - dashboard/page.tsx
    - labs/page.tsx
    - scheduling/page.tsx
    - users/page.tsx
    - groups/page.tsx
    - off-days/page.tsx
  - (auth)/ (Public auth routes)
    - login/page.tsx
    - signup/page.tsx
    - forgot-password/page.tsx
    - language/page.tsx

components/
  - Layout.tsx (Sidebar + header with navigation)

pages/
  - Dashboard.tsx
  - LabManagement.tsx
  - Scheduling.tsx
  - UserManagement.tsx
  - OffDays.tsx
  - GroupManagement.tsx
  - Login.tsx
  - Signup.tsx
  - ForgotPassword.tsx
  - LanguageSelection.tsx
```

## Next Steps for Backend Integration
When adding a backend, replace localStorage calls with API requests while keeping component structure intact.
