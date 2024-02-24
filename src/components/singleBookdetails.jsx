function SingleBookDetails({bookDetails, token}){

    const handleClick = async()=>{
        try{
            const endpoint = `api/books/${bookDetails.id}`;
            const url = `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/${endpoint}`;
            await fetch(url, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    available: 'false',
                }),
            });
        }catch(err){
            console.error(err);
        }
    }


    return (
        <>
            <ul>
                <div>
                    <h1>{bookDetails.title}</h1>
                    <p>by {bookDetails.author}</p>
                </div>
                <li>{bookDetails.description}</li>
                <img src={bookDetails.coverimage}></img>
                {
                    bookDetails.available?
                    (
                        token? 
                        (
                            <>
                            <li>This book is currently available for checkout</li>
                            <button onClick={()=>{handleClick()}}><h3>Checkout</h3></button>
                            </>
                        ): // user does not present a valid token
                        <li>This book is currently available for checkout, please log in to check book out.</li>
                    ): // book is not available
                    <li>This book is currently unavailable for checkout</li>
                }
            </ul>
        </>
    )
}

export default SingleBookDetails