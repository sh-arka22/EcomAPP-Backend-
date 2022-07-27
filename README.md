# E-Commerce Backend
[![wakatime](https://wakatime.com/badge/github/lukecp5/e-commerce-backend.svg)](https://wakatime.com/badge/github/lukecp5/e-commerce-backend) 

The E-Commerce Backend is a REST API for an internet retail website. The API is built onto an Express.js server that uses [Sequelize](https://sequelize.org/master/) to interact with a MySQL database. Sequelize is a promise-based Node.js ORM(Object Relation Mapping) for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server.
This E-Commerce backend has the API routes that point to each of the standard [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) operations for each data group. The routes can be used to:
- Create categories, products
- View categories, products
- Establish associations between the different entities
- Update categories, products
- Delete entries from the database

All that's missing to make this a complete E-Commerce website is a simple front-end application that makes calls to the API routes that are already built-in. If that's too much, simply try making requests to the API routes from your browser to the see the raw data that's returned.

![Screenshot](Mind\map.png)
