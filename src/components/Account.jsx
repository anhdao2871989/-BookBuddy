/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */
import { useState, useEffect } from 'react'
import Reservations from './Reservations'

function Account({token}){
    const [reservations, setReservations] = useState([])

    const fetchReservations = async()=>{
        try{
            const endpoint = `api/reservations`;
            const url = `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/${endpoint}`;
            const response = await fetch(url, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            const result = await response.json();
            setReservations(result.reservation);
        }catch(err){
            console.error(err);
        }
    }

    useEffect(()=>{
        fetchReservations();
    },[reservations])

    return (
        <>
        <div className='books-container'>
            <h1>Account</h1>
            <div className='books-wrapper'>
        {
            (token?
                ((reservations.length > 0)?
                (reservations.map((reservation)=>{
                    return <Reservations key={reservation.id} reservation={reservation} setReservations={setReservations} token={token} />
                })):(<p>No books currently checked out</p>))
                :<h1>please log in</h1>)
        }
            </div>
        </div>
        </>
    )
}

export default Account