<template>
  <div>
    <v-container>
      <v-card
        v-for="comment in data"
        :key="comment.id"
      >
        <v-card-title>{{ comment.name }}</v-card-title>
        <v-card-text>{{ comment.comment }}</v-card-text>
      </v-card>
    </v-container>
    <v-form>
      <v-container>
        <name-input v-model="imya"/>
        <text-input v-model="comment" />
        <div v-on:click="pushData(imya, comment, data)">Отправить</div>
      </v-container>

    </v-form>
  </div>

</template>

<script>
import NameInput from "@/components/NameInput";
import TextInput from "@/components/TextInput";

export default {
  name: "CommentsBlock",
  components: {
    TextInput,
    NameInput
  },
  methods: {
    pushData (imya, comment, data) {
      const obj = {name: imya, comment: comment}
      data.push(obj)
      console.log(data)
    }
  },
  data: () => ({
    data: [],
    comment: '',
    imya: ''
  }),
  mounted () {
    const baseUrl = process.env.BASE_URL
    const jsonurl = (baseUrl + 'comments.json')
    fetch(jsonurl)
      .then(response => response.json())
      .then(data => { this.data = data })
  }
}
</script>

<style scoped>

</style>
