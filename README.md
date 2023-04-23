# weather-app
Weather App
This is a simple weather app that allows users to retrieve weather information based on location. The app retrieves data from the OpenWeatherMap API and displays it to the user.

##Features
Users can enter a location (city, state, country) to retrieve weather information.
The app displays the current temperature, weather conditions, and an icon indicating the current weather.
Users can also view the high and low temperatures for the day, as well as the humidity and wind speed.
The app includes basic error handling for invalid user input and API errors.

#Requirements
To run this app, you will need:

Node.js
Express.js
Body-parser
Cors
OpenWeatherMap API key

#Installation
To install the necessary packages, run the following command:


`npm install`

Next, create a .env file in the root directory of the project, and add your OpenWeatherMap API key as follows:


`OPEN_WEATHER_API_KEY=<your_api_key>`

Finally, start the server by running the following command:


`node server.js`

`The app will be available at http://localhost:8000/.`

#Usage
To use the app, simply enter a location (city, state, country) in the input field and click the "Get Weather" button. The app will retrieve weather information from the OpenWeatherMap API and display it to the user.

#Contributing
If you'd like to contribute to this project, feel free to fork the repository and submit a pull request.

#License
This project is licensed under the MIT License. See the LICENSE file for details.
