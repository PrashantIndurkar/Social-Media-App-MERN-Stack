1. We created package.json using npm init -y
2. Installed some dependencies using npm i express mongoose and env. And changed the script to dev for running the app
3. created folders backend and frontend.
4. create app.js and sever.js
5.After that in backend create a folder called config -> create file called config.env and database.js
6. in app.js require express and after that in server.js require app.js file and listen server port
7. in database.js write connect database  function[connectDatabase]=> mongoose.connect(process.env.mongoUrl).then(for connection message).catch(err message) and export this function
8. bring that connectDatabase into sever.js and call connectDatabase()
9. create variables in .env file PATH=4000 and MONGO_URL="mongodb://localhost:27017/"
10. in app.js check if we are in production or not for env variables (process.env.NODE_ENV !== "production")