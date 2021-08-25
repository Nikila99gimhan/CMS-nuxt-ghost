<template>
  
    <div class="container">
      <main>
        <h2>Latest thoughts</h2>
        <ul>
          <li v-for="(post, index) in posts" :key="index">
            <img :src="post.feature_image">
            <div class="content">
              <span>{{ post.authors[0].name }}</span>
              <nuxt-link :to="{ path: post.slug }">{{ post.title }}</nuxt-link>
              <p>{{ post.excerpt }}</p>
            </div>
          </li>
        </ul>
      </main>
    </div>

</template>

<script>
import { getPost } from '~/api/posts';
export default {
  async asyncData () {
    const post = await getPost();
    return { post: post }
  }
}
</script>

<styel>

.container{
  margin:0 auto;
  min-height:100vh;
}
</styel>

