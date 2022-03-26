<template>
  <v-main>
    <v-container>
      <h1>{{$route.params.name}}</h1>
      <p>{{$route.params.date}}</p>
      <img :src="baseUrl + '/images/' + $route.params.full_image" alt="">
      <p>{{$route.params.desc}}</p>
    </v-container>
    <v-form>
      <v-container>
        <v-col>
          <v-text-field
            v-model="message"
            :append-outer-icon="'mdi-send'"
            filled
            clear-icon="mdi-close-circle"
            clearable
            label="Комментарий"
            type="text"
            @click:append-outer="sendMessage"
            @click:clear="clearMessage"
          ></v-text-field>
        </v-col>
      </v-container>
    </v-form>
  </v-main>
</template>

<script>

export default {
  name: 'FullNews',
  data: () => ({
    message: 'Привет!',
    iconIndex: 0,
    baseUrl: window.location.origin
  }),
  methods: {
    sendMessage() {
      this.resetIcon()
      this.clearMessage()
    },
    clearMessage() {
      this.message = ''
    },
    resetIcon() {
      this.iconIndex = 0
    }
  },
}

</script>
