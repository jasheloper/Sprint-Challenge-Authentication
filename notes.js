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

/ A 1 way process where we take a user password in plain text & translate it into a string that you can no longer reverse back into the password. /


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








*/