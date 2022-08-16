const author = document.querySelector('.author')
const quote_body = document.querySelector('.quote')
const change_quote = document.querySelector('.change-quote')

const arr_quote = [
    [["David O. McKay"],["Find a purpose in life so big it will challenge every capacity to be at your best."]],
    [[ 'Woody Allen'],[ "I'm not afraid to die. I just don't want to be there when it happens."]],  
    [['Sir Francis Bacon'],['Knowledge is power.']],
    [['author unknown'],['A real friend is someone who walks in when all other world walks out.']],
    [['Honore de Balzac'],['Behind every great fortune there is a crime.']],
    [['Alexander Graham Bell'],['When one door closes, another opens; but we often look so long and so regretfully upon the closed door that we do not see the one which has opened for us.']],
    [['Otto von Bismarck'],["Only a fool learns from his own mistakes. The wise man learns from the mistakes of others."]]
]
let counter = 0;

async function getQuote() {
    const URL = "https://favqs.com/api/qotd"
    try {
        let result = await fetch(URL
            /* {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'no-cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *client
            body: JSON.stringify(data) // body data type must match "Content-Type" header
          } */);
        //console.log(result)
        let quote = await result.json();
        quote_author = quote.quote.author

        /* console.log(quote.quote.author)
        console.log(quote.quote.body) */
        
        quote_body.innerHTML = quote.quote.body
        author.innerHTML = quote.quote.author
    } catch (err) {
        if(counter > arr_quote.length){counter = 0}
        quote_body.innerHTML = arr_quote[counter][0] 
        author.innerHTML =  arr_quote[counter][1] 
        counter++
        console.log(err)
    }
}
getQuote()

change_quote.onclick = () => {
    getQuote() 
}

 


