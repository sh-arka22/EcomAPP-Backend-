# E-Commerce Backend 

The E-Commerce Backend is a REST API for an internet retail website. The API is built onto an Express.js server that uses [Sequelize](https://sequelize.org/master/) to interact with a MySQL database. Sequelize is a promise-based Node.js ORM(Object Relation Mapping) for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server.

This E-Commerce backend has the API routes that point to each of the standard [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) operations for each data group. The routes can be used to:
- Create categories, products
- View categories, products
- Establish associations between the different entities
- Update categories, products
- Delete entries from the database

All that's missing to make this a complete E-Commerce website is a simple front-end application that makes calls to the API routes that are already built-in. If that's too much, simply try making requests to the API routes from your browser to the see the raw data that's returned.

---
## MAP
![map](https://user-images.githubusercontent.com/91637787/181302483-f6cc568e-46fe-49e0-b767-7b5741994196.png)
---
---
## **APIS**
 #### **-USER SignUp as admin**
  ```sh
  localhost:8080/ecomm/api/v1/auth/signup
  ```
  <img width="859" alt="Screenshot 2022-07-27 at 10 15 24 PM" src="https://user-images.githubusercontent.com/91637787/181303583-99bcd763-218f-422d-be66-0e237c89b545.png">
  
  #### **-USER Signin as admin**
  ```sh
  localhost:8080/ecomm/api/v1/auth/signin
  ```
  <img width="859" alt="Screenshot 2022-07-27 at 10 22 14 PM" src="https://user-images.githubusercontent.com/91637787/181304823-7e9d961b-dc7d-49e8-a24a-20560cf15746.png">
  
  #### **-Admin Creates Products Items**
  ```sh
  localhost:8080/ecomm/api/v1/products
  ```
  <img width="859" alt="Screenshot 2022-07-27 at 10 24 28 PM" src="https://user-images.githubusercontent.com/91637787/181305234-78f1a415-32c6-42c9-807e-fd97de08f3d1.png">
  
  #### **-USER SignUp as Customer**
  ```sh
  localhost:8080/ecomm/api/v1/auth/signup
  ```
  <img width="859" alt="Screenshot 2022-07-27 at 10 57 57 PM" src="https://user-images.githubusercontent.com/91637787/181311314-918b9a8c-6078-4294-9593-8d3ab8a861ac.png">
  
  #### **-USER Signin as Customer**
  ```sh
  localhost:8080/ecomm/api/v1/auth/signin
  ```
  <img width="1237" alt="Screenshot 2022-07-27 at 11 04 45 PM" src="https://user-images.githubusercontent.com/91637787/181312525-9f187467-9775-4684-a6ce-67b25f2e4def.png">
  
  #### **-User Creates Cart**
  ```sh
  localhost:8080/ecomm/api/v1/carts
  ```
  <img width="987" alt="Screenshot 2022-07-27 at 11 10 26 PM" src="https://user-images.githubusercontent.com/91637787/181313481-aae6713b-52ae-4714-97da-81ba647556ab.png">
  
  #### **-User adds Products into cart**
  ```sh
  localhost:8080/ecomm/api/v1/carts/1
  ```
  <img width="990" alt="Screenshot 2022-07-27 at 11 14 23 PM" src="https://user-images.githubusercontent.com/91637787/181316860-01192020-cb1f-4bd5-90b1-c8133c1cc7d7.png">

## **Installation**

Start with cloning this repo on your local machine:

```sh
$ git clone https://github.com/sh-arka22/EcomAPP-Backend-.git
```

To install and set up the application, run:
```sh
$ npm install
$ node server.js
```

To set the Db connecdtion you will also need to go into the configs directory and chage the db.configs file your root name and password

file: ./configs/db.configs
```
development: {
        HOST: 'localhost',
        USER: '',
        PASSWORD: '',
        DB: "",
        dialect: 'mysql',
        pool: {
            max: 5, //maximum connection possible is 5
            min: 0,
            aquire: 3000,
            aquire: 1000
        }
    }
```

---

## **Usage**
<sub><sup>This section assumes you have installed the application, and created the .env file in the root directory.</sub></sup>

To finish the set-up the application, complete the following steps:
1. Create a MySQL database on your local machine using the *schema.sql* file located in the /db/ directory(From the MySQL CLI, source db/schema.sql)
2. Seed the database with sample data to be used for testing purposes(Run *npm run seed* from inside the root directory of the project)

Now you're ready to start the application! You can start the server by running: 
```
node server.js
```

The server is running, now you can make requests to it through your desired method. If you're new to the backend, I suggest trying out [Postman](postman.com)

---

## **Built With**
* [**Node.js**](https://nodejs.org/en/about/)
*  - [Sequelize](https://www.npmjs.com/package/sequelize)
*  - [Express.js](https://www.npmjs.com/package/express)
* [**Visual Studio Code**](https://code.visualstudio.com/)

---

                             
