# Welcome to Groupomania project !

For start this project you have to run frontend and backend at the same time.
You can :

- Create an account
- Login
- Logout
- Update your profil
- Create a post
- Comment
- Like post
- Delete your account...

# Frontend

1. Open a terminal : ctrl + ù
2. cd frontend
3. npm install
4. npm run start

# Backend

## First step : MySQL

- This project works with MySQL and Sequelize ORM (Object Relational Mapping) : https://www.npmjs.com/package/sequelize

- This Open Classrooms course could be useful : https://openclassrooms.com/fr/courses/6971126-implementez-vos-bases-de-donnees-relationnelles-avec-sql/7152681-installez-le-sgbd-mysql

- Download MySQL (WINDOWS) : https://dev.mysql.com/downloads/installer/

1. Create a database with MySQL Command Line Client OR MySQL Workbench :

- CREATE DATABASE dbname ;
- USE dbname;

For this project you can named your database groupomania :

- CREATE DATABASE groupomania ;
- USE groupomania;

## Second step : Installation and start backend

1. Open another terminal : "new terminal"
2. cd backend
3. create a folder named "images"
4. npm install

5. .env-example

- DB_SECRET_TOKEN = your top secret token
- DB_DATABASE_HOST = your database host (could be "localhost")
- DB_DATABASE_NAME = your database name (could be "groupomania")
- DB_DATABASE_USERNAME = your database username (could be "root")
- DB_DATABASE_PASSWORD = your database password

Udpate your environment variable + rename this file .env + save

6. npm run start

Run start will CREATE TABLES IF NOT EXIST : `post` + `user` + `comment` + `like`

- Executing (default): SHOW INDEX FROM `post`
- Executing (default): SHOW INDEX FROM `user`
- Executing (default): SHOW INDEX FROM `comment`
- Executing (default): SHOW INDEX FROM `like`

To verify (on your MySQL Command Line Client / Workbench) :
SHOW TABLES;

## USER & ADMIN USER

1. USER

- Create your account with frontend (signup : lastName, firstName, email and password)
- Login

2. ADMIN USER

- You can update a USER to an ADMIN USER with Command Line Client / Workbench

- SELECT \* FROM user;

All users have an id, choose the user you want to update => ADMIN USER

- UPDATE dbname.user SET `admin`=true WHERE `id`=1; (if id of USER you want to update = 1)
- UPDATE dbname.user SET `admin`=true WHERE `id`=2; (if id of USER you want to update = 2)
  ...

- UPDATE groupomania.user SET `admin`=true WHERE `id`=1; (if id of USER you want to update = 1)
- UPDATE groupomania.user SET `admin`=true WHERE `id`=2; (if id of USER you want to update = 2)
  ...

ADMIN USER can modify or delete a reported comment (moderation) with groupomania app.

### IN CASE OF "EMERGENCY"

If a post have to be delete because it could'nt be moderate :

- each posts have an id
- when you click on a post you see it, for example : http://localhost:3000/2 (id of post = 2)
- ADMIN USER can use MySQL Workbench for delete it : DELETE from post WHERE id=2;

WARNING : DELETE queries are irreversible, so pay attention with these queries.

HAVE FUN ON GROUPOMANIA SOCIAL NETWORK !
