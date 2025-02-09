# Humble Superhero API - Backend

## Overview
The Humble Superhero API is a simple RESTful API built with NestJS that allows users to manage a list of superheroes. Each superhero has a name, a superpower, and a humility score that reflects their humility on a scale from 1 to 10.

## Features
- Add a new superhero with their name, superpower, and humility score.
- Fetch a list of superheroes sorted by their humility score in descending order.

## Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd humble-superhero-api/backend
   ```

2. Install the dependencies:
   ```
   npm install
   ```

### Running the Application
To start the server, run:
```
npm run start
```
The API will be available at `http://localhost:3000`.

### API Endpoints
- **POST /superheroes**
  - Request Body:
    ```json
    {
      "name": "Superman",
      "superpower": "Flight",
      "humilityScore": 8
    }
    ```
  - Description: Adds a new superhero to the list.

- **GET /superheroes**
  - Description: Fetches the list of superheroes sorted by humility score in descending order.

## Testing
To run tests, use:
```
npm run test
```

## Collaboration
If I were to collaborate with a teammate, I would suggest implementing a feature to allow users to update or delete superheroes. We could also explore adding a persistent database instead of using an in-memory array for better data management.

## If I Had More Time
If I had more time, I would:
- Implement a persistent database (e.g., MongoDB or PostgreSQL) to store superhero data.
- Add authentication to secure the API.
- Create comprehensive unit tests for all endpoints to ensure reliability.

## Conclusion
This API is a fun and simple way to celebrate the unique qualities of superheroes while emphasizing the importance of humility. Thank you for reviewing this project!