// Personal API Key for OpenWeatherMap API
const apiKey = `${process.env.OPEN_WEATHER_API_KEY}&units=imperial`;

async function getWeatherData(city, country) {
  const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`;
  const response = await fetch(baseUrl);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();
  return data.main.temp;
}

document.getElementById('generate').addEventListener('click', handleClick);

async function handleClick() {
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;
  const userResponse = document.getElementById('feelings').value;
  const date = new Date().toLocaleDateString();

  try {
    const temperature = await getWeatherData(city, country);

    const data = {
      temperature,
      date,
      userResponse,
    };

    await postData('/add', data);
    await updateUI();
  } catch (error) {
    console.error('Error:', error);
  }
}



async function postData(url, data) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return await response.json();
}

async function updateUI() {
  const response = await fetch('/data');

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();
  
  document.getElementById('date').innerHTML = `Date: ${data.date}`;
  document.getElementById('temp').innerHTML = `Temperature: ${data.temperature}°F`;
  document.getElementById('content').innerHTML = `Feeling: ${data.userResponse}`;
}
