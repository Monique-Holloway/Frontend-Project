//FrontEndProject.js;
let restaurantArray = [{'picture': 'test.png', 'title': 'Chilis', 'reviews': ['review1', 'review2', 'review3']}, {'picture': 'test2.png', 'title': 'Applebees', 'reviews': ['review1', 'review2', 'review3']}]
let weatherArray = [{'rainy': 'cold', 'sun': 'hot', 'icy' : ['slippery', 'wet']}]
let cityArray = [
    {
        "city": "Houston",
        "lat": 29.817402,
        "lon": -95.541373
    }
]

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM is loaded")
    function renderRestaurant(restaurantArray) {
        let restaurantHTML = restaurantArray.map((currentRestaurant) => {
            return `
            <div class="restaurant-container" id="restaurant-container">
            <div class="card" style="width: 18rem;">
            <div class="icon" id="restaurant-icon"><img src="https://media-cdn.tripadvisor.com/media/photo-f/09/58/d7/8e/${location_id}.jpg" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title" id="card-title">${results.data[0].default_options[1].restaurant}</h5>
            <p class="card-text">${results.category_counts.restaurants}</p>
            <a href="#" class="btn btn-primary">Website</a>
          </div>   
            `;

        });
        return restaurantHTML.join("");
    }

    function renderWeather(weather) {
        // let weatherHTML = restaurantArray.map((currentWeather) => {
            // Take rest of weather properties and fill out
            // Probably an icon look up
            return `
                <div class="weather-container" id="weather-container">
                <div class="icon" id="weather-icon"><img src="http://openweathermap.org/img/wn/${weather.icon}@2x.png" style= 'height:10rem'/></div>
                <div class="temp" id="weather-temp">${weather.temp.toFixed()} °F</div>
                <div class="summary" id="weather-summary">${weather.summary}</div>
                <div class="location" id="weather-location">${weather.location}</div>
              </div>
            `;

        // });
        // return weatherHTML.join("");
    }
    
    // let lon;
    // let lat;
    const kelvin = 273;

    let flightButton = document.getElementById('flight-button'); 

    flightButton.addEventListener("click", () => {

        let city = document.getElementById("city-input").value;

        console.log(city);

        // Get city's lat long from API based off the name input into the city-input input
        // Replace with API call
        // let cityObj = cityArray.find((element) => element.city.toLocaleLowerCase() == city.toLocaleLowerCase());

        // Check the cityObj exist so we don't get screw ups
        if (city) {
            // lat = cityObj.lat;
            // lon = cityObj.lon;
            
            let weatherApi = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=dc079ec19c2fb7606fcd057f700ed7a1&q=${city}`;

            fetch(weatherApi)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                
                let weatherData = {
                    temp: (data.list[0].main.temp - 273.15) * 9/5 + 32,
                    summary: data.list[0].weather[0].description,
                    icon: data.list[0].weather[0].icon,
                    location: city 
                }

                // Format the object passed to the renderWeather
                document.getElementById("weather-content").innerHTML = renderWeather(weatherData);

                // 
            });

            let encodedBody = new URLSearchParams();
            encodedBody.append("q", city);
            encodedBody.append("language", "en_US");

            let restaurantApi = "https://worldwide-restaurants.p.rapidapi.com/detail"
            let restaurantApiKey = "3e280e10camsh92162b5acf469e4p15ee1ejsn5ec32d8c9fb8"
            
                fetch("https://worldwide-restaurants.p.rapidapi.com/typeahead", {
                    "method": "POST",
                    "headers": {
                    "content-type": "application/x-www-form-urlencoded",
                    "x-rapidapi-host": "worldwide-restaurants.p.rapidapi.com",
                    "x-rapidapi-key": restaurantApiKey
                     },
                    "body": encodedBody
                })
                .then(response => {
                    return response.json();
                })
                .then((locationData) => {
                    console.log(locationData)

                    let restaurantEncodedBody = new URLSearchParams();
                    // restaurantEncodedBody.append("limit", "30");
                    restaurantEncodedBody.append("language", "en_US");
                    restaurantEncodedBody.append("currency", "USD");
                    restaurantEncodedBody.append("location_id", locationData.results.data[0].result_object.location_id);

                    fetch(restaurantApi, {
                        "method": "POST",
                        "headers": {
                        "content-type": "application/x-www-form-urlencoded",
                        "x-rapidapi-key": restaurantApiKey,
                        "x-rapidapi-host": "worldwide-restaurants.p.rapidapi.com"
                        },
                        "body": restaurantEncodedBody
                    })
                    .then(response => {
                        return response.json();
                    })
                    .then((restaurantData) => {
                        console.log(restaurantData)
                    })
                    .catch(err => {
                        console.error(err);
                });
                })
                .catch(err => {
                    console.error(err);
                });

           
            // let myHeaders = new Headers();
            // myHeaders.append("Authorization", "Bearer GGs_dGvtT4SwQzpjI36UOpO81iXY6ODulTXvnKkJUlU0QFGU2-SeF7TrZgM4JuJH54aA8yrMTea90A-9dnsPZ6LtJLLTFY-0pM_Z-SF-WWCr29X3IKN3Kl21jTkRYnYx");
            
            // let requestOptions = {
            //   method: 'GET',
            //   headers: myHeaders,
            //   redirect: 'follow',
            //   mode: "no-cors"
            // };
            
            // fetch(restaurantApi, requestOptions)
            //   .then(response => response.text())
            //   .then(result => console.log(result))
            //   .catch(error => console.log('error', error));

        }

        else {
            console.log("not found!");
        }
        // if (navigator.geolocation) {
        //   navigator.geolocation.getCurrentPosition((position) => {
        //     console.log(position);
        //     
        // });
      // }
    });
});

    // flightButton.addEventListener("click", (event) => {
    //     event.preventDefault();
    //     console.log('yay');
    //     let search_string = event.target[0].value;
    
       
//         fetch(``)
//             .then((response) => response.json())
//             .then((weather_data ) => {
//                 console.log(weather_data);
//                 cardContainer.innerHTML = renderRestaurant(restaurantArray); 
//             })     
        
         
//     });  
    
// })