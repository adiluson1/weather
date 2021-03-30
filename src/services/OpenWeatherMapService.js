import axios from 'axios';

const apiKey = process.env.VUE_APP_OPENWEATHERMAP_KEY;

class OpenWeatherMapService {
  constructor(key) {
    this.apiKey = key;
    this.url = 'https://api.openweathermap.org';
  }

  async byCity(city = '', lang = 'ru') {
    const url = `${this.url}/data/2.5/weather`;
    const params = {
      q: city,
      appid: this.apiKey,
      lang,
      units: 'metric',
    };
    const { data } = await axios.get(url, { params });
    const { name, wind } = data;
    const { description, icon } = data.weather[0];

    return Object.assign(data.main, {
      name, wind, description, icon,
    });
  }
}

export default new OpenWeatherMapService(apiKey);
