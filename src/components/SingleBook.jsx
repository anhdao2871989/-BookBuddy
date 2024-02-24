/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SingleBookDetails from './singleBookdetails'

function SingleBook({token}){
    const {id} = useParams();
    const [bookDetails, setBookDetails] = useState(null)

    const fetchSingleBook = async()=>{
        try{
            const endpoint = `api/books/${id}`;
            const url = `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/${endpoint}`;
            const response = await fetch(url);
            const result = await response.json();
            setBookDetails(result.book);
        }catch(err){
            console.error(err);
        }
    }

    useEffect(()=>{
        fetchSingleBook();
    },[bookDetails])

    return (
        <>
            {
                (bookDetails && <SingleBookDetails bookDetails={bookDetails} token={token} />)
            }
        </>
    )
}

export default SingleBook