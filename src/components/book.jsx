import { Link } from 'react-router-dom'

function Book({book}){

    return (
        <>
            <div className='book'>
                <h3>{book.title}</h3>
                <div className='book-details'>
                    <img src={book.coverimage}></img>
                    <Link to={`/books/${book.id}`}>
                        <button><h3>Details</h3></button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Book