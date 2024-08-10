# Stripe Mini-App

This project is a simple mini-app built with React and Vite that integrates Stripe for fiat payments. The app allows users to select from predefined deposit amounts (e.g., 20€, 40€, 100€) and process payments through Stripe. This app serves as a demonstration of integrating third-party payment services in a React application.

## Table of Contents
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Environment Variables](#environment-variables)
- [Dependencies](#dependencies)

## Getting Started

### Prerequisites
Ensure you have the following software installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/miniapp.git
   cd miniapp
   ```

2. **Install dependancies:**
    Using npm:
    ```bash
    npm install
    ```
    Using Yarn:
    ```bash
    yarn install
    ```

### Project Structure
    ```bash
    .
    ├── public/                 # Static files
    ├── src/                    # React components and app logic
    │   ├── App.jsx             # Main App component
    │   ├── PaymentButton.jsx   # Payment button component
    │   └── index.jsx           # Entry point of the React app
    ├── server/                 # Backend server code
    │   └── stripeServer.js     # Express server handling Stripe API
    ├── .env                    # Environment variables
    ├── .eslintrc.js            # ESLint configuration
    ├── vite.config.js          # Vite configuration
    ├── package.json            # Project dependencies and scripts
    └── README.md               # Project documentation
    ```

### Scripts
    Development
    To start the development server with hot reloading:
    ```bash
    npm run dev
    ```

    To start the backend server:
    ```bash
    npm start
    ```

### Environment Variables
    Create a `.env` file in root directory to store your environment variables:
    ```makefile
    STRIPE_SECRET_KEY=your_stripe_secret_key
    ```
    Replace your_stripe_secret_key with your actual Stripe secret key, which you can obtain from your Stripe dashboard under the "Developers" section.

## Dependencies

### Frontend

- **React**: JavaScript library for building user interfaces.
  - `react`: ^18.3.1
  - `react-dom`: ^18.3.1
- **Vite**: Fast build tool for modern web projects.
  - `vite`: ^5.4.0
  - `@vitejs/plugin-react`: ^4.3.1
- **Stripe**: Libraries for integrating Stripe payment services.
  - `@stripe/react-stripe-js`: ^2.7.3
  - `@stripe/stripe-js`: ^4.2.0

### Backend

- **Express**: Web framework for Node.js.
  - `express`: ^4.19.2
- **Stripe**: Official Node.js library for the Stripe API.
  - `stripe`: ^16.7.0
- **Middleware and Utilities**:
  - `body-parser`: ^1.20.2
  - `cors`: ^2.8.5
  - `dotenv`: ^16.4.5

### Development Dependencies

- **Linting and TypeScript**:
  - `eslint`: ^9.8.0
  - `@eslint/js`: ^9.8.0
  - `eslint-plugin-react`: ^7.35.0
  - `eslint-plugin-react-hooks`: ^5.1.0-rc.0
  - `eslint-plugin-react-refresh`: ^0.4.9
  - `@types/react`: ^18.3.3
  - `@types/react-dom`: ^18.3.0
- **Other Development Tools**:
  - `globals`: ^15.9.0




