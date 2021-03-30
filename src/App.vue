<template>
  <v-app>
    <v-app-bar
      app
      absolute
    >
      <v-spacer></v-spacer>
      <language-menu/>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-form @submit.prevent="getWeather">
          <v-row justify="center">
            <v-col md="10">
              <v-text-field
                :label="$vuetify.lang.t('$vuetify.mainInputLabel')"
                v-model="city"
                @focus="errorMessage = ''"
                :error-messages="errorMessage"
              />
            </v-col>
            <v-col cols="auto" class="mt-2">
              <v-btn type="submit">{{ $vuetify.lang.t('$vuetify.button') }}</v-btn>
            </v-col>
          </v-row>
        </v-form>
        <v-row justify="center">
          <v-chip
            class="mr-2"
            close
            v-for="(c, index) in cities"
            :key="index"
            @click:close="removeFromCities(index)"
            @click="setCity(index)"
          >
            {{ c }}
          </v-chip>
        </v-row>
        <v-row justify="center" v-if="weather">
          <v-col md="5">
            <weather-scene
              :config="weather"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import weatherService from './services/OpenWeatherMapService';
import WeatherScene from './components/WeatherScene.vue';
import CitiesStorageService from './services/CitiesStorageService';
import LanguageMenu from './components/LanguageMenu.vue';

export default {
  name: 'App',

  components: {
    WeatherScene,
    LanguageMenu,
  },

  data: () => ({
    langs: ['ru', 'eng'],
    lang: 'ru',
    cities: CitiesStorageService.getCities(),
    city: '',
    errorMessage: '',
    weather: null,
  }),
  methods: {
    getWeather() {
      if (this.city) {
        weatherService.byCity(this.city, this.$vuetify.lang.current)
          .then((response) => {
            this.weather = response;
            CitiesStorageService.setCity(this.city);
            this.cities = CitiesStorageService.getCities();
          })
          .catch(() => {
            this.errorMessage = this.$vuetify.lang.t('$vuetify.errorMsg');
          });
      }
    },
    removeFromCities(index) {
      CitiesStorageService.removeCity(this.cities[index]);
      this.cities.splice(index, 1);
    },
    setCity(index) {
      const city = this.cities[index];
      if (city) {
        this.city = city;
        this.errorMessage = '';
      }
    },
  },
};
</script>
