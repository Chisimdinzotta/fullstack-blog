import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";

const useUser = () =>{
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(getAuth(), user=>{
            setUser(user);
            setIsLoading(false);
        });
        
        return unSubscribe;
    }, [])

    return {user, isLoading}
}

export default useUser;