function getWeather() {
    var city = document.getElementById("cityInput").value;
    var url = "https://api.weatherapi.com/v1/current.json?key=87961c2606b64ef88ad102154232706&q=" + city;

    const weatherInfo = document.getElementById("weatherInfo");
    weatherInfo.innerHTML="";
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        
        imgUrl = data.current.condition.icon;
        city = data.location.name;
        nation = data.location.country;
        time = data.location.localtime;
        temp = data.current.temp_c;
        text = data.current.condition.text;
        weatherInfo.innerHTML = weatherInfo.innerHTML + ` <div class="container">
        <div class="top">
              <div class="location">
                  <div class="content">
                    ${city}<br>${nation}<br>${time}
                  </div> 
              </div>
              <div class="condition">
                <div class="temp">
                  ${temp}°C
                </div>
                    <div class="text">
                      ${text}
                    </div>
                  
              </div>
        </div>
        <div class="image">
              <img src="${imgUrl}" alt="">
        </div>
      </div>
     ` ;
                                
                                
                                
                                
      })
      .catch(error => {
        console.log(error);
      });
  }
  