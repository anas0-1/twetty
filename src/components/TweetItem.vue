<template>
  <div class="bg-white shadow-md rounded-lg p-4 mb-4">
    <h2 class="text-xl font-bold">{{ tweet.user }}</h2>
    <p class="text-gray-700">{{ tweet.content }}</p>
    <div class="flex justify-between mt-2">
      <button class="text-blue-500" @click="likeTweet">Like {{ likes }}</button>
      <button class="text-blue-500" @click="retweet">Retweet {{ retweets }}</button>
      <button class="text-blue-500" @click="reply">Reply</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TweetItem',
  props: {
    tweet: Object,
  },
  data() {
    return {
      likes: this.tweet.likes,
      retweets: this.tweet.retweets,
    };
  },
  methods: {
    likeTweet() {
      this.likes += 1;
    },
    retweet() {
      this.retweets += 1;
    },
    reply() {
      // Handle reply
    },
  },
};
</script>
