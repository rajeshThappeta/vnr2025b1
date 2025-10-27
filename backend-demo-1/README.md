1. Generate package.json file
        npm init -y

2. Create HTTP SERVER ( express module )  
        npm install express

3. Defines routes(API)
        app.METHOD( path , (req,res)=>{} )

4. To run server in watch mode which restarts automatically when code changes
        npm install -g nodemon

5. Configure mongodb in express app
        a. Install "mongodb" module
                npm install mongodb
        b. Import "MongoClient" and create new connection