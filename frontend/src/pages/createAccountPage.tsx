import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const CreateAccount: React.FC = ()=>{
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [error, setError] = useState<string>('')

    const navigate = useNavigate();

    const createAccount = async()=>{
        try{
            if (password !== confirmPassword){
                setError("The password confirmation does not match")
                return;
            }
            await createUserWithEmailAndPassword(getAuth(), email, password)
            navigate('/articles')
        } catch(error: any){
            setError(error.message)
        }
    }
    return(
        <div>
            <h1>Create Account</h1>
            {error && <p className="error">{error}</p>}
            <input
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={e=>setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={e=>setPassword(e.target.value)}
            />
            <input
                type="password"
                placeholder="Confrim your password"
                value={confirmPassword}
                onChange={e=>setConfirmPassword(e.target.value)}
            />
            <button onClick={createAccount}>Create Account</button>
            <p>Already have an account?<Link to='/login'> Login here</Link></p>

        </div>
    );
};

export default CreateAccount;