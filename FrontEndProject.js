FrontEndProject.js;

document.addEventListener("DOMcontentLoaded", function () {
    function renderRestaurant(restaurantArray) {
        let restaurantHTML = restaurantArray.map((currentRestaurant) => {
            return `
        <div class=cardContainer>   
            <div class="card" style="width: 18rem;">
            <img src="Images/FrontEndHeaderPic.PNG" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Title of Restaurant</h5>
              <p class="card-text">Restaurant Reviews...</p>
              <a href="#" class="btn btn-primary">Website</a>
            </div>
        </div>`

        });
    }

    return restaurantHTML.join("");
})


let cardContainer = document.getElementById('cardContainer');
let flight_data = flight_data 
let rest_data = rest_data
    //results from flight search 

 
    data.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event.target.data.value);
    let search_string = event.target.data.value;

        document
        .getElementById("data")
        .addEventListener("submit", function (e) {
            fetch(`https://api.yelp.com/v3GGs_dGvtT4SwQzpjI36UOpO81iXY6ODulTXvnKkJUlU0QFGU2-SeF7TrZgM4JuJH54aA8yrMTea90A-9dnsPZ6LtJLLTFY-0pM_Z-SF-WWCr29X3IKN3Kl21jTkRYnYx`)
                .then((response) => response.json())
                .then((flight_data) => {
                console.log(flight_data);


                 fetch('https://api.yelp.com/v3GGs_dGvtT4SwQzpjI36UOpO81iXY6ODulTXvnKkJUlU0QFGU2-SeF7TrZgM4JuJH54aA8yrMTea90A-9dnsPZ6LtJLLTFY-0pM_Z-SF-WWCr29X3IKN3Kl21jTkRYnYx')
                    .then((response) => response.json())
                    .then((rest_data) => {
                        console.log(rest_data)

                        title.innerHTML = `info here`
                    });
                });
            }); 
        });   
    });
})    



