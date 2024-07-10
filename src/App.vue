<template>
  <div class="flex">
    <LeftSidebar />
    
    <!-- Main content area -->
    <div class="w-3/5">
      <MiddleSection />
      <!-- Add other main content here -->
    </div>
  </div>
</template>

<script>
import LeftSidebar from './components/LeftSidebar.vue';
import MiddleSection from './components/MiddleSection.vue';

export default {
  components: {
    LeftSidebar,
    MiddleSection,
  },
};
</script>

<style scoped>
</style>
