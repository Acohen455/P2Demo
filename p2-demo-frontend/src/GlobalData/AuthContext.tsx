//This is our implementation of Context API
//It will store user data in a way that lets us send data around the frontend
//in a secure and encapsulated way
//Better than the store.ts that lives in this folder! We won't use that anymore

//First we'll define a LoggedInUser interface to structure our data
interface loggedInUser{
    userId:string;
    username:string;
    role:string;
}

//Define an AuthContrextType interface to define initial state and a mutator for user data