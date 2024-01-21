import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginPage: React.FC = ()=>{
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const navigate = useNavigate();
    const login = async()=>{
        try{
            await signInWithEmailAndPassword(getAuth(), email, password)
            navigate('/articles')
        }catch(error: any){
            setError(error.message)
        }
    }
    return(
        <div>
            <h1>Login</h1>
            {error && <p className="error">{error}</p>}
            <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={e=>setPassword(e.target.value)}
            />
            <button onClick={login}>Log In</button>
            <p>Don't have an account?<Link to="/create-account"> Create one here.</Link></p>
        </div>
    );   
};

export default LoginPage;
