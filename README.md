# E Commerce Back End 

This project is the back end for an e-commerce site. It uses Express.js for the server, Sequelize as the ORM, and PostgreSQL for the database. The application allows users to perform CRUD operations on categories, products, and tags.

# User Story

AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
## Table of Contents

## Acceptance Criteria

GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database

## GitHub Repo: https://github.com/chrispychips12/E-Commerce-Back-End



# Installation
- [Usage](#Usage) 
- [API Endpoints](#API-Endpoints)
- [Database Schema](#Database-Schema)
- [Seeding the Database](#Seeding-the-Database)
- [References](#References)
- [License](#License)
- [Contact](#Contact)

  # Installation
  
- Clone the repository:
```
   git clone https://github.com/chrispychips12/ecommerce-backend.git
   cd ecommerce-backend
```

- Install the dependencies:
```
   npm install
```

- Create a .env file in the root directory and add your PostgreSQL credentials:
```
   DB_NAME=your_database_name
   DB_USER=your_postgresql_username
   DB_PASSWORD=your_postgresql_password
   DB_HOST=localhost
   DB_PORT=5432
```

- Create the database and tables by running the schema file:

```
   psql -U your_postgresql_username -f db/schema.sql
```
- Seed The database:
```
   npm run seed
```
- Start the server:

```
   npm start
```

# Usage

Once the server is running, you can use a tool like Insomnia to test the API endpoints. The server will be running on http://localhost:3001.

#Database Schema

The database schema is defined in the db/schema.sql file. It includes the following tables:
- category
- product
- tag
- product_tag

# References
- Express.js Documentation
- Sequelize Documentation
- PostgreSQL Documentation
  
# License
This project is licensed under the MIT License.

# Contact
GitHub: chrispychips12
