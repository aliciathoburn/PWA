# PWA Clock In App

## Overview
The PWA Clock In App is a Progressive Web Application that allows users to clock in and clock out of work shifts. It records the date and time of each action, captures the user's location, and provides offline data storage with automatic syncing capabilities.

## Features
- **Clock In and Clock Out**: Users can easily clock in and out of their shifts with dedicated buttons.
- **Location Tracking**: The app captures the user's geographical location when they clock in or out.
- **Offline Support**: The app can function offline, storing data locally until a connection is available for syncing.
- **Automatic Syncing**: Data is automatically synchronized when the user comes back online.
- **Simple UI**: A user-friendly interface with clear buttons for clocking in and out.

## Project Structure
```
pwa-clock-in-app
├── public
│   ├── index.html
│   ├── manifest.json
│   └── service-worker.js
├── src
│   ├── app.js
│   ├── components
│   │   ├── ClockInButton.js
│   │   ├── ClockOutButton.js
│   │   └── StatusDisplay.js
│   ├── utils
│   │   ├── geolocation.js
│   │   └── storage.js
│   └── styles
│       └── main.css
├── package.json
├── webpack.config.js
└── README.md
```

## Setup Instructions
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies using npm:
   ```
   npm install
   ```
4. Build the project using Webpack:
   ```
   npm run build
   ```
5. Start the development server:
   ```
   npm start
   ```

## Usage
- Open the app in your browser.
- Click the "Clock In" button to record your start time and location.
- Click the "Clock Out" button to record your end time and location.
- Your clock in and clock out records will be displayed on the screen.

## License
This project is licensed under the MIT License.