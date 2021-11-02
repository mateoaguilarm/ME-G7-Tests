import { createContext, useContext, useEffect, useState } from 'react';
import firebaseApp from '../firebase'
// importing firebase/auth for creation
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

const authContext = createContext();

function useAuth() {
    return useContext(authContext)
}



function AuthProvider({ children }) {
    const auth = getAuth(firebaseApp);

    function signup(email, password) {
        createUserWithEmailAndPassword(auth, email, password)
        //     .then((userCredential) => {

        //         const user = userCredential.user;
        //     })
        //     .catch((err) => {
        //         const errorCode = err.code;
        //         const errorMsg = err.message;
        //     })
    }

    // Set an authentication state observer and get user data
    const [ currentUser, setCurrentUser ] = useState('');

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
        });
    }, )

    return (
        <authContext.Provider value={{ signup, currentUser }}>
            { children}
        </authContext.Provider>
    )
}

export { authContext, AuthProvider, useAuth }
