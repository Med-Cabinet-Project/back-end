# back-end

API Guide 

URL https://medcab23.herokuapp.com/

Authentication Routes

POST /api/auth/register

creates a new user account. 
Then returns an object with the user's info

input: 
all required

{
    email: "ex@fakeemail.com",
    password: "password",
    first_name: "firstName",
    last_name: "lastName"
}

output: 

{
    user: {
        id: 1
        email: "ex@fakeemail.com",
        first_name: "firstName",
        last_name: "lastName"
    },
     token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTI5NzI0MjIsImV4cCI6MTU5MzA1ODgyMn0.IyLS7AECSWX2WhTza-ZYGurUOZhZlhUGaKeoY1eEehA"
}

User Login 

POST /api/auth/login

validates user credentials.

Input:
all required

{
    email: "ex@fakeemail.com",
    password: "password"
}

Output:

{
  message: "Welcome ${user.first_name}!",
  credentials: {
    user: {
      id: 1,
        email: "ex@fakeemail.com",
        first_name: "firstName",
        last_name: "lastName"
    },
     token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTI5NzI0MjIsImV4cCI6MTU5MzA1ODgyMn0.IyLS7AECSWX2WhTza-ZYGurUOZhZlhUGaKeoY1eEehA"
  }
}


POST /api/strains

creates a new strain in the database

input 

{
  strain: "Snow White"
}

Output:

[
  {
    id: 1,
    strain: "Snow White"
  }
]

Helper Routes 