const apiEndpoints = {
  getWeather: (city: string) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`,
  getRandomActivity: 'https://www.boredapi.com/api/activity',
  getNews: `https://gnews.io/api/v4/top-headlines?&token=${process.env.REACT_APP_GNEWS_TOKEN}&lang=en&max=8`,
};

export default apiEndpoints;
