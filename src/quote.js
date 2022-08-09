const author = document.querySelector('.author')
const quote_body = document.querySelector('.quote')
const change_quote = document.querySelector('.change-quote')

async function getQuote() {
    const URL = "https://favqs.com/api/qotd"
    try {
        let result = await fetch(URL);
        let quote = await result.json();
        quote_author = quote.quote.author
        /* console.log(quote.quote.author)
        console.log(quote.quote.body) */
        quote_body.innerHTML = quote.quote.body
        author.innerHTML = quote.quote.author
    } catch (err) {
        quote_body.innerHTML = "There isn't internet"
        author.innerHTML = 'error'
        /* console.log(err) */
    }
}
getQuote()

change_quote.onclick = () => {
    getQuote() 
}

 


