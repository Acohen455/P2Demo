import {useAuth} from "../../GlobalData/AuthContext.tsx";

export const GameTable:React.FC = () => {


    //!NEW! Context API stuff
    //We want this component to have access to the loggedInUser data...
        //Since we're hypothetically getting all games by user id

    //BUT... there's no need to change loggedInUser data from here
    //So we can leave out the mutator in our useAuth hook!
    //?This is VERY well encapsulated code
    const {loggedInUser} = useAuth();



    return(
        <>
            <h1>Games for {loggedInUser?.username}</h1>
            <h3>This is where the games would be... If I had some!!</h3>
        </>
    )
}