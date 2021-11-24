import React, {useState} from 'react'
import userService from '../services/users'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const RegisterForm = ({setNotif}) => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();
        try {
            const user = {
                username,
                name,
                password
            }
            const newUser = await userService.createNew(user);
            console.log(newUser);
            setName('');
            setUsername('');
            setPassword('');
            setNotif(`User ${username} created successfully! Please log in!`);
            setTimeout(() => {
                setNotif(null);
            }, 5000);
            navigate('/login');
        } catch (error) {
            setNotif('An error occurred when registering, please try again');
            setTimeout(() => {
                setNotif(null);
            }, 5000);
        }
    }

    return (
        <div>
            <h1>Register here</h1>
            <form onSubmit={handleRegister}>
                <div>
                    Name: <input value={name} onChange={(e)=>setName(e.target.value)}/>
                    Username: <input value={username} onChange={(e)=>setUsername(e.target.value)} />
                    Password: <input value={password} type="password" onChange={(e)=>setPassword(e.target.value)} />
                    <button type="submit">Register new user</button>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm
