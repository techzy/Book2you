import React, {
    createContext,
    useContext,
    useEffect
} from "react";


import {
    app
} from '../server-config'
import {
    getAuth,
    signInWithPopup,
    getRedirectResult,
    signInWithRedirect,
    GoogleAuthProvider
} from "firebase/auth";

const SessionContext = React.createContext()
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export function SessionProvider({children}) {
    let signupG = () => {
        signInWithRedirect(auth, provider);
        getRedirectResult(auth)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access Google APIs.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;

                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...

            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...

            });
    

    }
    const user = auth.currentUser;
  console.log(user)

useEffect(()=>{
        // The user object has basic properties such as display name, email, etc.
        
        console.log(user)
},[user])
    return ( 
    <SessionContext.Provider value={{signupG,user}}>
        {children}
    </SessionContext.Provider>
    )
}
export function useSession() {
    const session = useContext(SessionContext)
    return session
}