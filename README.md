# Search App

## Introduction

Search App is a mobile application developed using React Native and Expo, allowing users to search for information quickly and easily. The app supports various search features and provides a smooth user experience.

## Getting Started

To start developing and running this application, you need to follow these steps:

### Prerequisites

Before you begin, make sure you have the following tools installed:

- [Node.js](https://nodejs.org/) (version 14 or above)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (install using the command `npm install -g expo-cli`)
- [Firestore Documentation](https://firebase.google.com/docs/firestore)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/mquan048/search-app.git
   cd search-app
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

### Setting Up the .env File

1. **Create the .env file**:

   Create a file named `.env` in the root directory of the project:

   ```bash
   touch .env
   ```

2. **Add environment variables**:

   Open the `.env` file and add the necessary environment variables according to the `.env.example` file:

   ```env
   # Config Firebase Firestore
   EXPO_PUBLIC_API_KEY=
   EXPO_PUBLIC_AUTH_DOMAIN=
   EXPO_PUBLIC_PROJECT_ID=
   EXPO_PUBLIC_STORAGE_BUCKET=
   EXPO_PUBLIC_MESSAGING_SENDER_ID=
   EXPO_PUBLIC_APP_ID=
   EXPO_PUBLIC_MEASUREMENT_ID=
   ```

### Running the Application

To run the application on a device or emulator, use the following command:

```bash
expo start
```

After executing the above command, you will see a QR code appear in the terminal. You can scan this code using the Expo Go app on your phone to view the application.

## Features

- Search for information by keywords
- User-friendly and easy-to-use interface
