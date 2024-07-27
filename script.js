const URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const KEY = "f37113979fdfe3dccacdf16569dbf853"
const search = document.querySelector('.upper input');
const btn = document.querySelector('.upper button');
const wimg = document.querySelector('.bich img')
const err = document.querySelector('.eror')
const contenttt = document.querySelector(".full-Content")




  async function checkWeather(city){
  const response = await fetch(`${URL}${city}&appid=${KEY} `);
  let data = await response.json();

  if (response.status == 404) {
    err.style.display="block";
    contenttt.style.display = "none";
  } else {

    err.style.display="none";
    contenttt.style.display = "block";


    document.querySelector('.temp').innerHTML =` ${Math.round(data.main.temp)}°C`;
    document.querySelector('.city').innerHTML = `${city}`
    document.querySelector('.humidity h2').innerHTML =data.main.humidity+"%";
    document.querySelector('.wind-speed h2').innerHTML =data.wind.speed+"km/h";
     
    if(data.weather[0].main == 'Clouds'){
      wimg.src = "images/clouds.png"
    } else if (data.weather[0].main == 'Clear'){
      wimg.src = "images/clear.png"
  
    } else if (data.weather[0].main == 'Drizzle'){
      wimg.src = "images/drizzle.png"
    }
      else if (data.weather[0].main == 'Rain'){
      wimg.src = "images/rain.png"
    }
      else if (data.weather[0].main == 'Mist'){
      wimg.src = "images/mist.png"
    }
     
  }
  document.querySelector('.temp').innerHTML =` ${Math.round(data.main.temp)}°C`;
  document.querySelector('.city').innerHTML = `${city}`
  document.querySelector('.humidity h2').innerHTML =data.main.humidity+"%";
  document.querySelector('.wind-speed h2').innerHTML =data.wind.speed+"km/h";
   
  if(data.weather[0].main == 'Clouds'){
    wimg.src = "images/clouds.png"
  } else if (data.weather[0].main == 'Clear'){
    wimg.src = "images/clear.png"

  } else if (data.weather[0].main == 'Drizzle'){
    wimg.src = "images/drizzle.png"
  }
    else if (data.weather[0].main == 'Rain'){
    wimg.src = "images/rain.png"
  }
    else if (data.weather[0].main == 'Mist'){
    wimg.src = "images/mist.png"
  }
   
}

 btn.addEventListener("click" ,() => {
   checkWeather(search.value);
 })
