<template>
  <div class="flex bg-gray-900 text-white">
    <LeftSidebar />
    <div class="w-3/5">
      <MiddleSection />
      <TweetList ref="tweetList"/>
    </div>
    <RightSidebar />
  </div>
</template>

<script>
import LeftSidebar from './components/LeftSidebar.vue';
import RightSidebar from './components/RightSidebar.vue';
import MiddleSection from './components/MiddleSection.vue';
import TweetList from './components/TweetList.vue';

export default {
  components: {
    LeftSidebar,
    MiddleSection,
    RightSidebar,
    TweetList,
  },
 
};
</script>
