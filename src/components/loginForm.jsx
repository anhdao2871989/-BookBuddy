import { useState } from 'react'

function LoginForm({ setUser, setToken }){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const fetchLogin = async (event) => {
        event.preventDefault();
        try{
            // POST
            const endpoint = 'api/users/login';
            const url = `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/${endpoint}`;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: `${email}`,
                    password: `${password}`
                })
            });
            const result = await response.json();
            if(result.message == 'Login successful!'){
                setUser(`${email}`);
                setToken(result.token);
            } else {
                // error in the login process
            }
            // reset values for email and password.
            setEmail('');
            setPassword('');
        }catch(err){
            console.err(err);
        }
    }

    return (
        <>
            <h1>Log in</h1>
            <form>
                <label htmlFor={'email'}>E-Mail</label>
                <input onChange={(e)=>{setEmail(e.target.value)}} 
                    value={email} 
                    type={'text'} 
                    name={'email'} 
                    id={'email'} 
                />
                <label htmlFor={'password'}>Password</label>
                <input onChange={(e)=>{setPassword(e.target.value)}} 
                    value={password} 
                    type={'text'} 
                    name={'password'} 
                    id={'password'} 
                />
                <button onClick={fetchLogin}>Sign In</button>
            </form>
            
        </>
    )
}

export default LoginForm