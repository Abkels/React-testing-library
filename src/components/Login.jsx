import { useState } from "react";
import axios from 'axios'

const Login = () =>{
    
    const [error,setError] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false )

    const handleClick = async (e) => {
        e.preventDefault();
        try {
          const {data} = axios.get("https://jsonplaceholder.typicode.com/users/1") ;
          setUser(data)
        } catch (error) {
            setError(true)
        }
    }

    return (
        <div className="container" style={{display: "flex", justifyContent: "center", alignItems: 'center', height: '100vh', width: '1 00%', background: 'grey'}}>
            <span className="user">{user.name}</span>
            <form style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', height: '300px', width: '250px', gap: '10px'}}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button disabled ={!username & password} onClick={handleClick} style={{background: 'green'}}>{loading? "Please wait" : Login}</button>
                <span data-testid = 'error'
                style={{visibility: error ? "visible" : "hidden"}}
                >Something went wrong!</span>
            </form>
        </div>
    ); 
};

export default Login;