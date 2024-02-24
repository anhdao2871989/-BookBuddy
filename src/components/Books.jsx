/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import { useEffect } from 'react'
import Book from './Book' 

function Books({books, setBooks}){

    const fetchBooks = async()=>{
        try{
            const endpoint = 'api/books';
            const url = `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/${endpoint}`;
            const response = await fetch(url);
            const result = await response.json();
            setBooks(result.books);
        }catch(err){
            console.error(err);
        }
    }

    useEffect(()=>{
        fetchBooks();
    },[])

    return (
        <>
            <div className='books-container'>
                <h1>Books</h1>
                <div className='books-wrapper'>
                {
                    (books)?(
                    books.map((book)=>{
                        return <Book key={book.id} book={book}/>
                    })):(
                    <p>no books yet</p>)
                }
                </div>
            </div>
        </>
    )
}

export default Books