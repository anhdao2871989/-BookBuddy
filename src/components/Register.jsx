/* TODO - add your code to create a functional React component that renders a registration form */
import RegisterForm from './Registerform'

function Register({ user, setUser, token, setToken }){
    return (
        <>
        {
            (token)
            ?(<h1>Logged in as {user}</h1>)
            :(<RegisterForm
                setUser={setUser} 
                setToken={setToken} />)
        }
        </>
    )
}

export default Register