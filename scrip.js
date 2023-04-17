const inputBox = document.querySelector('.inputBox');
const searchButton = document.querySelector('.inputButton');
const temperature = document.querySelector('.temperatura');
const cidadeInfo = document.querySelector('.cidade');
const humidade = document.querySelector('.humidade');
const velocidadeVento = document.querySelector('.vento');
const container = document.querySelector('.container');
const erro = document.querySelector('.erro');
const imagem =document.querySelector('.Imagem');


searchButton.addEventListener('click', () =>{
    const city = inputBox.value;
    
    const apiKey = 'af9eab819a4268757e2df5736558e5e7';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
      const weatherData = data;
      console.log(weatherData);
      const { main: { temp, humidity }, weather: [{ main: weatherMain }], wind: { speed }, name: cidade } = weatherData;
      temperature.innerHTML = (temp - 273.15).toFixed(1) + 'C';
      cidadeInfo.innerHTML = city;
      humidade.innerHTML = humidity + '%';
      velocidadeVento.innerHTML = (speed*3.6).toFixed(0) + ' Km/h';
      container.style.height = '700px';
      erro.innerHTML = '';

      switch(weatherMain) {
        case 'Clouds':
            imagem.src = 'img/clouds.png';
          break;
        case 'Rain':
            imagem.src = 'img/rain.png';
          break;
        case 'Mist':
            imagem.src = 'img/mist.png';
          break;
        case 'Snow':
            imagem.src = 'img/snow.png';
          break;
        case 'Drizzle':
            imagem.src = 'img/drizzle.png';
          break;
        case 'Clear':
            imagem.src = 'img/clear.png';
          break;
        default:
            imagem.src = 'img/clear.png';
      }


console.log(`The weather in ${cidade} is ${weatherMain} with a temperature of ${temp} K, wind speed of ${speed} m/s and humidity of ${humidity}%.`);

    })

    .catch(error => {
        console.error(error);
        erro.innerHTML = 'Cidade não encontrada :(';
        container.style.height = '90px';

    
})
});


//af9eab819a4268757e2df5736558e5e7