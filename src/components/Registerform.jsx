import { useState } from 'react'

function RegisterForm({setUser, setToken}){
    const [creds, setCreds] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const registerAccount = async (event) => {
        event.preventDefault();
        try{
            console.log(`email: ${creds.email} ---- pass: ${creds.password}`)
            // POST
            const endpoint = 'api/users/register';
            const url = `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/${endpoint}`;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstname: creds.firstName,
                    lastname: creds.lastName,
                    email: creds.email,
                    password: creds.password
                })
            });
            const result = await response.json();
            console.log(result);
            if(result.message == 'Registration successful'){
                setUser(`${creds.email}`);
                setToken(result.token);
            } else {
                // error in the registration process
                console.error(`Registration failed due to: ${result.message}`);
            }
            // reset values for email and password.
            setCreds({
                firstName: creds.firstName,
                lastName: creds.lastName,
                email: creds.email,
                password: ''
            })
        }catch(err){
            console.err(err);
        }
    }
    return (
        <>
            <h1>Register</h1>
            <form>
                <label htmlFor={'first-name'}>First Name</label>
                <input 
                    onChange={(e)=>{setCreds({
                        firstName: e.target.value,
                        lastName: creds.lastName,
                        email: creds.email,
                        password: creds.password
                    })}} 
                    value={creds.firstName} 
                    type={'text'} 
                    name={'first-name'} 
                    id={'first-name'} 
                />
                <label htmlFor={'last-name'}>Last Name</label>
                <input 
                    onChange={(e)=>{setCreds({
                        firstName: creds.firstName,
                        lastName: e.target.value,
                        email: creds.email,
                        password: creds.password
                    })}} 
                    value={name.last} 
                    type={'text'} 
                    name={'last-name'} 
                    id={'last-name'} 
                />
                <label htmlFor={'email'}>E-Mail</label>
                <input 
                    onChange={(e)=>{setCreds({
                        firstName: creds.firstName,
                        lastName: creds.lastName,
                        email: e.target.value,
                        password: creds.password 
                    })}} 
                    value={creds.email} 
                    type={'text'} 
                    name={'email'} 
                    id={'email'} 
                />
                <label htmlFor={'password'}>Password</label>
                <input 
                    onChange={(e)=>{setCreds({
                        firstName: creds.firstName,
                        lastName: creds.lastName,
                        email: creds.email,
                        password: e.target.value 
                    })}}
                    value={creds.password} 
                    type={'text'} 
                    name={'password'} 
                    id={'password'} 
                />
                <button onClick={registerAccount}>Register Account</button>
            </form>
        </>
    )
}

export default RegisterForm