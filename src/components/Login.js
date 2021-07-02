import React, {useState} from "react";
import useToken from "../hooks/useToken"

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}

function Login() {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const { token, setToken } = useToken(); 

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
    }

    if(token){
        return <div>You are logged in</div>  
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={e => setUserName(e.target.value)} />
            <input type="password" onChange={e => setPassword(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
        </div>
    );
};

export default Login;