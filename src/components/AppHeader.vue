<template>
  <v-app-bar
    app
    flat
  >
    <v-container class="py-0 fill-height">
      <v-avatar tile><img src="../assets/logo.png" alt=""></v-avatar>
      <router-link to="/"><v-btn text>Главная</v-btn></router-link>
      <router-link to="/news"><v-btn text>Новости</v-btn></router-link>
      <router-link to="/gallery"><v-btn text>Галерея</v-btn></router-link>
      <v-spacer></v-spacer>
      <v-responsive max-width="260">
        <v-text-field
          dense
          flat
          hide-details
          rounded
          solo-inverted>
        </v-text-field>
      </v-responsive>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppHeader"
}
</script>



