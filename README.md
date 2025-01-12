# Express App Template

This is a simple Express.js application template designed for building RESTful APIs with a modular structure. The project is currently using MongoDB as the database and Mongoose as the ODM (Object Data Modeling) library for interacting with MongoDB. This template includes services, middleware, validation, and configuration management to provide a solid foundation for creating scalable and maintainable Express applications.

The architecture is inspired by NestJS, with a focus on modularity and separation of concerns. It is built using ESM (ECMAScript Modules) for modern JavaScript imports and exports, providing a cleaner and more consistent way to manage dependencies and organize the application.

### ⚠️ **Disclaimer**

This project is a basic template that can be further improved and extended to suit your needs. If you have any suggestions or improvements, please feel free to reach out to me. 1.**LinkedIn**: [Muhammad Uzair](https://www.linkedin.com/in/muhammaduzair12/) 2. **Email** uzair.ejaz2001@gmail.com

## Features

This express application template currently includes the following key features:

- **Modular and Scalable Architecture**: The project follows a modular architecture, where each feature (e.g., user management, product management) is encapsulated in its own folder with its respective controller, service, and model. This makes it easy to scale and add new features in the future without modifying the existing structure.
- **Service Registry**: Services such as UserService and HelperService are instantiated and registered centrally in the serviceRegistery.js file. This promotes a clean and maintainable approach to handling dependencies across the application. Services are injected where needed, reducing coupling between modules.
- **Separation of Concerns:**: The project follows the principle of separation of concerns by clearly dividing responsibilities between controllers, services, models, and utilities. Controllers are responsible for handling HTTP requests, while services contain business logic. Models represent the database schema, and utilities provide reusable helper functions.
- **Object Oriented Programming**: The project follows an Object-Oriented Programming approach by utilizing service classes such as UserService. Each service is responsible for performing a specific set of tasks
- **Code Quality & Formatting:**: The project uses ESLint for linting and Prettier for automatic code formatting, ensuring consistent style, early detection of issues, and improved readability across the codebase.

These features have been implemented with scalability and maintainability in mind. The system is designed to be **100% scalable**, with the ability to grow over time.

## Project Structure

```bash

src/
├── config/
│   ├── dbConfig.js           # Database connection setup
│   ├── envVariables.js       # Environment variables
│   └── expressConfig.js      # Express app configuration
├── features/
│   └── features.controller.js # Central controller registry
│   └── features.model.js      # Central model registry
│   └── user/
│       ├── user.model.js      # Model for user
│       ├── user.controller.js # Controller for user-related routes
│       ├── user.service.js    # Service handling business logic for users
│       ├── validators/        # Input validation logic
├── middlewares/
│   ├── validate.js           # Middleware for validating request bodies
│   └── tryCatch.js           # Middleware for error handling
├── serviceRegistery.js       # Central service registry
├── utils/
│   └── helpers.js            # Utility functions
├── app.controller.js         # Registering all routes
├── app.service.js             # Root service, containing general API's
├── main.js                   # Application entry point

```

## Installation

1. ### Clone this repository.

```bash
git clone https://github.com/muzair237/express-app-template
```

2. ### Install dependencies.

```bash
npm install
```

### 3. Create a .env-cmdrc.json file in the root directory and paste the following content as shown below.

```bash
{
  "development": {
    "PORT": 4005,
    "MONGO_STRING": "mongodb://127.0.0.1:27017/db-name"
  },
  "production": {}
}
```

## Running the Application

To start the application, follow these steps:

### 1. Open the application in VS Code.

If you're using VS Code, you can easily run the app by using the tasks feature.

- Press `F1` and select **Tasks: Run Task**.
- Choose the appropriate mode (either **development** or **simple**).

### 2. Run the application.

Alternatively, you can run the application directly from the terminal.

```bash
npm run dev
```

### 2. Access the application.

Once the application is running, open your browser and go to:

```bash
http://localhost:4005
```

Thank you for checking out the project.
