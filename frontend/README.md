# Planner Buddy Frontend

This is the React frontend for the Planner Buddy application.

## Getting Started

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm start
   ```

This will start the app on [http://localhost:3000](http://localhost:3000)

## Project Structure

- `src/components/` - React components
- `src/App.js` - Main App component
- `src/index.js` - Entry point

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

## Features

- Landing page with feature overview
- User authentication (login/register)
- Dashboard with todo and appointment management
- Responsive design using Bootstrap
- Font Awesome icons

## Dependencies

- React
- React Router
- Bootstrap
- Font Awesome
- Axios (for API calls)

## Development

The frontend is designed to work with the Planner Buddy backend API. Make sure the backend server is running when developing.

For authentication and data management, the app uses:
- React state management
- React Router for navigation
- Axios for API requests

## Future Improvements

- Implement full API integration
- Add state management with Redux or Context API
- Implement proper error handling
- Add loading states
- Implement form validation
- Add unit tests
