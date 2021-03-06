export default class CitiesStorageService {
  static getCities() {
    const cities = localStorage.getItem('cities');
    return cities ? JSON.parse(cities) : [];
  }

  static setCity(city) {
    const cities = this.getCities();
    const index = cities.findIndex((c) => c === city);
    if (index === -1) {
      cities.push(city);
      localStorage.setItem('cities', JSON.stringify(cities));
    }
  }

  static removeCity(city) {
    const cities = this.getCities();
    const index = cities.findIndex((c) => c === city);
    if (index > -1) {
      cities.splice(index, 1);
      localStorage.setItem('cities', JSON.stringify(cities));
    }
  }
}
