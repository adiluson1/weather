<template>
  <v-card>
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="headline">
          {{ config.name }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ config.description }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>
      <v-row align="center">
        <v-col
          class="display-3"
          cols="6"
        >
          {{ config.temp }}&deg;C
        </v-col>
        <v-col cols="6" class="text-right">
          <v-img
            :src="`http://openweathermap.org/img/wn/${config.icon}@2x.png`"
            alt="Sunny image"
            width="92"
          ></v-img>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          {{ $vuetify.lang.t('$vuetify.feelsLike') }}
        </v-col>
        <v-col>
          {{ config.feels_like }}&deg;C
        </v-col>
      </v-row>
    </v-card-text>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-thermometer</v-icon>
      </v-list-item-icon>
      <v-list-item-title>{{ $vuetify.lang.t('$vuetify.min') }}</v-list-item-title>
      <v-list-item-subtitle>{{ config.min }}&deg;C</v-list-item-subtitle>
    </v-list-item>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-thermometer</v-icon>
      </v-list-item-icon>
      <v-list-item-title>{{ $vuetify.lang.t('$vuetify.max') }}</v-list-item-title>
      <v-list-item-subtitle>{{ config.max }}&deg;C</v-list-item-subtitle>
    </v-list-item>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-send</v-icon>
      </v-list-item-icon>
      <v-list-item-title>{{ $vuetify.lang.t('$vuetify.wind') }}</v-list-item-title>
      <v-list-item-subtitle>{{ config.wind.speed }} km/h</v-list-item-subtitle>
    </v-list-item>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-arrow-collapse-vertical</v-icon>
      </v-list-item-icon>
      <v-list-item-title>{{ $vuetify.lang.t('$vuetify.pressure') }}</v-list-item-title>
      <v-list-item-subtitle>{{ config.pressure }}</v-list-item-subtitle>
    </v-list-item>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-cloud-download</v-icon>
      </v-list-item-icon>
      <v-list-item-title>{{ $vuetify.lang.t('$vuetify.humidity') }}</v-list-item-title>
      <v-list-item-subtitle>{{ config.humidity }}%</v-list-item-subtitle>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: 'WeatherScene',
  props: ['config'],
  data() {
    return {
      labels: ['SU', 'MO', 'TU', 'WED', 'TH', 'FR', 'SA'],
      time: 0,
      forecast: [
        { day: 'Tuesday', icon: 'mdi-white-balance-sunny', temp: '24\xB0/12\xB0' },
        { day: 'Wednesday', icon: 'mdi-white-balance-sunny', temp: '22\xB0/14\xB0' },
        { day: 'Thursday', icon: 'mdi-cloud', temp: '25\xB0/15\xB0' },
      ],
    };
  },
};
</script>

<style scoped>

</style>
