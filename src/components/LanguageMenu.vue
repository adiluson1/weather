<template>
  <v-menu
    :nudge-width="200"
    offset-y
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        v-on="on"
        text
      >
        <v-icon>mdi-translate</v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-card-title>{{ $vuetify.lang.t('$vuetify.translations') }}</v-card-title>
      <v-divider/>
      <v-list>
        <v-list-item @click="changeLang('ru')">
          <v-list-item-title>Русский</v-list-item-title>
        </v-list-item>
        <v-list-item @click="changeLang('en')">
          <v-list-item-title>English</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  name: 'LanguageMenu',
  methods: {
    changeLang(code) {
      this.$vuetify.lang.current = code;
    },
  },
};
</script>

<style scoped>

</style>
