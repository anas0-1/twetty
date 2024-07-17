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
      tweets: [],
    };
  },
};
</script>
