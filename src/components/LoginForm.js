import React, {useState} from 'react'
import loginService from '../services/login'

const LoginForm = ({user, setUser, setNotif}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    if (user) {
        return (
            <div>Already logged in!</div>
        )
    }

    const handleLogin = async (e) => {
        try {
            e.preventDefault();
            const attemptedUser = {
                username,
                password
            }
            const loggedUser = await loginService.login(attemptedUser);
            setUser(loggedUser);
            setNotif(`${username} successfully logged in!`);
            setTimeout(() => {
                setNotif(null);
            }, 5000);
            console.log(loggedUser);
            setUsername('');
            setPassword('');    
        } catch (error) {
            setNotif('error: Invalid credentials');
            setTimeout(() => {
                setNotif(null);
            }, 5000);
        }
    }

    return (
        <div>
            Login Here
            <form onSubmit={handleLogin}>
                Username: <input value={username} onChange={(e)=>setUsername(e.target.value)} />
                Password: <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginForm
