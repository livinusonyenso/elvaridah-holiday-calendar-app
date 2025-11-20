# Calendar Authentication App

A React + TypeScript application featuring user authentication and Google Calendar integration with Nigeria public holidays display.

## Features

- **Authentication System**
  - User login with email and password validation
  - User registration with form validation
  - Protected routes with authentication guard
  - Persistent session using localStorage

- **Dashboard**
  - Google Calendar integration (embedded iframe)
  - Display of Nigeria public holidays for the current year
  - Month navigation (Previous/Next)
  - Holiday highlights for the current month

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Vitest** - Testing framework

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd calendar_auth_app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
yarn build
```

The production build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── auth-guard.tsx  # Route protection component
│   ├── calendar.tsx    # Calendar wrapper
│   ├── google-calendar.tsx  # Google Calendar integration
│   ├── login-form.tsx  # Login form component
│   └── register-form.tsx    # Registration form component
├── constants/          # Static data
│   └── holidays.ts     # Nigeria public holidays data
├── context/            # React context providers
│   └── auth-context.tsx  # Authentication context
├── pages/              # Page components
│   ├── dashboard-page.tsx
│   ├── login-page.tsx
│   └── register-page.tsx
├── utils/              # Utility functions
│   └── validators.ts   # Form validation functions
└── tests/              # Test files
```

## Authentication

The app uses a client-side authentication system with localStorage for session persistence. Users can:

- Register with email, password, and full name
- Login with email and password
- Access protected dashboard after authentication
- Logout to clear session

## Calendar Features

- Embedded Google Calendar showing Nigeria holidays
- Display of all Nigeria public holidays for the current year
- Current month holiday highlights
- Month navigation controls

## Testing

Run tests with:
```bash
npm test
# or
yarn test
```

## License

This project is created for submission purposes.
