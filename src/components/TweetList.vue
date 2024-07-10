<template>
  <div>
    <TweetItem
      v-for="tweet in tweets"
      :key="tweet.id"
      :tweet="tweet"
    />
  </div>
</template>

<script>
import TweetItem from './TweetItem.vue';

export default {
  components: {
    TweetItem,
  },
  data() {
    return {
      tweets: [
        { id: 1, user: "John", content: "Hello World!", likes: 0, retweets: 0, replies: [] },
        { id: 2, user: "Jane", content: "Tweeting from Vue.js!", likes: 0, retweets: 0, replies: [] }
      ],
    };
  },
};
</script>
