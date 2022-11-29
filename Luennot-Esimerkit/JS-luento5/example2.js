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

function getAirport(icao) {
    fetch('http://127.0.0.1:3000/airport/' + icao);
}

getAirport('efhk');

console.log('Program stopping')