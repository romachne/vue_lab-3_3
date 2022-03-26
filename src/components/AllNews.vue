<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col
          v-for="article in data"
          :key="article.id"
          cols="2"
        >
          <router-link :to="{
            name: 'fullnews',
            params: {
              id: article.id,
              name: article.name,
              date: article.date,
              shortDesc: article.shortDesc,
              preview_image: article.preview_image,
              full_image: article.full_image,
              desc: article.desc
            }
          }">
            <v-card
              class="mx-auto"
              max-width="344"
            >
              <v-card-title>{{article.name}}</v-card-title>
              <v-img :src="baseUrl + '/images/' + article.preview_image" alt=""></v-img>
              <v-card-text>{{article.shortDesc}}</v-card-text>
            </v-card>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: 'AllNews',
  data () {
    return {
      data: [],
      baseUrl: window.location.origin
    }
  },
  mounted () {
    const baseUrl = process.env.BASE_URL
    const jsonurl = (baseUrl + 'articles.json')
    fetch(jsonurl)
      .then(response => response.json())
      .then(data => { this.data = data })
  }
}
</script>
