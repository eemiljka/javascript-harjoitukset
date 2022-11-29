// API

console.log('Program starting');

/**
 function fetchSuccess(response) {
    console.log('ok', response)
    response.json().then(function (data) {
        console.log('json data: ', data)
    }).catch(function (error) {
        console.log(error);
    });

}

 function fetchError(error) {
    console.log('error', error)
}

 fetch('https://api.chucknorris.io/jokes/random').then(fetchSuccess).catch(fetchError)

 */

// Siistimpi, modernimipi versio ylemmästä
async function getJoke() {
    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        console.log('response: ', response)
        if (response.ok) {
            const data = await response.json();
            console.log('data', data)
            console.log('Joke:', data.value)
        } else {
            // Fetch ok, mutta palauttaa HTTP virhekoodin, esim '404'.
            console.log('Not found', response.status)
        }
    } catch (error) {
        console.log('No internet connection = No joke :(');
    }

}

getJoke();

console.log('Program stopping')


