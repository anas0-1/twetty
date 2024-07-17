<template>
    <div>
      <div class="flex">
        <div class="flex-1">
          <p class="px-4 ml-2 mt-3 text-xs text-gray-400">{{ trend.category }}</p>
          <h2 class="px-4 ml-2 w-48 font-bold text-white">{{ trend.topic }}</h2>
          <p class="px-4 ml-2 mb-3 text-xs text-gray-400">{{ trend.tweets }}</p>
        </div>
        <div class="flex-1 px-4 py-2 m-2">
          <a href="#" class="text-2xl rounded-full text-white hover:bg-blue-800 hover:text-blue-300 float-right">
            <svg class="m-2 h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
          </a>
        </div>
      </div>
      <hr class="border-gray-600">
    </div>
  </template>
  
  <script>
  export default {
    props: {
      trend: Object,
      index: Number
    }
  };
  </script>
  
