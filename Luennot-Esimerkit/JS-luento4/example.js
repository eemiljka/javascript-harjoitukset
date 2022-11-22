let helloCounter = 0;

function sayHello(name) {
    console.log("Moro, ", name);
    helloCounter++;
    if (helloCounter > 3) {
        // Tämä pysäyttää setIntervallin
        clearInterval(timer);
    }
}

// Tämä pyörii kerran
setTimeout(sayHello, 3000, 'Iines')

sayHello("Matti")

// Tämä pyörii ikuisesti, JOS clearIntervallia ei tehdä...
const timer = setInterval(sayHello, 2000, 'Roope')


// Options for retrieving location information (optional)
const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

// A function that is called when location information is retrieved
function success(pos) {
    const crd = pos.coords;

    // Printing location information to the console
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);

    // Use the leaflet.js library to show the location on the map (https://leafletjs.com/)
    const map = L.map('map').setView([crd.latitude, crd.longitude], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([crd.latitude, crd.longitude]).addTo(map)
        .bindPopup('I am here.')
        .openPopup();
}

// Function to be called if an error occurs while retrieving location information
function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

// Starts the location search
navigator.geolocation.getCurrentPosition(success, error, options);

