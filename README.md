# Humble Superhero API

## Overview

The Humble Superhero API is a simple application that allows users to manage a list of superheroes, each with a name, superpower, and a humility score. This project is built using a Node.js backend with Express and a React frontend, leveraging TypeScript for type safety.

## Project Structure

The project is organized into two main directories: `backend` and `frontend`.

### Backend

-   **Framework**: NestJS (with Express)
-   **Endpoints**:
    -   `POST /superheroes`: Add a new superhero.
    -   `GET /superheroes`: Fetch the list of superheroes sorted by humility score.
-   **Data Storage**: In-memory array for storing superhero data.

### Frontend

-   **Framework**: React
-   **Components**:
    -   `AddSuperheroForm`: A form for adding new superheroes.
    -   `SuperheroList`: Displays the list of superheroes sorted by humility score.

## Setup Instructions

### Enviroment variables

Check `.env.example` and create your own `env` file in root folder with your particular routes and ports.

### Backend

1. Navigate to the `backend` directory:
    ```
    cd backend
    ```
2. Install dependencies:
    ```
    npm install
    ```
3. Start the backend server:
    ```
    npm run start
    ```

### Frontend

1. Navigate to the `frontend` directory:
    ```
    cd frontend
    ```
2. Install dependencies:
    ```
    npm install
    ```
3. Start the frontend application:
    ```
    npm start
    ```

## API Usage

-   To add a superhero, send a `POST` request to `/superheroes` with the following JSON body:
    ```json
    {
    	"name": "Superman",
    	"superpower": "Flight",
    	"humilityScore": 8
    }
    ```
-   To fetch the list of superheroes, send a `GET` request to `/superheroes`.

## Collaboration

In a team setting, I would collaborate with a teammate by:

-   Conducting code reviews to ensure code quality and adherence to best practices.
-   Pair programming to tackle complex features or bugs.
-   Discussing potential improvements and new features during regular stand-ups.
-   Share knowledge and resources to help each other learn and grow.
-   Be open to feedback and willing to make changes based on suggestions from teammates.

## If I Had More Time

If I had more time, I would:

-   Implement additional features such as user authentication and authorization.
-   Explore integrating a database to persist superhero data instead of using an in-memory array.
-   Improve the frontend UI/UX to make it more user-friendly and visually appealing.
-   Add more comprehensive tests, including integration tests and performance tests.
-   Explore deploying the application to a cloud platform like AWS or Heroku for better scalability and availability.
-   Include style modules with SASS to enhance the styling capabilities and maintainability of the frontend.
-   Expand testing to cover the entire project and make the tests more robust.
-   Implement Husky to ensure code integrity by running pre-commit and pre-push hooks.
-   Configure a proper monorepo setup to manage both the backend and frontend projects more efficiently.

## Conclusion

This project marks my first experience using NestJS, and I have found it to be a very interesting and powerful framework. It has proven to be highly effective for building quick and solid backend APIs. I look forward to further exploring its capabilities and leveraging it in future projects.
