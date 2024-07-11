<template>
  <div class="container  flex">
    <LeftSidebar />
    <div class="w-3/5 px-4">
      <TweetList />
    </div>
    <RightSidebar />
  </div>
</template>

<script>
import LeftSidebar from '../components/LeftSidebar.vue';
import RightSidebar from '../components/RightSidebar.vue';
import TweetList from '../components/TweetList.vue';

export default {
  components: {
    LeftSidebar,
    RightSidebar,
    TweetList,
  },
};
</script>
