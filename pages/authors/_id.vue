<template>
  <div>
    <author :author="author" />
  </div>
</template>

<script>
import { ApiService } from '../../common/config'
import author from '../../components/authors/author.vue'
export default {
  components: { author },
  async asyncData({ params }) {
    const response = await ApiService.get(`authors/${params.id}`)
    return {
      author: response.data,
    }
  },
}
</script>
