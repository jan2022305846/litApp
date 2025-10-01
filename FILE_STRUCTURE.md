# USTP IT Officers App - File Structure Walkthrough

This document provides a comprehensive overview of the project structure, explaining the purpose and contents of each file and folder in the USTP IT Officers Management System.

## 📁 Root Directory Files

### Configuration Files
- **package.json** - Node.js project configuration containing:
  - Project metadata (name: "rhorea-expo-go", version: "1.0.0")
  - Scripts for running the app (`start`, `android`, `ios`, `web`)
  - Dependencies: React Native, Expo SDK 54, React Navigation, AsyncStorage
  - Development dependencies and project settings

- **package-lock.json** - Locks exact dependency versions for consistent installs across environments

- **app.json** - Expo project configuration:
  - App name, version, and orientation settings
  - Icon and splash screen configurations
  - Build settings for iOS and Android
  - Expo SDK version specification

- **index.js** - Application entry point that registers the root App component with React Native

### Core Application Files
- **App.js** - Main application component that:
  - Wraps the entire app with AuthProvider for state management
  - Sets up NavigationContainer for routing
  - Configures StatusBar appearance
  - Serves as the root component registered in index.js

### Documentation
- **README.md** - Project documentation including:
  - Project overview and features
  - Installation and setup instructions
  - Usage guide and API documentation
  - Contributing guidelines and license information

- **CLIENT_DEMO.md** - Comprehensive client demonstration guide with:
  - Detailed feature explanations
  - Technical architecture overview
  - User workflows and screenshots descriptions
  - Future enhancement roadmap

