# PWA Clock In App

This project is a Progressive Web App (PWA) that allows users to clock in by saving their time and location to a database. It utilizes modern web technologies to provide a seamless user experience.

## Features

- User-friendly interface for clocking in
- Captures current time and location
- Offline capabilities through service worker
- Responsive design for various devices

## Project Structure

```
pwa-clock-in-app
├── public
│   ├── index.html          # Main HTML document
│   ├── manifest.json       # PWA metadata
│   └── service-worker.js    # Service worker for offline support
├── src
│   ├── components
│   │   ├── ClockInForm.tsx  # Form for clocking in
│   │   └── LocationTracker.tsx # Retrieves user location
│   ├── utils
│   │   └── api.ts           # API interaction functions
│   ├── App.tsx              # Main application component
│   └── index.tsx            # Entry point of the application
├── package.json              # npm configuration
├── tsconfig.json             # TypeScript configuration
└── README.md                 # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/pwa-clock-in-app.git
   ```

2. Navigate to the project directory:
   ```
   cd pwa-clock-in-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the app.

## Usage

- Users can fill out the clock-in form to record their time and location.
- The app will save the data to the database via the backend API.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.