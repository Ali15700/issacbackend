Npm init
npm i express pg cors
express is a way to create server nodejs
pg cors is a way to integrate and interact with postgres database

Create database.sql file in cqlibrary


Open command prompt then …
psql -U postgres
 (Postgres is a superadmin having access on inside database)

\l  (you can see all your data)
\c (you can move in database  e.g \c postgres)
Database.sql (you also have to add the commands in psql prompt)
\dt (to check the relationships)

Db.js (Pool query connects the database with the server)