### Version Control
- **.git/** - Git repository directory containing:
  - Commit history and version control data
  - Branch information and remote repository links
  - Git configuration and hooks

- **.gitignore** - Specifies files/folders to exclude from version control:
  - node_modules/, build artifacts, OS-specific files
  - Expo development files and cache directories

## 📁 assets/ - Static Assets Directory

Contains all static resources used in the application:

### Root Assets
- **icon.png** - Main app icon displayed on device home screen
- **adaptive-icon.png** - Adaptive icon for different Android launchers
- **favicon.png** - Web favicon for browser-based development
- **splash-icon.png** - Icon displayed during app splash screen

### 📁 assets/logo/ - Logo Assets
- **lit_logo.jpg** - League of IT Students logo displayed in the app header and home screen
- **ustp_logo.png** - University of Science and Technology of Southern Philippines logo

## 📁 auth/ - Authentication Directory

**Status**: Currently empty
**Purpose**: Reserved for future authentication-related utilities or components
**Note**: Authentication logic is currently handled in the context/AuthContext.js file

## 📁 constants/ - Application Constants

### constants/colors.js
Defines the USTP branding color scheme used throughout the application:
```javascript
export const COLORS = {
  primary: '#003366',    // USTP Blue
  secondary: '#FFD700',  // USTP Gold
  background: '#f5f5f5', // Light background
  text: '#333333',       // Dark text
  // ... other color definitions
};
```
**Purpose**: Centralizes color definitions for consistent branding and easy theme updates

## 📁 context/ - React Context Directory

### context/AuthContext.js
Implements React Context API for global state management:
- **AuthProvider**: Wraps the app to provide authentication state
- **useAuth Hook**: Custom hook for accessing auth functions
- **Authentication Functions**:
  - `login(user)`: Sets current user and persists to storage
  - `logout()`: Clears user session and storage
  - `checkLoginStatus()`: Validates existing sessions on app start
- **State Management**: Tracks currentUser, loading states, and authentication status

**Purpose**: Manages user authentication state across the entire application without prop drilling

## 📁 navigation/ - Navigation Configuration

### navigation/AppNavigator.js
Implements stack navigation for authentication flow:
- **Navigation Logic**: Conditionally renders Login/Register or Main app based on auth status
- **Screen Definitions**: Login, Register, and Main (TabNavigator) screens
- **Header Configuration**: Hides headers for auth screens for cleaner UI

### navigation/TabNavigator.js
Configures bottom tab navigation for the main app:
- **Tab Screens**: Home, Officers, Registrants
- **Tab Icons**: Ionicons for home, people, and list
- **Header Configuration**:
  - USTP branding colors and styling
  - App title: "USTP IT Officers App"
  - Left: School icon, Right: Logout button with confirmation modal
- **Navigation Options**: Active/inactive tab colors using USTP theme

## 📁 screens/ - User Interface Screens

### Authentication Screens
- **screens/Login.js** - User login interface:
  - Email/password input fields
  - Login button with loading state
  - Navigation to registration screen
  - LIT logo display and USTP styling

- **screens/Register.js** - User registration interface:
  - Name, email, password, department inputs
  - Registration button with loading state
  - Form validation and error handling
  - Automatic login after successful registration

### Main Application Screens
- **screens/Home.js** - Welcome dashboard:
  - Personalized welcome message with user name
  - LIT logo display
  - Profile viewing and editing functionality
  - Edit mode toggle with save/cancel options

- **screens/Officers.js** - LIT officers directory:
  - Complete list of 9 LIT officers with positions
  - Real-time search functionality
  - Professional card-based layout
  - Officer details: name and position

- **screens/Registrants.js** - App users management:
  - List of all registered users
  - Search by name, email, or department
  - Sort options: name, email, department (asc/desc)
  - User cards with profile information

### 📁 screens/tabs/ - Tab Components Directory
**Status**: Currently empty
**Purpose**: Reserved for future tab-specific components or utilities
**Note**: Tab navigation is currently handled by navigation/TabNavigator.js

## 📁 utils/ - Utility Functions

### utils/storage.js
AsyncStorage utility functions for data persistence:
- **User Management**:
  - `saveUsers(users)`: Persist user array to device storage
  - `loadUsers()`: Retrieve users from storage with error handling
- **Current User Session**:
  - `saveCurrentUser(user)`: Store active user session
  - `loadCurrentUser()`: Retrieve current user data
  - `clearCurrentUser()`: Remove user session on logout

**Purpose**: Abstracts AsyncStorage operations with consistent error handling and data serialization

## 📁 .expo/ - Expo Development Directory

Contains Expo CLI development files and cache:
- Build artifacts and development cache
- Device connection information
- Development server configurations
- Automatically generated by Expo CLI

## 📁 node_modules/ - Dependencies Directory

Contains all npm packages and their dependencies:
- React Native framework files
- Expo SDK modules
- React Navigation libraries
- AsyncStorage and other utilities
- Third-party packages specified in package.json

**Note**: This directory is excluded from version control via .gitignore

## 🔄 Data Flow Architecture

### Authentication Flow
1. **App Start**: AuthContext checks for existing session via `checkLoginStatus()`
2. **Login/Register**: User credentials validated against stored users
3. **Session Management**: Current user stored in context and AsyncStorage
4. **Logout**: Session cleared and user redirected to login

### Navigation Flow
1. **Root Level**: AppNavigator determines auth vs main screens
2. **Main App**: TabNavigator provides bottom tab navigation
3. **Screen Transitions**: React Navigation handles all routing logic

### Data Persistence
1. **User Registration**: New users saved to AsyncStorage via storage.js
2. **Profile Updates**: User data modified and persisted immediately
3. **Session State**: Current user maintained across app restarts

## 📊 File Dependencies Map

```
App.js
├── context/AuthContext.js
├── navigation/AppNavigator.js
│   ├── screens/Login.js
│   ├── screens/Register.js
│   └── navigation/TabNavigator.js
│       ├── screens/Home.js
│       ├── screens/Officers.js
│       └── screens/Registrants.js
├── utils/storage.js
└── constants/colors.js
```

## 🚀 Development Workflow

### Adding New Features
1. **Screens**: Add new component files to `screens/` directory
2. **Navigation**: Update `TabNavigator.js` or `AppNavigator.js` for new routes
3. **State**: Extend `AuthContext.js` for new global state needs
4. **Styling**: Use colors from `constants/colors.js` for consistency
5. **Data**: Add utility functions to `utils/storage.js` for persistence

### Code Organization Principles
- **Separation of Concerns**: Navigation, UI, business logic, and data layers separated
- **Reusable Components**: Common functionality abstracted to utilities and context
- **Consistent Styling**: Centralized color scheme and responsive design patterns
- **Error Handling**: Comprehensive error boundaries and user feedback
- **Performance**: Optimized rendering and efficient data operations

This file structure provides a scalable, maintainable foundation for the USTP IT Officers Management System with clear separation of concerns and modular architecture.