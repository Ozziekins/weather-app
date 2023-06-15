# Weather App

The Weather App is a simple web application that allows users to check the current weather conditions for a specific location. With a clean and intuitive interface, users can easily view the temperature, feels-like temperature, humidity, and a descriptive icon representing the weather conditions.

## Features
- Automatic geolocation detection to provide weather information for the user's current location
- Search functionality to retrieve weather data for a specific city
- Real-time updates of weather information based on the selected location
- Temperature conversion between Celsius and Fahrenheit units
- Dynamic weather icons that represent the current weather conditions

## Technologies Used
- Svelte: A lightweight JavaScript framework for building user interfaces
- Axios: A promise-based HTTP client for making API requests
- OpenWeatherMap API: Used for retrieving weather data based on location
- HTML5 Geolocation API: Used to detect the user's current location
- SCSS: A CSS preprocessor for adding styles to the application

## Getting Started
To run the Weather App locally, follow these steps:

1. Clone the repository: `git clone https://github.com/Ozziekins/weather-app.git`
2. Navigate to the project directory: `cd weather-app`
3. Install the dependencies: `npm install`
4. Set up your OpenWeatherMap API key by creating a .env file and adding the line: `VITE_WEATHER_API_KEY=your-api-key`
5. Start the development server: `npm run dev -- --open`

## Configuration
The application uses environment variables for configuration. The following variable needs to be set in the `.env` file:

- `VITE_WEATHER_API_KEY`: Your API key for the OpenWeatherMap API

## Acknowledgements
The Weather App was inspired by the desire to provide a simple and visually appealing weather application. Special thanks to the following resources:

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather data API
- [Weather Icons](http://erikflowers.github.io/weather-icons) for the beautiful weather icons used in the application

## Contact
For any inquiries or questions, please reach out to the project maintainer:

[Ozioma Okonicha](https://github.com/Ozziekins)