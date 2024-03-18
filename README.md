# Project Name: Full Stack Authentication with Vue.js, Node.js, Express, and SQLite

## Description
This project is a full stack application built with Vue.js, Node.js, Express, and SQLite, focusing on user authentication. It showcases a basic implementation of a web application that allows users to sign up, log in, and log out securely. Vue.js is used for the frontend, Node.js with Express handles the backend, and SQLite serves as the database for storing user information securely.

## Setup Instructions
### Prerequisites
Node.js and npm should be installed on your machine. You can download and install them from there website.

#### Installation Steps
Clone the Repository:

`git clone https://github.com/geekclick/Internship-Task-User-Authentication`

Navigate to the Project Directory:

`cd Internship-Task-User-Authentication`

#### Install Dependencies:

Frontend Setup:

`cd client`

`npm i`

Start the Development Server:

`npm run dev`


Backend Setup:

Navigate to the server directory:

`cd server`

Install backend dependencies:

`npm install`

Start the backend server:

`npm start`

Database Setup:

Create `.env` file in the server directory with following data

`DATABASE_URL="file:./dev.db"`

Now run following command in server directory to create local database

`npx prisma migrate dev --name init`

Now open your web browser and navigate to http://localhost:5173/ to access the application.

Additional Notes
Ensure that port 5173 is not in use by any other application to run the frontend.
By default, the backend server runs on port 5000. Make sure this port is available for running the backend.

### License
This project is licensed under the MIT License.

### Acknowledgements
- Vue.js: Vue.js Documentation
- Node.js: Node.js Documentation
- Express: Express.js Documentation
- SQLite: SQLite Documentation
- Prisma: Prisma Documentation
