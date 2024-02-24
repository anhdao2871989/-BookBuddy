import { Link } from 'react-router-dom'

function Reservations({reservation, setReservations, token}){

    const handleClick = async()=>{
        try{
            const endpoint = `api/reservations/${reservation.id}`;
            const url = `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/${endpoint}`;
            await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            setReservations([]);
        }catch(err){
            console.error(err);
        }
    }

    return (
        <>
            <div className='book'>
                <h3>{reservation.title}</h3>
                <div className='book-details'>
                    <img src={reservation.coverimage}></img>
                    <Link onClick={()=>{handleClick()}}>
                        <button><h3>Return</h3></button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Reservations