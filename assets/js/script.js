var apiKey = "bba9f3cc16db6404ea6ea68f955a43a4";
var form = document.querySelector(".top-banner form");
var input = document.querySelector(".top-banner input");
var msg = document.querySelector(".top-banner .msg");
var list = document.querySelector(".ajax-section .cities");
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

form.addEventListener("submit", e => {
    e.preventDefault();
    var listItems = list.querySelectorAll(".ajax-section .city");
    var inputVal = input.value;
  
    //ajax here
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
  

    ///// fetch to request data from api


    fetch(url)
      .then(response => response.json())
      .then(data => {
        var { main, name, sys, weather } = data;
        var icon = `https://openweathermap.org/img/wn/${
          weather[0]["icon"]
        }@2x.png`;
  
        var li = document.createElement("li");
        li.classList.add("city");

        // create weather card here 
        var markup = 
        `<h2 class="city-name data-name="${name},${sys.country}">
            <span>${name}</span>
            <sup>${sys.country}</sup>
          </h2>
          <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
          <figure class="card-body">
            <img class="city-icon" src=${icon} alt=${weather[0]["main"]}>
            <figcaption class="description">${weather[0]["description"]}</figcaption>
          </figure>`;

        li.innerHTML = markup;
        list.appendChild(li);
      })
      .catch(() => {
        msg.textContent = "Please search for a valid city!!!!";
        
      });
  
    msg.textContent = "";
    form.reset();
    input.focus();
  });



  
  
