# USTP IT Officers Management System

A mobile application built with React Native and Expo for managing USTP IT students and officers. Features user authentication, officer directory, and registrant management with USTP branding.

## Features

- **User Authentication**: Secure login and registration system with loading states and error handling
- **Home Dashboard**: Personalized welcome screen with user profile display and editing capabilities
- **Officers Directory**: Complete list of LIT (League of IT Students) officers with real-time search functionality
- **Registrants Management**: View all registered app users with search and sorting options (by name, email, department)
- **USTP Branding**: Official university colors (#003366 blue, #FFD700 gold) and design elements
- **Search & Sort**: Real-time search across all lists and multiple sorting options for registrants
- **Profile Management**: Edit user profile information with validation
- **Logout Confirmation**: Modal confirmation to prevent accidental logout
- **Local Data Storage**: Uses AsyncStorage for persistent data storage
- **Responsive Design**: Optimized for mobile devices with proper navigation

## Tech Stack

- **React Native**: Cross-platform mobile framework
- **Expo SDK 54**: Managed workflow for React Native development
- **React Navigation**: Stack and bottom tab navigation
- **AsyncStorage**: Local data persistence
- **@expo/vector-icons**: Icon library for UI elements
- **JavaScript**: Programming language (ES6+)

## Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Expo CLI
- Expo Go app on your mobile device

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Rhorea-Expo-Go
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npx expo start --tunnel
   ```

4. Scan the QR code with the Expo Go app on your mobile device.

## Usage

1. **Registration**: Create a new account with name, email, password, and department
2. **Login**: Sign in with your registered credentials
3. **Home Tab**: View welcome message and edit your profile information
4. **Officers Tab**: Browse the complete LIT officers directory with search functionality
5. **Registrants Tab**: View all registered users with search and sorting options
6. **Logout**: Use the logout icon in the header with confirmation modal

## Project Structure

```
├── App.js                    # Main app entry point
├── app.json                  # Expo configuration
├── assets/                   # Static assets (images, icons)
├── context/
│   └── AuthContext.js        # Authentication state management
├── navigation/
│   ├── AppNavigator.js       # Stack navigation for auth screens
│   └── TabNavigator.js       # Bottom tab navigation with header
├── screens/
│   ├── Home.js               # Welcome screen with profile editing
│   ├── Login.js              # Authentication screen
│   ├── Register.js           # User registration screen
│   ├── Officers.js           # LIT officers directory
│   └── Registrants.js        # Registered users management
├── utils/
│   └── storage.js            # AsyncStorage utility functions
└── constants/
    └── colors.js             # USTP branding colors
```

## LIT Officers Directory

The Officers tab displays the current LIT (League of IT Students) officers:

1. **James Francis Barlisan** - LIT President
2. **Patries Parejo** - LIT Internal Vice President
3. **Mherafe Cabug** - LIT General Secretary
4. **Zela Sutina** - LIT Associate Secretary
5. **Danica Servas** - LIT General Treasurer
6. **Sunshine Salvanera** - LIT Associate Treasurer
7. **Jerico Maghanoy** - LIT Auditor
8. **Denniell Jan Salomson** - LIT Internal P.I.O
9. **Jastine May Baguloy** - LIT External P.I.O

## Color Scheme

- **Primary**: #003366 (USTP Blue)
- **Secondary**: #FFD700 (USTP Gold)
- **Background**: #f5f5f5
- **Text**: #333333

## Navigation

- **Stack Navigation**: Handles authentication flow (Login/Register → Main App)
- **Bottom Tabs**: Home, Officers, Registrants with custom icons
- **Header**: App title and logout functionality with confirmation modal

## Data Management

- **AsyncStorage**: Local storage for user data and authentication state
- **User Profiles**: Name, email, password, department
- **Search**: Real-time filtering across officer names and user data
- **Sorting**: Multiple sort options for registrants (name, email, department)

## Documentation

- **[CLIENT_DEMO.md](CLIENT_DEMO.md)** - Comprehensive client demonstration guide with detailed features, technical architecture, and user workflows
- **[FILE_STRUCTURE.md](FILE_STRUCTURE.md)** - Detailed walkthrough of project structure, file purposes, and codebase organization

## License

This project is developed for educational purposes at USTP.

## Future Enhancements

- Push notifications for updates
- Offline data synchronization
- User roles and permissions
- Advanced search filters
- Profile pictures upload
- Dark mode support