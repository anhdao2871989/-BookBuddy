/* TODO - add your code to create a functional React component that renders a login form */
import LoginForm from './LoginForm'

function Login({ user, setUser, token, setToken }){
    return (
        <>
        {
            (token) 
            ?(<h1>Logged in as {user}</h1>)
            :(<LoginForm 
                setUser={setUser} 
                setToken={setToken} />)
        }
        </>
    )
}

export default Login