# Debt-Manager

Debt-Manager is a web application designed to assist accountants in managing members' debts. Although the project was not completed, it served as an opportunity to enhance my skills in web application development.

## Technologies Used

- **Database:** PostgreSQL
- **Frontend Library:** React.js
- **Backend Framework:** Express.js

## Setup

### For Linux

#### 0. Install Requirements

- Ensure that PostgreSQL and Node.js are installed on your system.

#### 1. Configure the Application

1. Run command `npm install` one time in the project directory, and one time in the `client` folder to install dependencies.
2. Create a new PostgreSQL database (I recommend you to name it as `debt-manager`).
3. Configure the features of `pg_config` constant in the file `<project_directory>/config/pg.config.js` to match your PostgreSQL settings.
4. Run the following script to automatically initialize the database:
`node <project_directory>/config/db.initializer.js`

#### 2. Run the Application

1. Execute the following command:
`sh <project_directory>/start-dev-server.sh`
2. Open the application in your web browser by visiting [localhost:3000](http://localhost:3000).
(server API default port is 3001)
