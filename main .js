


const city = document.querySelector('.input');


console.log(city);

const srcbtn = document.querySelector('.btn');

async function checkWeather(city) {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city} &appid=84f1aecc91e7887fe11337f9eeaf99a0&units=metric`);

    if (res.status == 404) {
        document.querySelector(".invalid").style.display = 'block';
        document.querySelector(".hide").style.display = 'none';


    }

    else {

        const data = await res.json();
        console.log(data);

        document.querySelector('.temp').textContent = Math.round(data.main.temp) + '°c';
        document.querySelector('.city').textContent = data.name;
        document.querySelector('.humidity').textContent = data.main.humidity;
        document.querySelector('.wind').textContent = data.wind.speed;

        if (data.weather[0].main == 'Clouds') {
            document.querySelector('.cloud').src = './images/clear.png';
        }
        else if (data.weather[0].main == 'Clear') {
            document.querySelector('.cloud').src = './images/clear.png';
        }
        else if (data.weather[0].main == 'Rain') {
            document.querySelector('.cloud').src = './images/rain.png';
        }
        else if (data.weather[0].main == 'Drizzle') {
            document.querySelector('.cloud').src = './images/drizzle.png';
        }
        else if (data.weather[0].main == 'Mist') {
            document.querySelector('.cloud').src = './images/mist.png';
        }

        document.querySelector('.hide').style.display = 'block';
        document.querySelector('.invalid').style.display = 'none';




    }


}

srcbtn.addEventListener('click', () => {
    checkWeather(city.value)
}); 
 city.addEventListener('click', () => {
      city.value = '';
})
