//FrontEndProject.js;
let restaurantArray = [{'picture': 'test.png', 'title': 'Chilis', 'reviews': ['review1', 'review2', 'review3']}, {'picture': 'test2.png', 'title': 'Applebees', 'reviews': ['review1', 'review2', 'review3']}]
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM is loaded")
    function renderRestaurant(restaurantArray) {
        let restaurantHTML = restaurantArray.map((currentRestaurant) => {
            return `
          
                <div class="card" style="width: 18rem;">
                <img src="${currentRestaurant.picture}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${currentRestaurant.title}</h5>
                <p class="card-text">${currentRestaurant.reviews}</p>
                <a href="#" class="btn btn-primary">Website</a>
                </div>
            `;

        });
        return restaurantHTML.join("");
    }
    let flightButton = document.getElementById('flight-button');
    let cardContainer = document.getElementById('cardContainer'); 
    flightButton.addEventListener("click", (event) => {
        event.preventDefault();
        console.log(event.target[1].value);
        let search_string = event.target[1].value;
    
       
        fetch(`https://airlabs.co/api/v9/flights?api_key=8f6b8310-9485-404f-a71a-eab743737e9d`)
            .then((response) => response.json())
            .then((flight_to_data ) => {
                console.log(flight_to_data );
                cardContainer.innerHTML = renderRestaurant(restaurantArray);  
                // fetch('https://api.yelp.com/v3/businesses/GGs_dGvtT4SwQzpjI36UOpO81iXY6ODulTXvnKkJUlU0QFGU2-SeF7TrZgM4JuJH54aA8yrMTea90A-9dnsPZ6LtJLLTFY-0pM_Z-SF-WWCr29X3IKN3Kl21jTkRYnYx')
                // .then((response) => response.json())
                // .then((rest_data) => {
                //     console.log(rest_data)
    
                //     title.innerHTML = `info here`
                // })
                // .catch(error => {
                //     console.error(error);
                // });
            }) 
    });  
    
})