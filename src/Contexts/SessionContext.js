import React, {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";


import {
    app
} from '../server-config'
import {
    getAuth,
    signInWithPopup,
    getRedirectResult,
    signInWithRedirect,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut
} from "firebase/auth";

const SessionContext = React.createContext()
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export function SessionProvider({
    children
}) {

    const [user, setUser] = useState();

    useEffect(() => {
        onAuthStateChanged(auth, (res) => {
            if (res) {
                console.log(res)
                setUser({
                    displayName: res.displayName,
                    email: res.email,
                    uid: res.uid
                })
            } else {
                console.log('User not logged in', res)
                setUser()
            }
        })
    }, [])

    let logOut = async () => {
        try {
            let data = signOut(auth)
            console.log(data)
        } catch {

        }
        console.log('logout function is being called')
    }

    let signupG = async () => {
        try {
            signInWithPopup(auth, provider);
            //     getRedirectResult(auth)
            //   .then((result) => {
            //     // This gives you a Google Access Token. You can use it to access Google APIs.
            //     const credential = GoogleAuthProvider.credentialFromResult(result);
            //     const token = credential.accessToken;

            //     // The signed-in user info.
            //     const resus = result.user;
            //     // IdP data available using getAdditionalUserInfo(result)
            //     console.log(result)
            //     debugger
            //     // ...
            //   }).catch((error) => {
            //     // Handle Errors here.
            //     const errorCode = error.code;
            //     const errorMessage = error.message;
            //     // The email of the user's account used.
            //     const email = error.customData.email;
            //     // The AuthCredential type that was used.
            //     const credential = GoogleAuthProvider.credentialFromError(error);
            //     console.log(error)

            //     // ...
            //   });
            // console.log(res)
        } catch (err) {
            console.log(err)
        }
        console.log('redirect done')

    }
    // signupG();
    // const user = auth.currentUser;

    //   console.log(user)
    return ( <SessionContext.Provider value = {
            {
                signupG,
                user,
                logOut
            }
        } > {
            children
        } </SessionContext.Provider>
    )
}
export function useSession() {
    const session = useContext(SessionContext)
    return session
}