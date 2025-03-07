//This is our implementation of Context API
//It will store user data in a way that lets us send data around the frontend
//in a secure and encapsulated way
//Better than the store.ts that lives in this folder! We won't use that anymore

//First we'll define a LoggedInUser interface to structure our data
import {createContext, ReactNode, useContext, useEffect, useState} from "react";

//make sure names match!
//field on the backend is named jwt, so name has to match here
interface LoggedInUser{
    userId:string;
    username:string;
    role:string;
    jwt:string;
}

//Define an AuthContextType interface to define initial state and a mutator for user data
interface AuthContextType {
    loggedInUser:LoggedInUser | null;
    setLoggedInUser: (user:LoggedInUser | null) => void;
}

//use the AuthContextType to create our overall AuthContext
//This is going to help us provide the user data to other components
const AuthContext = createContext<AuthContextType | null>(null);

//Now, we can finally create our component - AuthProvider
//ContextAPI allows us to wrap components in the data we want to pass them and control it granularly
//We'll be using hte AuthContextType declared above
//BIG PICTURE: We'll wrap components with this AuthProvider to PROVIDE data to them
//see Main.tsx!!!
export const AuthProvider:React.FC<{children:ReactNode}> = ({children}) => {

    //define a useState for loggedInUser data (we'll also use localstorage here)
    const[loggedInUser, setLoggedInUser] = useState<LoggedInUser | null>(
        JSON.parse(localStorage.getItem("loggedInUser") || "null")
        //this is the default state value -- it's whatever is in localstorage
        //localstorage is temporary storage that exists in most frontend libraries
    )

    //this useEffect will either set new loggedInUser data, or remove it
    //when loggedInUser state changes and on initial render
    useEffect(() => {
        if (loggedInUser){
            localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
        } else {
            localStorage.removeItem("loggedInUser");
        }
    }, [loggedInUser])
    //NOTE: we should have login/role checks in any component that requires successful login
    //we're moving the logic to refresh elements when the user does something/updates to here
    //the reason we replace user data with current user data is to update any data tied to this in our components



    //providing the loggedInUser data and setLoggedInUser mutator to anything wrapped in the AuthProvider
    //The entire app in our case -- see Main.tsx
    return(
        <AuthContext.Provider value={{loggedInUser, setLoggedInUser}}>
            {children} {/* this just tells it to pass as props to any children the value specified */}
        </AuthContext.Provider>
    )
    //This is what makes the data global! Any component we wrap int his Provider will be PROVIDED
    //with this data and mutator



}

//Finally, we'll define a hook that lets us access the user info in the AuthContext
//This is how we can decide what each component gets
    //Maybe one component needs to get AND set user data
    //Maybe others only need to get it, and have no opportunity to set it
export const useAuth = () : AuthContextType => {
    //extract the current context value, to check if it exists
    //(it WILL exist if the component is wrapped in the AuthProvider)
    //This is how we can make sure that the component is wrapped in the AuthProvider before giving it auth info
    const context = useContext(AuthContext); //defined up above

    //if the component trying to access user data isn't wrapped in AuthProvider...
    //throw an error
    if (!context){
        throw new Error('useAuth must be used from within an AuthProvider')
    }

    return context; //finally give the component the data it needs

}