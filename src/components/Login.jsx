const Login = () =>{
    return (
        <div className="container" style={{display: "flex", justifyContent: "center", alignItems: 'center', height: '100vh', width: '100%', background: 'grey'}}>
            <form style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', height: '300px', width: '250px', gap: '10px'}}>
                <input type="text" />
                <input type="password" />
                <button>Login</button>
            </form>
        </div>
    );
};

export default Login;