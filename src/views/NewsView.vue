<template>
  <div>
    <h1>Новости</h1>
    <all-news/>
  </div>
</template>

<script>
import AllNews from '@/components/AllNews'

export default {
  name: 'NewsView',
  components: {
    AllNews
  }
}
</script>
