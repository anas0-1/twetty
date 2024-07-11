<template>
    <div>
      <div class="flex">
        <div class="flex-1">
          <img :src="user.avatar" alt="Avatar" class="rounded-full w-12 h-12 m-2">
        </div>
        <div class="flex-2">
          <h2 class="px-4 py-2 text-sm font-bold text-white">{{ user.name }}</h2>
          <p class="px-4 py-1 text-sm text-gray-400">{{ user.handle }}</p>
        </div>
        <div class="flex-1">
          <button class="text-sm bg-white text-blue-600 font-semibold py-2 px-4 rounded-full hover:bg-gray-200 float-right m-2">
            Follow
          </button>
        </div>
      </div>
      <hr class="border-gray-600">
    </div>
  </template>
  
  <script>
  export default {
    props: {
      user: Object
    }
  };
  </script>
  
  <style scoped>
  /* Scoped styles for follow suggestion component */
  </style>
  