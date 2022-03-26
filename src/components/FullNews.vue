<template>
  <v-main>
    <v-container>
      <h1>{{$route.params.name}}</h1>
      <p>{{$route.params.date}}</p>
      <img :src="baseUrl + '/images/' + $route.params.full_image" alt="">
      <p>{{$route.params.desc}}</p>
    </v-container>
    <comments-block/>
  </v-main>
</template>

<script>
import CommentsBlock from "@/components/CommentsBlock";

export default {
  name: 'FullNews',
  components: {
    CommentsBlock
  },
  data: () => ({
    baseUrl: window.location.origin
  })
}

</script>
