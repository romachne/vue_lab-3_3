<template>
  <v-main>
    <v-card>
      <v-tabs
        v-model="tabs"
      >
        <v-tab
          v-for="article in data"
          :key="article.id"
          v-if="article.slider"
        >
          {{ article.name }}
        </v-tab>
      </v-tabs>

      <v-tabs-items
        v-model="tabs"
      >
        <v-tab-item
          v-for="article in data"
          :key="article.id"
          v-if="article.slider"
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
            <v-card flat>
              <v-img :src="baseUrl + '/images/' + article.full_image" alt=""></v-img>
            </v-card>
          </router-link>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-main>
</template>

<script>
export default {
  name: 'AllNews',
  data () {
    return {
      data: [],
      baseUrl: window.location.origin,
      tabs: ''
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
