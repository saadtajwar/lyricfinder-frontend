import React, {useState} from 'react'
import axios from 'axios'

const Register = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (event) => {
        event.preventDefault();
        const user = {
            username,
            name,
            password
        }
        const newUser = await axios.post('http://localhost:8008/api/users', user);
        console.log(newUser.data);
        setName('');
        setUsername('');
        setPassword('');
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

export default Register