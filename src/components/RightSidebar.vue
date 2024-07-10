<template>
    <div class="w-1/5 bg-gray-100 p-4 h-screen sticky top-0">
      <UserSuggestions />
    </div>
  </template>
  
  <script>
  import UserSuggestions from './UserSuggestions.vue';
  
  export default {
    name: 'RightSidebar',
    components: {
      UserSuggestions,
    },
  };
  </script>
  