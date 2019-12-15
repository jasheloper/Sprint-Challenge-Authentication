/* 

-------------------------------------

Notes on my process, just for fun! 

-------------------------------------


- Forked.
- Read Me - Self-Study / Essay Questions  


Installing: 
- yarn add express
- yarn
- yarn server | Server Listens


-------------------------------------

Implement User Authentication System:

 A 1-way process where we take a user password in plain text & translate it into a string that you can no longer reverse back into the password. 


- npm install bcryptjs

1. Implement the register and login functionality inside /auth/auth-router.js.
   - require bcrypt 
   - fill in /register and /login 
   - create a users model (useres > users-model.js) to require in auth-router

   - POSTMAN   : localhost:3300/api/auth/register
      - Test user register : SUCCESS 
      - Will not allow registration without a password! :)
      - Username required!! :)

   - POSTMAN   : localhost:3300/api/auth/login
      - Test User Login    : SUCCESS

   - SQLITE:
      - Sqlite Studio  : Password successfully hashed 

-------------------------------------


////////////////////


-------------------------------------

Implement the authenticate middleware inside /auth/authenticate-middleware.js.

1. Added code to authenticate credentials.

2. POSTMAN  :  localhost:3300/api/jokes
   - RESULT    : "message": "invalid credentials"
   - Test /register + /login THEN /api/jokes : Still invalid ??
   - Fix: 
      * Added ./authenticate-middleware.js to auth-router.js
      * Also, made sure headers matched new users
      * Resolved.
      
-------------------------------------


////////////////////


Write a minimum of 2 tests per API endpoint.

1. auth > auth-router.js.spec.js

2. Update pckg json   :
   * "scripts": {
    "server": "nodemon index.js",
    "test": "cross-env DB_ENV=testing jest --watch --verbose",
    "start": "node index.js"
  },


3. Dependencies   :
      - npm install supertest --save-dev


// Something wasn't working when I started 'yarn test' so installing these was a part of troubleshooting to make sure dependencies wasn't the problem: 

      - npm i --save-dev supertest
      - npm install --save-dev cross-env
      - npm install dotenv
      - npm install knex
      - npm install sqlite3 --save
      - Add to json :
                     "jest": {
            "testEnvirnoment": "node"
            }
      - index.js - require('dotenv').config();
      - Added testing to knexfile.js
      - yarn add --dev jest  ~ this was the problem, tests can now run 


4. auth-router.js.spec.js

            - Describe 1  : Register
               2 tests: passed

            - Describe 2  : Login
               2 tests: passed

               
5. Forgot about : Use JSON Web Tokens or Sessions and Cookies to persist authentication across requests.
                  
1. npm install jsonwebtoken

2. auth-router.js
           *  const jwt = require('jsonwebtoken');
           * Token code :
               - gen token
               - add to :  /register & /login 
           * config > secrets.js : 'ilikebread'

           * Getting errors in Postman : Error: Illegal arguments
           
           ... troubleshooting steps:
               - npm install helmet --save
               - npm install cors
               - npm install router






*/