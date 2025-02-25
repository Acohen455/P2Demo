# P2Demo

- JWT and Spring Security for auth, security, with password encryption on the backend

  - JWTs are JSON Web Tokens. JWTs are a way to uniquely identify a logged in user, and send a payload containing their specific user information. Now we're using tokens instead of sessions! 
  - Login and Register require no auth. Login creates and sends a JWT in the response
    - All other HTTP requests require a JWT in the Authorization Header
  - Check the Utils package and application.properties for the JWT and Spring Security configuration
  - Check the User class to see the UserDetails implementation, and the OutgoingUserDTO, which we send the JWT with (if login succeeds)
    
- Context API for global storage on the front end
  - Will help us deliver information around the app.
 
- UUIDs instead of int IDs

- public deployment. RDS, EC2, S3.
  - Check Login.tsx and UserTable.tsx to see our S3-hosted front ends making calls to our EC2-hosted backends
  - Check application.properties for RDS connection

- Dockerfile for the option to containerize the app 
